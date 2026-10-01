import Image from "next/image";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";

function CtaBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 select-none"
      >
        <Image
          src="/images/hero/grid.svg"
          alt=""
          width={1440}
          height={1026}
          className="max-w-none"
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden select-none lg:block">
        <Image
          src="/images/hero/cta-ornaments.png"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>
    </>
  );
}

export function CreatorCta() {
  return (
    <section className="bg-primary w-full overflow-hidden">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden lg:h-[488px]">
        <CtaBackdrop />
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 px-6 py-20 text-center lg:h-full lg:py-0">
          <h2
            className={cn(
              fonts.heading.className,
              "text-surface max-w-[710px] text-3xl leading-[1.2] font-semibold tracking-[-0.44px] sm:text-4xl lg:text-[44px]",
            )}
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="text-surface max-w-[964px] text-base leading-relaxed sm:text-lg">
            Experience the collaboration of numerous creators and an expanding selection of courses.
            Register now and become a part of a community comprising over 10,000 local and
            international creators. Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>
          <button
            type="button"
            className="bg-accent text-ink hover:bg-accent-bright rounded-3xl px-6 py-3 text-lg font-medium transition-colors"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
