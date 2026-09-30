import type { ReactNode } from "react";
import Image from "next/image";
import { fonts } from "@/config/fonts";
import { enrolledStudents } from "@/data/courses";
import { cn } from "@/lib/utils";
import type { Course } from "@/types";

function MetaBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-3xl bg-[#f6f6f6]/60 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-[#4f4f4f] backdrop-blur-sm">
      {children}
    </span>
  );
}

function CourseThumbnail({ course }: { course: Course }) {
  return (
    <div className="bg-surface relative h-[195px] overflow-hidden rounded-xl">
      <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
      <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
        <MetaBadge>{course.lessons} Lessons</MetaBadge>
        <MetaBadge>{course.duration}</MetaBadge>
        <MetaBadge>{course.comments} Comments</MetaBadge>
      </div>
    </div>
  );
}

function LevelBadge({ level }: { level: string }) {
  return (
    <span className="bg-surface flex items-center gap-1 rounded-3xl px-3 py-1.5">
      <Image src="/images/icons/level.svg" alt="" width={20} height={20} className="size-5" />
      <span className="text-ink-muted text-xs font-medium">{level}</span>
    </span>
  );
}

function EnrolledStudents() {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {enrolledStudents.avatars.map((avatar, index) => (
          <span
            key={index}
            className="relative size-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
          >
            <Image src={avatar} alt="" fill className="object-cover" />
          </span>
        ))}
      </div>
      <span className="bg-accent text-ink ml-1 flex size-8 items-center justify-center rounded-full text-xs font-medium">
        {enrolledStudents.moreCount}
      </span>
    </div>
  );
}

function CourseRating({ value }: { value: number }) {
  return (
    <span className="flex shrink-0 items-center gap-1 text-lg text-[#4f4f4f]">
      {value}
      <Image
        src="/images/icons/star-outline.svg"
        alt=""
        width={24}
        height={24}
        className="size-6"
      />
    </span>
  );
}

function CoursePrice({ price }: { price: number }) {
  return (
    <p className="flex items-end gap-1">
      <span
        className={cn(fonts.heading.className, "text-primary text-xl font-semibold tracking-tight")}
      >
        ${price}
      </span>
      <span className="text-xs text-[#4f4f4f]">/lifetime</span>
    </p>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="border-shuttle-200 flex flex-col gap-4 rounded-3xl border bg-white p-[15px]">
      <CourseThumbnail course={course} />
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3
              className={cn(
                fonts.heading.className,
                "truncate text-xl font-semibold tracking-tight text-black",
              )}
            >
              {course.title}
            </h3>
            <p className="text-xs text-[#4f4f4f]">
              by <span className="text-primary">{course.studio}</span>
            </p>
          </div>
          <CourseRating value={course.rating} />
        </div>
        <div className="flex items-center gap-3">
          <LevelBadge level={course.level} />
          <EnrolledStudents />
        </div>
        <CoursePrice price={course.price} />
      </div>
    </article>
  );
}
