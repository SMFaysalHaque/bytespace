import Image from "next/image";
import type { Category } from "@/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="border-shuttle-200 flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border bg-white">
      <span className="bg-accent flex items-center justify-center rounded-full p-3">
        <Image src={category.icon} alt="" width={36} height={36} className="size-9" />
      </span>
      <p className="text-ink text-xl font-medium">{category.name}</p>
    </div>
  );
}
