# Analyse fonctionnelle & planning backend – AME (client + admin)

## 1) État actuel de l’application

Le dépôt contient deux applications frontend distinctes :

- `client/` : site vitrine/public (React + Vite + TypeScript).
- `admin/` : interface d’administration (React + Vite + TypeScript, React Query, AuthContext).

À ce stade, la majorité des données côté UI sont statiques (tableaux en dur, composants sans appels API), et les formulaires simulent des actions sans persistance backend réelle.

## 2) Fonctionnalités côté client (observées)

## 2.1 Navigation & pages publiques

- Routage public complet (accueil, à propos, services, projets, blog, contact, pages légales, FAQ, aide, auth).
- Détails dynamiques par URL pour service (`/services/:id`), projet (`/projects/:id`), article (`/blog/:id`).

## 2.2 Contenus métiers (vitrine)

- Page d’accueil structurée en sections : hero, services, réalisations, FAQ, témoignages, newsletter, etc.
- Catalogue de services avec catégories et fiches détaillées.
- Catalogue projets avec filtres (catégorie/statut) et fiches détaillées.
- Blog avec listing et page article (avec interactions locales : like/share/comment non persistés).

## 2.3 Formulaires & interactions utilisateur

- Contact : formulaire présent mais sans envoi vers API (simple simulation).
- Newsletter : formulaire avec `action="#"`, sans logique backend.
- Auth utilisateur (login/register/forgot/reset) : UX en place, mais logique mock/simulée.
- FAQ/aide : recherche/accordéon côté client uniquement.

## 2.4 SEO & conformité

- Composant SEO utilisé sur les pages principales.
- Pages légales (CGU/Privacy/Cookies) et base de support/FAQ déjà disponibles.

## 3) Fonctionnalités côté admin (observées)

## 3.1 Auth & sécurité (actuelle)

- AuthContext avec token en `localStorage` et utilisateur mock.
- Login admin basé sur identifiants codés en dur (`admin@example.com` / `password`).
- Route protégée prévue (`ProtectedRoute`), layout admin avec logout.

## 3.2 Pilotage & dashboard

- Dashboard avec KPIs, graphique, activité récente : toutes les données sont statiques.
- Navigation latérale pour modules : Utilisateurs, Projets, Services, Blog, Paramètres.

## 3.3 Écart critique identifié

- L’application admin importe des pages/composants (`Users`, `Projects`, `Services`, `Blog`, `Settings`, `ProtectedRoute`, `pages/auth/Login`) qui ne sont pas présentes dans l’arborescence actuelle ; le backend doit donc être planifié en parallèle d’un chantier de complétion frontend admin.

## 4) Cibles backend pour rendre l’app "intégralement et hautement fonctionnelle"

## 4.1 Principes d’architecture

- API versionnée : `/api/v1`.
- Auth JWT courte durée + refresh token (rotation), gestion rôles (admin, editor, client).
- Base relationnelle (PostgreSQL) + ORM (Prisma/TypeORM/Drizzle).
- Stockage médias (S3-compatible) pour images services/projets/blog.
- Cache (Redis) pour sessions refresh, rate-limit, pages chaudes.
- Observabilité : logs structurés, traces, métriques (OpenTelemetry + Prometheus/Grafana).

## 4.2 Domaines fonctionnels backend

1. **IAM & Auth**
   - inscription/connexion client,
   - connexion admin,
   - oubli/réinitialisation mot de passe (token signé + expiration),
   - vérification email,
   - gestion rôles et permissions.

2. **CMS services**
   - CRUD catégories + services,
   - contenus multisections (description, process, FAQ, galerie),
   - publication brouillon/publié.

3. **CMS projets**
   - CRUD projets (titre, description, progression, statut, catégorie, localisation, dates),
   - galerie médias,
   - tags/filtres.

4. **CMS blog**
   - CRUD articles + catégories,
   - slug unique,
   - état brouillon/publié/programmé,
   - SEO (title/meta/og).

5. **Leads & CRM léger**
   - formulaires contact,
   - demandes de devis,
   - newsletter opt-in,
   - pipeline simple (nouveau/en cours/traité).

6. **Support/FAQ**
   - CRUD FAQ + catégories,
   - publication,
   - recherche full-text.

7. **Analytics métier**
   - événements frontend (visites, clics CTA, soumissions formulaires),
   - agrégations dashboard.

