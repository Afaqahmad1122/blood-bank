/** Single source of truth for application URLs. Never hard-code paths in components. */
export const ROUTES = {
  home: "/",
  about: "/about",
  findBlood: "/find-blood",
  donate: "/donate",

  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",

  dashboard: "/dashboard",
  donors: "/dashboard/donors",
  inventory: "/dashboard/inventory",
  requests: "/dashboard/requests",
  appointments: "/dashboard/appointments",
  donations: "/dashboard/donations",
  notifications: "/dashboard/notifications",
  settings: "/dashboard/settings",
} as const;

/** Path prefixes that require an authenticated session (checked in `proxy.ts`). */
export const PROTECTED_PREFIXES = [ROUTES.dashboard] as const;

/** Routes only for signed-out users; signed-in users are redirected to the dashboard. */
export const AUTH_ROUTES = [ROUTES.login, ROUTES.register] as const;
