/**
 * Typed access to environment variables. Import from here, not `process.env`,
 * so a missing variable fails loudly in one place.
 */
function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  /** Base URL of the FastAPI backend, e.g. http://localhost:8000/api/v1 */
  apiUrl: required("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL),
  /** Name of the httpOnly cookie the backend sets on login. */
  sessionCookie: process.env.SESSION_COOKIE_NAME ?? "access_token",
} as const;
