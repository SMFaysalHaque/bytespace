import type { Course, FilterOption } from "@/types";
import { courses } from "./courses";

export const searchCategoryTabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const searchFilters: FilterOption[] = [
  { label: "Filter", icon: "/images/icons/filter.svg" },
  { label: "Level", icon: "/images/icons/level.svg" },
  { label: "Category", icon: "/images/icons/category.svg" },
];

export const searchSort: FilterOption = {
  label: "Most relevant",
  icon: "/images/icons/sort.svg",
};

export const searchPageCount = 5;

export const searchResults: Course[] = Array.from({ length: 3 }, (_, page) =>
  courses.map((course) => ({ ...course, id: `${course.id}-p${page + 1}` })),
).flat();
