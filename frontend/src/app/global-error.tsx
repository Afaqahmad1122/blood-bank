"use client";

export default function GlobalError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  console.error(error);

  return (
    <html lang="en">
      <body>
        <main style={{ padding: 24, textAlign: "center" }}>
          <h1>Something went wrong</h1>
          <button onClick={() => retry()}>Try again</button>
        </main>
      </body>
    </html>
  );
}
