import { searchResults } from "@/data/search";
import { CourseCard } from "@/features/landing/components/course-card";

export function SearchResults() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
      {searchResults.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
