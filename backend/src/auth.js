import crypto from 'node:crypto';
import { config } from './config.js';
import { createEntity, readStore, writeStore } from './store.js';

function hash(password, salt = crypto.randomBytes(16).toString('hex')) {
  const key = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${key}`;
}

function verify(password, hashed) {
  const [salt, key] = hashed.split(':');
  const newKey = crypto.scryptSync(password, salt, 64).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(key, 'hex'), Buffer.from(newKey, 'hex'));
}

function token() {
  return crypto.randomBytes(32).toString('hex');
}

export function hashPassword(password) {
  return hash(password);
}

export function comparePassword(password, hashed) {
  return verify(password, hashed);
}

export function issueTokens(userId) {
  const accessToken = token();
  const refreshToken = token();
  const store = readStore();
  const now = Date.now();
  store.sessions.push(
    createEntity({ userId, type: 'access', token: accessToken, expiresAt: new Date(now + config.accessTokenTtlMs).toISOString(), revoked: false }),
    createEntity({ userId, type: 'refresh', token: refreshToken, expiresAt: new Date(now + config.refreshTokenTtlMs).toISOString(), revoked: false }),
  );
  writeStore(store);
  return { accessToken, refreshToken };
}

export function revokeToken(tokenValue) {
  const store = readStore();
  const session = store.sessions.find((s) => s.token === tokenValue && !s.revoked);
  if (session) session.revoked = true;
  writeStore(store);
}

export function validateToken(tokenValue, type = 'access') {
  const store = readStore();
  const session = store.sessions.find((s) => s.token === tokenValue && s.type === type && !s.revoked);
  if (!session) return null;
  if (new Date(session.expiresAt).getTime() < Date.now()) return null;
  return session;
}
