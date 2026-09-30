import { categories } from "@/data/categories";
import { CategoryCard } from "./category-card";

export function CategoryGrid() {
  return (
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-10 lg:grid-cols-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
