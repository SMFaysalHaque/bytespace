import Image from "next/image";
import { searchFilters, searchSort } from "@/data/search";
import type { FilterOption } from "@/types";

function ToolbarButton({ option }: { option: FilterOption }) {
  return (
    <button
      type="button"
      className="border-shuttle-200 text-ink-muted hover:bg-surface flex items-center gap-1 rounded-3xl border bg-white px-3 py-2.5 text-sm font-medium transition-colors sm:px-4 sm:py-3 sm:text-base"
    >
      <Image src={option.icon} alt="" width={24} height={24} className="size-5 sm:size-6" />
      {option.label}
    </button>
  );
}

export function SearchToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {searchFilters.map((option) => (
          <ToolbarButton key={option.label} option={option} />
        ))}
      </div>
      <ToolbarButton option={searchSort} />
    </div>
  );
}
