import type { Metadata } from "next";
import { courseDetail } from "@/data/course-details";
import { CourseDetailView } from "@/features/course/components";

export const metadata: Metadata = {
  title: courseDetail.title,
  description: courseDetail.subtitle,
};

export default function CoursesPage() {
  return <CourseDetailView course={courseDetail} />;
}
