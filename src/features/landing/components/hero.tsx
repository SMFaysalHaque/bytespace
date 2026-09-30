import Image from "next/image";
import { Container } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";

const personShadow =
  "drop-shadow(0 24px 24px rgba(0,0,0,0.09)) drop-shadow(0 73px 72px rgba(0,0,0,0.13))";

const ornaments = [
  { src: "/images/hero/coil-lime.png", left: 135, top: 413, w: 267, h: 387, flip: false },
  { src: "/images/hero/cone-lime.png", left: 1335, top: 406, w: 213, h: 372, flip: false },
  { src: "/images/hero/cone-white-r.png", left: 1200, top: 558, w: 190, h: 189, flip: false },
  { src: "/images/hero/coil-white-sm.png", left: 270.5, top: 564.5, w: 177, h: 176, flip: true },
  { src: "/images/hero/coil-white-r.png", left: 1292, top: 837, w: 317, h: 332, flip: false },
  { src: "/images/hero/cone-white-l.png", left: 189, top: 853, w: 346, h: 343, flip: false },
];

const avatars = [1, 2, 3, 4, 5, 6, 7];

const cardClass = "rounded-2xl bg-white shadow-xl";

function SearchBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <div className="flex h-13 w-full items-center gap-2 rounded-3xl bg-white px-6 sm:w-115.25">
        <Image
          src="/images/icons/search.svg"
          alt=""
          width={24}
          height={24}
          className="size-6 shrink-0"
        />
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="text-ink placeholder:text-muted w-full bg-transparent text-lg outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-accent text-ink hover:bg-accent-bright rounded-3xl px-6 py-3 text-lg font-medium transition-colors"
      >
        Search
      </button>
    </div>
  );
}

function LearningProgressCard() {
  return (
    <div className={cn(cardClass, "flex flex-col gap-2 p-4")}>
      <p className="text-ink text-sm font-medium">Learning Progress</p>
      <p className={cn(fonts.heading.className, "text-ink text-5xl font-semibold tracking-tight")}>
        55%
      </p>
      <div className="relative h-2 w-50 rounded-full bg-[#f6f6f6]">
        <div className="bg-accent absolute inset-y-0 left-0 w-28 rounded-full" />
      </div>
    </div>
  );
}

function HappyStudentsCard() {
  return (
    <div className={cn(cardClass, "flex w-64.5 flex-col gap-2 p-4")}>
      <div className="flex flex-col">
        <p className="text-ink text-base font-medium">Happy Students</p>
        <div className="flex items-center gap-1">
          <p className="text-xs">
            <span className="text-ink">4.5 </span>
            <span className="text-muted">(240)</span>
          </p>
          <Image src="/images/icons/star.svg" alt="" width={13} height={13} className="size-3.5" />
        </div>
      </div>
      <div className="flex items-center -space-x-4">
        {avatars.map((n) => (
          <span
            key={n}
            className="relative size-10.75 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
          >
            <Image src={`/images/hero/avatars/a${n}.png`} alt="" fill className="object-cover" />
          </span>
        ))}
        <span className="bg-accent text-ink relative flex size-10.75 shrink-0 items-center justify-center rounded-full text-xs font-bold ring-2 ring-white">
          2K+
        </span>
      </div>
    </div>
  );
}

function CategoryCard() {
  return (
    <div className={cn(cardClass, "flex flex-col p-4")}>
      <p className="text-ink text-base font-medium">UI/UX Design</p>
      <div className="text-muted flex items-center gap-2 text-xs">
        <span>200 Courses</span>
        <span className="text-[10px]">•</span>
        <span>1000+ Students</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-primary relative overflow-hidden lg:h-256">
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

      <div className="relative z-10 lg:hidden">
        <Container className="flex flex-col items-center gap-8 pt-28 text-center sm:pt-32">
          <div className="flex max-w-233.75 flex-col items-center gap-6">
            <h1
              className={cn(
                fonts.heading.className,
                "text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl",
              )}
            >
              Get Access to Hundreds Courses Available
            </h1>
            <p className="text-line max-w-xl text-base leading-relaxed sm:text-lg">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide
              range of courses.
            </p>
          </div>
          <SearchBar className="w-full max-w-xl flex-col sm:flex-row sm:justify-center" />
        </Container>
        <div className="relative mt-10 flex h-80 items-end justify-center sm:h-105">
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 sm:h-130 sm:w-130"
          >
            <Image src="/images/hero/glow.svg" alt="" fill className="object-contain" />
          </div>
          <div className="relative h-full w-75 sm:w-100">
            <Image
              src="/images/hero/person.png"
              alt="Student learning online"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 hidden h-256 w-360 -translate-x-1/2 lg:block">
        <div aria-hidden className="absolute top-145.5 left-1/2 z-0 size-287.25 -translate-x-1/2">
          <Image src="/images/hero/glow.svg" alt="" width={1149} height={1149} />
        </div>

        {ornaments.map((o) => (
          <Image
            key={o.src}
            src={o.src}
            alt=""
            width={o.w}
            height={o.h}
            unoptimized
            className="pointer-events-none absolute z-1 select-none"
            style={{
              left: o.left,
              top: o.top,
              width: o.w,
              height: o.h,
              transform: `translate(-50%, -50%)${o.flip ? " scaleX(-1)" : ""}`,
            }}
          />
        ))}

        <div
          className="absolute top-128 left-1/2 z-10 h-135.25 w-144.5 -translate-x-1/2"
          style={{ filter: personShadow }}
        >
          <Image
            src="/images/hero/person.png"
            alt="Student learning online"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        <div className="absolute z-20" style={{ left: 404, top: 639 }}>
          <CategoryCard />
        </div>
        <div className="absolute z-20" style={{ left: 842, top: 651 }}>
          <LearningProgressCard />
        </div>
        <div className="absolute z-20" style={{ left: 328, top: 837 }}>
          <HappyStudentsCard />
        </div>

        <div className="absolute top-42.25 left-1/2 z-30 flex w-300 -translate-x-1/2 flex-col items-center gap-15">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1
              className={cn(
                fonts.heading.className,
                "w-[935px] text-[72px] leading-[1.2] font-semibold tracking-[-0.72px] text-white",
              )}
            >
              Get Access to Hundreds Courses Available
            </h1>
            <p className="text-line text-lg leading-[1.6]">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide
              range of courses.
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
