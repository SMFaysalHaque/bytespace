import Image from "next/image";
import { Container } from "@/components/shared";
import type { CourseDetail } from "@/types";
import { CourseContent } from "./course-content";
import { CourseHero } from "./course-hero";
import { CourseSidebar } from "./course-sidebar";
import { CourseVideo } from "./course-video";

export function CourseDetailView({ course }: { course: CourseDetail }) {
  return (
    <>
      <section className="bg-primary relative overflow-hidden pt-32 pb-12 min-[1440px]:pb-[615px] sm:pt-36 lg:pt-44 lg:pb-[426px] xl:pb-[508px]">
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

        <Container className="relative z-10">
          <CourseHero course={course} />
        </Container>
      </section>

      <Container className="relative z-10 pb-16 min-[1440px]:-mt-[567px] lg:-mt-[378px] lg:pb-24 xl:-mt-[460px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-x-10 lg:gap-y-[72px] xl:grid-cols-[minmax(0,1fr)_380px]">
          <CourseVideo
            poster={course.poster}
            title={course.title}
            className="lg:col-start-1 lg:row-start-1"
          />
          <CourseSidebar course={course} className="lg:col-start-2 lg:row-span-2 lg:self-start" />
          <CourseContent course={course} className="lg:col-start-1 lg:row-start-2" />
        </div>
      </Container>
    </>
  );
}
