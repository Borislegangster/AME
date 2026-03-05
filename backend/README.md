# AME Backend (implémentation roadmap)

Implémentation backend API v1 sans dépendances externes (Node.js natif), couvrant les fonctionnalités clés de la roadmap.

## Fonctionnalités livrées

- Auth: register/login/refresh/me/forgot/reset
- Gestion des rôles (`admin`, `editor`, `client`) avec garde des routes admin
- CRUD admin + lecture publique pour:
  - services
  - projets
  - blog
- Contact, newsletter, FAQ
- KPIs dashboard admin (`/api/v1/admin/dashboard/kpis`)
- Persistance locale JSON: `backend/data/store.json`

## Lancer l'API

```bash
cd backend
npm run dev
```

API par défaut: `http://localhost:4000`

## Compte admin seedé

- email: `admin@example.com`
- mot de passe: `password`

Variables d'env disponibles:
- `PORT`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `ACCESS_TOKEN_TTL_MS`
- `REFRESH_TOKEN_TTL_MS`

## Tests

```bash
cd backend
npm test
```
