import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="text-muted-foreground text-lg">{siteConfig.description}</p>
      <div className="flex gap-3">
        <Link href={ROUTES.register} className={cn(buttonVariants())}>
          Become a donor
        </Link>
        <Link
          href={ROUTES.findBlood}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Find blood
        </Link>
      </div>
    </section>
  );
}
