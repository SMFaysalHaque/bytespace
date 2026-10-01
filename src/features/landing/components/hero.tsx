import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { HappyStudentsCard } from "./happy-students-card";
import { LearningProgressCard } from "./learning-progress-card";

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

const cardClass = "rounded-2xl bg-white shadow-xl";

function SearchBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-start gap-3 sm:gap-4", className)}>
      <div className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-4 sm:h-12 sm:px-6 lg:h-13 lg:w-115.25 lg:flex-none">
        <Image
          src="/images/icons/search.svg"
          alt=""
          width={24}
          height={24}
          className="size-5 shrink-0 sm:size-6"
        />
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="text-ink placeholder:text-muted w-full min-w-0 bg-transparent text-base outline-none lg:text-lg"
        />
      </div>
      <Link
        href="/search"
        className="bg-accent text-ink hover:bg-accent-bright inline-flex shrink-0 items-center justify-center rounded-3xl px-4 py-2.5 text-base font-medium transition-colors sm:px-6 sm:py-3 lg:text-lg"
      >
        Search
      </Link>
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
          <SearchBar className="w-full max-w-md sm:max-w-xl sm:justify-center" />
        </Container>
        <div className="relative mx-auto mt-8 aspect-square w-full max-w-75 sm:mt-0 sm:max-w-100 md:max-w-115">
          <div className="absolute -bottom-1/2 md:-bottom-56 left-1/2 z-10 h-[118%] w-full -translate-x-1/2">
            <Image
            src="/images/hero/glow.svg"
            alt=""
            fill
            aria-hidden
            className="z-0 object-contain select-none"
          />
          </div>
          <div className="absolute bottom-0 left-1/2 z-10 h-[118%] w-[86%] -translate-x-1/2">
            <Image
              src="/images/hero/person.png"
              alt="Student learning online"
              fill
              priority
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
                "w-233.75 text-[72px] leading-[1.2] font-semibold tracking-[-0.72px] text-white",
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
