import type { ReactNode } from "react";

/**
 * Compose all client-side providers here (TanStack Query, theme, toaster, ...)
 * so the root layout stays clean.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