## 4.3 Exigences non-fonctionnelles "hautement fonctionnelle"

- Performance : pagination systématique, index DB, cache pages publiques.
- Sécurité : OWASP ASVS baseline, rate limiting, CORS strict, validation schéma (zod/joi), audit log admin.
- Fiabilité : migrations versionnées, sauvegardes DB, jobs asynchrones (emails) avec retry.
- Qualité : tests unitaires, intégration, e2e API + contrats OpenAPI.

## 5) Planning d’implémentation backend (à suivre)

## Sprint 0 (3–5 jours) – Cadrage & fondations

- Choix stack backend + conventions monorepo.
- Modélisation initiale des entités (Users, Roles, Services, Projects, BlogPosts, Leads, FAQ, Media).
- Mise en place CI (lint/test/build), environnements (`dev/staging/prod`) et secrets.
- Spécification OpenAPI v1 (endpoints prioritaires).

**Livrables** : schéma DB v1, repo backend initialisé, pipeline CI verte, spec API v1.

## Sprint 1 (1 semaine) – Auth & base sécurité

- Endpoints : register/login/logout/refresh/me/forgot/reset.
- Hash mots de passe (Argon2/Bcrypt), JWT access + refresh rotatif.
- Middleware RBAC, garde admin.
- Email transactionnel (forgot password + verification).

**Critère GO** : flows auth client/admin complets branchés au frontend.

## Sprint 2 (1 semaine) – CMS Services + Projets

- CRUD admin sécurisé pour services/projets + upload médias.
- Endpoints publics paginés + filtres (catégorie/statut).
- Slugs + recherche basique.

**Critère GO** : pages client Services/Projects alimentées par API réelle.

## Sprint 3 (1 semaine) – CMS Blog + SEO

- CRUD blog/catégories + workflow brouillon/publié/programmé.
- Endpoint public articles (listing + détail par slug/id).
- Champs SEO pilotables depuis admin.

**Critère GO** : blog client et détail article totalement dynamiques.

## Sprint 4 (1 semaine) – Leads, Contact, Newsletter, FAQ

- Endpoint contact/devis + persistence + notifications email.
- Gestion newsletter (double opt-in recommandé).
- CRUD FAQ côté admin + endpoint public.

**Critère GO** : tous les formulaires client deviennent transactionnels.

## Sprint 5 (1 semaine) – Dashboard & analytics admin

- Ingestion d’événements (visites, conversions).
- KPIs agrégés pour dashboard admin (périodes 7j/30j/90j).
- Journal d’activité admin (audit trail minimal).

**Critère GO** : dashboard admin alimenté par données réelles.

## Sprint 6 (4–5 jours) – Hardening & mise en prod

- Tests e2e complets, tests charge sur endpoints critiques.
- Monitoring/alerting, sauvegardes automatiques, runbooks incidents.
- Revue sécurité et conformité RGPD (consentement, droits suppression/export).

**Critère GO** : readiness production validée.

## 6) Endpoints API prioritaires (MVP)

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`
- `GET /auth/me`
- `GET /services` / `GET /services/:slug` / `POST|PUT|DELETE /admin/services`
- `GET /projects` / `GET /projects/:slug` / `POST|PUT|DELETE /admin/projects`
- `GET /blog/posts` / `GET /blog/posts/:slug` / `POST|PUT|DELETE /admin/blog/posts`
- `POST /contact`
- `POST /newsletter/subscribe`
- `GET /faq`
- `GET /admin/dashboard/kpis`

## 7) Dépendances frontend à traiter en parallèle

- Brancher toutes les pages client sur API (actuellement statiques).
- Créer/compléter les pages admin manquantes (`Users`, `Projects`, `Services`, `Blog`, `Settings`, `auth/Login`) et le `ProtectedRoute` importé.
- Remplacer la logique auth mock admin par authentification backend réelle.

## 8) Ordre d’exécution recommandé

1. Auth + sécurité (bloquant).
2. Services/Projects (coeur business vitrine).
3. Blog (acquisition SEO).
4. Contact/newsletter/FAQ (conversion + support).
5. Dashboard analytics (pilotage).
6. Hardening & prod.

Ce planning est conçu pour livrer rapidement de la valeur tout en réduisant le risque technique et en garantissant une montée en qualité progressive.
