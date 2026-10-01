import { Container, SectionHeading } from "@/components/shared";
import { CourseFilters } from "./course-filters";
import { CoursesGrid } from "./courses-grid";

export function DiscoverPassion() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          titleClassName="max-w-[588px]"
          descriptionClassName="max-w-[917px]"
        />
        <CourseFilters />
        <CoursesGrid />
      </Container>
    </section>
  );
}
