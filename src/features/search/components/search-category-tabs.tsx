"use client";

import { useState } from "react";
import { searchCategoryTabs } from "@/data/search";
import { cn } from "@/lib/utils";

export function SearchCategoryTabs() {
  const [active, setActive] = useState(searchCategoryTabs[0]);

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {searchCategoryTabs.map((label) => {
        const isActive = label === active;
        return (
          <button
            key={label}
            type="button"
            onClick={() => setActive(label)}
            aria-pressed={isActive}
            className={cn(
              "rounded-3xl px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors sm:px-4 sm:py-3 sm:text-base",
              isActive ? "bg-accent text-ink" : "bg-surface text-ink-muted hover:bg-line",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
