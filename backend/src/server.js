import http from 'node:http';
import { URL } from 'node:url';
import { comparePassword, hashPassword, issueTokens, revokeToken, validateToken } from './auth.js';
import { config } from './config.js';
import { seedAdmin } from './seed.js';
import { createEntity, readStore, writeStore } from './store.js';

function json(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json' });
  res.end(JSON.stringify(body));
}

async function bodyOf(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  try { return JSON.parse(Buffer.concat(chunks).toString('utf-8')); } catch { return null; }
}

function getUserFromAuth(req) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return null;
  const token = auth.slice(7);
  const session = validateToken(token, 'access');
  if (!session) return null;
  const store = readStore();
  return store.users.find((u) => u.id === session.userId) || null;
}

function isAdmin(user) {
  return user && (user.role === 'admin' || user.role === 'editor');
}

function listPublic(items, searchParams) {
  let out = items.filter((i) => i.status === 'published');
  const category = searchParams.get('category');
  if (category) out = out.filter((i) => i.category === category);
  return out;
}

const map = {
  services: 'services',
  projects: 'projects',
  blog: 'blogPosts',
};

async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const method = req.method;

  if (url.pathname === '/health' && method === 'GET') return json(res, 200, { status: 'ok' });

  if (url.pathname === '/api/v1/auth/register' && method === 'POST') {
    const payload = await bodyOf(req);
    if (!payload || !payload.email || !payload.password || !payload.name) return json(res, 400, { message: 'Invalid payload' });
    const store = readStore();
    if (store.users.some((u) => u.email === payload.email)) return json(res, 409, { message: 'Email exists' });
    const user = createEntity({ name: payload.name, email: payload.email, passwordHash: hashPassword(payload.password), role: 'client', emailVerified: false });
    store.users.push(user);
    writeStore(store);
    return json(res, 201, { id: user.id, email: user.email, role: user.role });
  }

  if (url.pathname === '/api/v1/auth/login' && method === 'POST') {
    const payload = await bodyOf(req);
    if (!payload) return json(res, 400, { message: 'Invalid json' });
    const store = readStore();
    const user = store.users.find((u) => u.email === payload.email);
    if (!user || !comparePassword(payload.password || '', user.passwordHash)) return json(res, 401, { message: 'Invalid credentials' });
    const tokens = issueTokens(user.id);
    return json(res, 200, { ...tokens, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  }

  if (url.pathname === '/api/v1/auth/refresh' && method === 'POST') {
    const payload = await bodyOf(req);
    const refresh = validateToken(payload?.refreshToken, 'refresh');
    if (!refresh) return json(res, 401, { message: 'Invalid refresh token' });
    revokeToken(payload.refreshToken);
    return json(res, 200, issueTokens(refresh.userId));
  }

  if (url.pathname === '/api/v1/auth/me' && method === 'GET') {
    const user = getUserFromAuth(req);
    if (!user) return json(res, 401, { message: 'Unauthorized' });
    return json(res, 200, { id: user.id, name: user.name, email: user.email, role: user.role });
  }

  if (url.pathname === '/api/v1/auth/forgot-password' && method === 'POST') {
    const payload = await bodyOf(req);
    if (!payload?.email) return json(res, 400, { message: 'email required' });
    const store = readStore();
    const user = store.users.find((u) => u.email === payload.email);
    if (user) {
      user.resetToken = Math.random().toString(36).slice(2);
      user.resetExpiresAt = new Date(Date.now() + 3600000).toISOString();
      writeStore(store);
      return json(res, 200, { success: true, resetToken: user.resetToken });
    }
    return json(res, 200, { success: true });
  }

  if (url.pathname === '/api/v1/auth/reset-password' && method === 'POST') {
    const payload = await bodyOf(req);
    const store = readStore();
    const user = store.users.find((u) => u.resetToken === payload?.token);
    if (!user) return json(res, 400, { message: 'invalid token' });
    if (new Date(user.resetExpiresAt).getTime() < Date.now()) return json(res, 400, { message: 'expired token' });
    user.passwordHash = hashPassword(payload.password || '');
    delete user.resetToken;
    delete user.resetExpiresAt;
    writeStore(store);
    return json(res, 200, { success: true });
  }

  for (const [route, key] of Object.entries(map)) {
    if (url.pathname === `/api/v1/${route}` && method === 'GET') {
      const store = readStore();
      return json(res, 200, { items: listPublic(store[key], url.searchParams), total: listPublic(store[key], url.searchParams).length });
    }

    if (url.pathname.startsWith(`/api/v1/${route}/`) && method === 'GET') {
      const slug = decodeURIComponent(url.pathname.split('/').pop());
      const store = readStore();
      const item = store[key].find((i) => (i.slug === slug || i.id === slug) && i.status === 'published');
      if (!item) return json(res, 404, { message: 'Not found' });
      return json(res, 200, item);
    }

    if (url.pathname === `/api/v1/admin/${route}` && method === 'POST') {
      const user = getUserFromAuth(req);
      if (!isAdmin(user)) return json(res, 403, { message: 'Forbidden' });
      const payload = await bodyOf(req);
      if (!payload?.title || !payload?.slug || !payload?.description || !payload?.status) return json(res, 400, { message: 'Invalid payload' });
      const store = readStore();
      if (store[key].some((i) => i.slug === payload.slug)) return json(res, 409, { message: 'Slug exists' });
      const item = createEntity(payload);
      store[key].push(item);
      writeStore(store);
      return json(res, 201, item);
    }

    if (url.pathname.startsWith(`/api/v1/admin/${route}/`) && method === 'PUT') {
      const user = getUserFromAuth(req);
      if (!isAdmin(user)) return json(res, 403, { message: 'Forbidden' });
      const id = url.pathname.split('/').pop();
      const payload = await bodyOf(req);
      const store = readStore();
      const item = store[key].find((i) => i.id === id);
      if (!item) return json(res, 404, { message: 'Not found' });
      Object.assign(item, payload, { updatedAt: new Date().toISOString() });
      writeStore(store);
      return json(res, 200, item);
    }
  }

  if (url.pathname === '/api/v1/contact' && method === 'POST') {
    const payload = await bodyOf(req);
    if (!payload?.name || !payload?.email || !payload?.message) return json(res, 400, { message: 'Invalid payload' });
    const store = readStore();
    const entry = createEntity({ ...payload, status: 'new' });
    store.contacts.push(entry);
    writeStore(store);
    return json(res, 201, { success: true, id: entry.id });
  }

  if (url.pathname === '/api/v1/newsletter/subscribe' && method === 'POST') {
    const payload = await bodyOf(req);
    if (!payload?.email) return json(res, 400, { message: 'email required' });
    const store = readStore();
    if (!store.newsletterSubscriptions.some((s) => s.email === payload.email)) {
      store.newsletterSubscriptions.push(createEntity({ email: payload.email, status: 'active' }));
      writeStore(store);
    }
    return json(res, 201, { success: true });
  }

  if (url.pathname === '/api/v1/faq' && method === 'GET') {
    const store = readStore();
    const items = store.faqs.filter((f) => f.status === 'published');
    return json(res, 200, { items, total: items.length });
  }

  if (url.pathname === '/api/v1/admin/faq' && method === 'POST') {
    const user = getUserFromAuth(req);
    if (!isAdmin(user)) return json(res, 403, { message: 'Forbidden' });
    const payload = await bodyOf(req);
    if (!payload?.question || !payload?.answer || !payload?.category) return json(res, 400, { message: 'Invalid payload' });
    const store = readStore();
    const faq = createEntity({ ...payload, status: payload.status || 'published' });
    store.faqs.push(faq);
    writeStore(store);
    return json(res, 201, faq);
  }

  if (url.pathname === '/api/v1/admin/dashboard/kpis' && method === 'GET') {
    const user = getUserFromAuth(req);
    if (!isAdmin(user)) return json(res, 403, { message: 'Forbidden' });
    const store = readStore();
    return json(res, 200, {
      users: store.users.length,
      services: store.services.length,
      projects: store.projects.length,
      blogPosts: store.blogPosts.length,
      messages: store.contacts.length,
      newsletterSubscribers: store.newsletterSubscriptions.length,
    });
  }

  return json(res, 404, { message: 'Not found' });
}

export function createServer() {
  seedAdmin();
  return http.createServer(handler);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  createServer().listen(config.port, () => {
    console.log(`AME backend listening on ${config.port}`);
  });
}
