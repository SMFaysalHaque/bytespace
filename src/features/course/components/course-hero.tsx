import Image from "next/image";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { CourseDetail, CourseMeta } from "@/types";

function MetaPill({ meta }: { meta: CourseMeta }) {
  return (
    <span className="text-ink flex items-center gap-2 rounded-3xl bg-white px-6 py-2 text-base font-medium">
      <Image src={meta.icon} alt="" width={24} height={24} className="size-6" />
      {meta.label}
    </span>
  );
}

export function CourseHero({ course }: { course: CourseDetail }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1
            className={cn(
              fonts.heading.className,
              "text-surface text-3xl font-semibold tracking-[-0.36px] sm:text-4xl lg:text-[36px]",
            )}
          >
            {course.title}
          </h1>
          <p
            className={cn(
              fonts.heading.className,
              "text-surface text-lg font-semibold tracking-[-0.2px] sm:text-xl",
            )}
          >
            {course.subtitle}
          </p>
        </div>

        <p className="text-base font-medium text-[#f1f4fe] sm:text-lg">
          by <span className="text-accent">{course.studio}</span>
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          {course.meta.map((meta) => (
            <MetaPill key={meta.label} meta={meta} />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="bg-accent text-ink hover:bg-accent-bright flex shrink-0 items-center justify-center gap-2 self-start rounded-3xl px-6 py-2 text-base font-medium transition-colors"
      >
        <Image src="/images/icons/share.svg" alt="" width={24} height={24} className="size-6" />
        Share
      </button>
    </div>
  );
}
