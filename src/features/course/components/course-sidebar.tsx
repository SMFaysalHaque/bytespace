import Image from "next/image";
import Link from "next/link";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { CourseDetail, CourseFeature, CourseLesson } from "@/types";

function CardHeading({ children }: { children: string }) {
  return (
    <h2 className={cn(fonts.heading.className, "text-ink text-xl font-semibold tracking-[-0.2px]")}>
      {children}
    </h2>
  );
}

function LessonRow({ lesson }: { lesson: CourseLesson }) {
  return (
    <div className="flex items-start justify-between gap-4 text-base">
      <div className="text-ink flex gap-2 font-medium">
        <span className="w-6 shrink-0">{lesson.order}</span>
        <span>{lesson.title}</span>
      </div>
      <span className="text-primary shrink-0">{lesson.duration}</span>
    </div>
  );
}

function IncludeRow({ feature }: { feature: CourseFeature }) {
  return (
    <div className="flex items-start gap-2">
      <Image src={feature.icon} alt="" width={24} height={24} className="size-6 shrink-0" />
      <span className="text-ink-muted text-base">{feature.label}</span>
    </div>
  );
}

export function CourseSidebar({ course, className }: { course: CourseDetail; className?: string }) {
  return (
    <aside
      className={cn(
        "border-shuttle-200 flex flex-col gap-6 rounded-3xl border bg-white p-6 sm:p-10",
        className,
      )}
    >
      <div className="flex flex-col gap-6">
        <CardHeading>{course.lessonsSummary}</CardHeading>
        <div className="flex flex-col gap-3">
          {course.lessonsPreview.map((lesson) => (
            <LessonRow key={lesson.order} lesson={lesson} />
          ))}
          <p className="text-ink-muted text-base">{course.moreLessons}</p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-ink-muted text-base leading-relaxed">{course.priceNote}</p>
        <p className="flex items-end gap-1">
          <span
            className={cn(
              fonts.heading.className,
              "text-primary text-4xl font-semibold tracking-[-0.36px]",
            )}
          >
            ${course.price}
          </span>
          <span className="text-ink-muted text-base">{course.priceUnit}</span>
        </p>
        <button
          type="button"
          className="bg-accent text-ink hover:bg-accent-bright w-full rounded-3xl px-6 py-3 text-lg font-medium transition-colors"
        >
          Enroll Now
        </button>
      </div>

      <CardHeading>This course include</CardHeading>
      <div className="flex flex-col gap-3">
        {course.includes.map((feature) => (
          <IncludeRow key={feature.label} feature={feature} />
        ))}
      </div>

      <hr className="border-shuttle-200" />

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="relative size-13 shrink-0 overflow-hidden rounded-full">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              fill
              className="object-cover"
            />
          </span>
          <div className="flex flex-col">
            <span className="text-ink text-lg font-medium">{course.instructor.name}</span>
            <span className="text-ink-muted text-base">{course.instructor.role}</span>
          </div>
        </div>
        <p className="text-ink-muted text-base leading-relaxed">{course.instructor.blurb}</p>
        <Link
          href={course.instructor.profileHref}
          className="border-shuttle-200 text-ink-muted hover:bg-surface self-start rounded-3xl border px-4 py-2 text-base font-medium transition-colors"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
