import Image from "next/image";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { CourseLessonsContent, CourseModule } from "@/types";

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className={cn(fonts.heading.className, "text-ink text-xl font-semibold tracking-[-0.2px]")}>
      {children}
    </h2>
  );
}

function ModuleItem({ module }: { module: CourseModule }) {
  return (
    <div className="flex items-start gap-3 sm:items-center">
      <span className="bg-accent flex size-18 shrink-0 items-center justify-center rounded-3xl">
        <Image
          src="/images/icons/videocam-module.svg"
          alt=""
          width={40}
          height={40}
          className="size-10"
        />
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-ink text-base font-medium">{module.title}</p>
        <p className="text-ink-muted text-base leading-relaxed">{module.description}</p>
      </div>
    </div>
  );
}

export function CourseLessons({ lessons }: { lessons: CourseLessonsContent }) {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading>{lessons.intro.heading}</SectionHeading>
      <p className="text-ink-muted max-w-3xl text-base leading-relaxed">{lessons.intro.text}</p>

      <SectionHeading>Lesson List</SectionHeading>
      <div className="flex max-w-3xl flex-col gap-6">
        {lessons.modules.map((module) => (
          <ModuleItem key={module.title} module={module} />
        ))}
      </div>

      <SectionHeading>{lessons.lessonContent.heading}</SectionHeading>
      <p className="text-ink-muted max-w-3xl text-base leading-relaxed">
        {lessons.lessonContent.text}
      </p>

      <SectionHeading>{lessons.progressTracking.heading}</SectionHeading>
      <p className="text-ink-muted max-w-3xl text-base leading-relaxed">
        {lessons.progressTracking.text}
      </p>

      <div className="border-shuttle-200 flex max-w-3xl flex-col gap-2 rounded-2xl border bg-white p-4">
        <p className="text-ink text-sm font-medium">{lessons.progress.label}</p>
        <p
          className={cn(
            fonts.heading.className,
            "text-ink text-4xl font-semibold tracking-[-0.36px]",
          )}
        >
          {lessons.progress.percent}%
        </p>
        <div className="bg-line h-2 w-full overflow-hidden rounded-3xl">
          <div
            className="bg-accent h-full rounded-3xl"
            style={{ width: `${lessons.progress.percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
