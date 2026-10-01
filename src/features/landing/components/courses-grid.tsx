import { courses } from "@/data/courses";
import { CourseCard } from "./course-card";

export function CoursesGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
