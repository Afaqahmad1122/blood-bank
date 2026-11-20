import Link from "next/link";

import { ROUTES } from "@/config/routes";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link href={ROUTES.home} className="underline underline-offset-4">
        Back to home
      </Link>
    </main>
  );
}
