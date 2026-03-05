import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.resolve(__dirname, '../data/store.json');
const initialData = {
  users: [],
  sessions: [],
  services: [],
  projects: [],
  blogPosts: [],
  contacts: [],
  newsletterSubscriptions: [],
  faqs: [],
};

function ensureStore() {
  const dir = path.dirname(dataPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify(initialData, null, 2));
}

export function readStore() {
  ensureStore();
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
}

export function writeStore(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export function createEntity(payload) {
  const now = new Date().toISOString();
  return { id: randomUUID(), createdAt: now, updatedAt: now, ...payload };
}
