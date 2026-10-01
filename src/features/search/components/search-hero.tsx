import Image from "next/image";
import { Container } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";

function SearchField() {
  return (
    <div className="flex w-full max-w-156 items-stretch gap-2 sm:gap-4">
      <div className="flex h-12 flex-1 items-center gap-2 rounded-3xl bg-white px-4 sm:h-13 sm:px-6">
        <Image
          src="/images/icons/search.svg"
          alt=""
          width={24}
          height={24}
          className="size-5 shrink-0 sm:size-6"
        />
        <input
          type="text"
          placeholder="Search"
          className="text-ink placeholder:text-muted w-full min-w-0 bg-transparent text-base outline-none sm:text-lg"
        />
      </div>
      <button
        type="button"
        className="bg-accent text-ink hover:bg-accent-bright flex shrink-0 items-center justify-center gap-1 rounded-3xl px-4 text-base font-medium transition-colors sm:gap-2 sm:px-6 sm:text-lg"
      >
        Courses
        <Image
          src="/images/icons/chevron-down.svg"
          alt=""
          width={24}
          height={24}
          className="size-5 sm:size-6"
        />
      </button>
    </div>
  );
}

export function SearchHero() {
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

      <Container className="relative z-10 flex flex-col items-center gap-6 pt-28 pb-12 text-center sm:gap-8 sm:pt-32 sm:pb-16 lg:min-h-90 lg:justify-center lg:pt-30 lg:pb-14">
        <h1
          className={cn(
            fonts.heading.className,
            "text-surface text-2xl font-semibold tracking-[-0.36px] sm:text-3xl lg:text-[36px]",
          )}
        >
          Find Your Next Course
        </h1>
        <SearchField />
      </Container>
    </section>
  );
}
