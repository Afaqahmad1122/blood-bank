# Blood Bank – Frontend

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui. Talks to the FastAPI backend.

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev      # http://localhost:3000
```

## Folder structure

```
frontend/
├── public/                  Static assets
├── tests/                   unit/ and e2e/ tests
└── src/
    ├── proxy.ts             Optimistic auth redirects (Next 16 replacement for middleware)
    ├── app/                 Routing only: thin pages, layouts, loading/error files
    │   ├── (marketing)/     Public site: /, /about, /find-blood, /donate
    │   ├── (auth)/          /login, /register, /forgot-password
    │   ├── (dashboard)/     Authenticated app under /dashboard/*
    │   └── api/health/      Health check for Docker / uptime monitors
    ├── features/            Domain modules (auth, donors, inventory, requests,
    │   └── <feature>/       appointments, hospitals, notifications), each with:
    │       ├── api/         Calls to the backend for this domain
    │       ├── components/  UI specific to this feature
    │       ├── hooks/       Data hooks (TanStack Query, etc.)
    │       ├── schemas/     Zod validation schemas
    │       └── types/       TypeScript types
    ├── components/
    │   ├── ui/              shadcn/ui primitives (generated, do not hand-edit lightly)
    │   ├── layout/          Header, footer, sidebar, topbar
    │   ├── shared/          Reusable app widgets (DataTable, EmptyState, PageHeader)
    │   └── forms/           Reusable form fields
    ├── hooks/               Generic hooks used across features
    ├── providers/           Client-side context providers, composed in AppProviders
    ├── config/              site.ts, routes.ts, env.ts
    ├── lib/
    │   ├── api/             fetch client + ApiError
    │   ├── auth/            Session helpers
    │   ├── constants/       Blood groups, compatibility matrix, donation rules
    │   └── utils.ts         cn() helper
    └── types/               Types shared across features
```

## Conventions

- **Pages stay thin.** A `page.tsx` composes components from `features/`; business logic does not live in `app/`.
- **Features don't import each other's internals.** Share code by moving it to `components/shared`, `lib` or `hooks`.
- **Dependency direction:** `app` → `features` → `components` / `hooks` / `lib` / `config`. Never the reverse.
- **No hard-coded paths or env access.** Use `ROUTES` from `config/routes.ts` and `env` from `config/env.ts`.
- **Server Components by default.** Add `"use client"` only where interactivity is needed.
- **Auth:** the backend sets an httpOnly cookie. `proxy.ts` only does optimistic redirects; the backend remains the authority.
- Import with the `@/` alias (maps to `src/`).
- Add shadcn components with `npx shadcn@latest add <name>`.
