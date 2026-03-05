import { config } from './config.js';
import { hashPassword } from './auth.js';
import { createEntity, readStore, writeStore } from './store.js';

export function seedAdmin() {
  const store = readStore();
  if (store.users.some((u) => u.email === config.adminEmail)) return;
  store.users.push(
    createEntity({
      name: 'Admin',
      email: config.adminEmail,
      passwordHash: hashPassword(config.adminPassword),
      role: 'admin',
      emailVerified: true,
    }),
  );
  writeStore(store);
}
