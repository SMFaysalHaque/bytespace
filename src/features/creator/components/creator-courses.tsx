import { Container } from "@/components/shared";
import { courses } from "@/data/courses";
import { CourseCard } from "@/features/landing/components/course-card";
import { SearchToolbar } from "@/features/search/components";

export function CreatorCourses() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-18">
      <Container className="flex flex-col gap-10 sm:gap-14">
        <SearchToolbar />
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
