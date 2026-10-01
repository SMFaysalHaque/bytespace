import Image from "next/image";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { CourseDetail } from "@/types";

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className={cn(fonts.heading.className, "text-ink text-xl font-semibold tracking-[-0.2px]")}>
      {children}
    </h2>
  );
}

export function CourseAbout({ course }: { course: CourseDetail }) {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading>Description</SectionHeading>
      <div className="text-ink-muted flex max-w-3xl flex-col gap-4 text-base leading-relaxed">
        {course.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <SectionHeading>Sneak Peak</SectionHeading>
      <div className="grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {course.sneakPeek.map((image, index) => (
          <div
            key={index}
            className="bg-surface relative aspect-[167/125] overflow-hidden rounded-2xl"
          >
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>

      <SectionHeading>Key Points</SectionHeading>
      <ul className="flex flex-col gap-3">
        {course.keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <Image
              src="/images/icons/check-circle.svg"
              alt=""
              width={24}
              height={24}
              className="size-6 shrink-0"
            />
            <span className="text-ink-muted text-base">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
