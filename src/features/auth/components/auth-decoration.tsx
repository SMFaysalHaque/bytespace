import Image from "next/image";
import { courses } from "@/data/courses";
import { CourseCard } from "@/features/landing/components/course-card";
import { HappyStudentsCard } from "@/features/landing/components/happy-students-card";
import { cn } from "@/lib/utils";

export function AuthDecoration({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative h-[363px] w-[330px] select-none xl:h-[604px] xl:w-[548px]",
        className,
      )}
    >
      <div className="absolute top-0 left-0 h-[604px] w-[548px] origin-top-left scale-[0.6] xl:scale-100">
        <Image
          src="/images/auth/torus-lime.png"
          alt=""
          width={146}
          height={134}
          unoptimized
          className="absolute"
          style={{ left: 54, top: 13 }}
        />
        <div className="absolute w-[373px]" style={{ left: 25, top: 89 }}>
          <CourseCard course={courses[1]} />
        </div>
        <div className="absolute w-[373px]" style={{ left: 136, top: 0 }}>
          <CourseCard course={courses[2]} />
        </div>
        <Image
          src="/images/auth/triangle-lime.png"
          alt=""
          width={188}
          height={207}
          unoptimized
          className="absolute"
          style={{ left: 0, top: 397 }}
        />
        <Image
          src="/images/hero/coil-white-sm.png"
          alt=""
          width={175}
          height={174}
          unoptimized
          className="absolute -scale-x-100"
          style={{ left: 373, top: 321 }}
        />
        <div className="absolute" style={{ left: 251, top: 435 }}>
          <HappyStudentsCard />
        </div>
      </div>
    </div>
  );
}
