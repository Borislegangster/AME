import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createServer } from '../src/server.js';

const storePath = path.resolve(process.cwd(), 'backend/data/store.json');

function resetStore() {
  if (fs.existsSync(storePath)) fs.unlinkSync(storePath);
}

test('login admin + create and read service', async () => {
  resetStore();
  const server = createServer().listen(0);
  const port = server.address().port;
  const base = `http://127.0.0.1:${port}`;

  const login = await fetch(`${base}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email: 'admin@example.com', password: 'password' }),
  });
  assert.equal(login.status, 200);
  const { accessToken } = await login.json();

  const create = await fetch(`${base}/api/v1/admin/services`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      title: 'Construction neuve',
      slug: 'construction-neuve',
      category: 'construction',
      description: 'Description test',
      status: 'published',
    }),
  });
  assert.equal(create.status, 201);

  const publicList = await fetch(`${base}/api/v1/services`);
  const listBody = await publicList.json();
  assert.equal(publicList.status, 200);
  assert.equal(listBody.total, 1);

  server.close();
});
