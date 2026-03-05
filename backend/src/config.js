export const config = {
  port: Number(process.env.PORT || 4000),
  adminEmail: process.env.ADMIN_EMAIL || 'admin@example.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'password',
  accessTokenTtlMs: Number(process.env.ACCESS_TOKEN_TTL_MS || 15 * 60 * 1000),
  refreshTokenTtlMs: Number(process.env.REFRESH_TOKEN_TTL_MS || 7 * 24 * 60 * 60 * 1000),
};
