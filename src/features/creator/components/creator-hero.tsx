import Image from "next/image";
import { Container } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { featuredCreator } from "@/data/creators";
import { cn } from "@/lib/utils";
import type { Stat } from "@/types";

function StatPill({ stat }: { stat: Stat }) {
  return (
    <span className="flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-lg font-medium">
      <span className="text-primary">{stat.value}</span>
      <span className="text-ink">{stat.label}</span>
    </span>
  );
}

export function CreatorHero() {
  const creator = featuredCreator;

  return (
    <section className="bg-primary relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 select-none"
      >
        <Image
          src="/images/hero/grid.svg"
          alt=""
          width={1442}
          height={1026}
          className="max-w-none"
          priority
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10 pt-32 pb-14 sm:pt-36 lg:pt-44 lg:pb-20">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="relative size-24 shrink-0 overflow-hidden rounded-3xl">
            <Image src={creator.avatar} alt={creator.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1
                className={cn(
                  fonts.heading.className,
                  "text-surface text-3xl font-semibold tracking-[-0.36px] sm:text-4xl lg:text-[36px]",
                )}
              >
                {creator.name}
              </h1>
              <span className="bg-accent text-ink rounded-3xl px-6 py-2 text-base font-medium">
                {creator.badge}
              </span>
            </div>
            <p className="text-surface text-base sm:text-lg">{creator.role}</p>
          </div>
        </div>

        <div className="text-surface flex max-w-[1197px] flex-col gap-2 text-base leading-relaxed sm:text-lg">
          {creator.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {creator.stats.map((stat) => (
              <StatPill key={stat.label} stat={stat} />
            ))}
          </div>
          <button
            type="button"
            className="bg-accent text-ink hover:bg-accent-bright self-start rounded-3xl px-6 py-3 text-lg font-medium transition-colors sm:self-auto"
          >
            Follow
          </button>
        </div>
      </Container>
    </section>
  );
}
