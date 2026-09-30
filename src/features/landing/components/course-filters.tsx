"use client";

import { useState } from "react";
import { courseFilters } from "@/data/course-filters";
import { cn } from "@/lib/utils";

export function CourseFilters() {
  const [active, setActive] = useState(courseFilters[0]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {courseFilters.map((label) => {
        const isActive = label === active;
        return (
          <button
            key={label}
            type="button"
            onClick={() => setActive(label)}
            aria-pressed={isActive}
            className={cn(
              "rounded-3xl px-4 py-3 text-base font-medium whitespace-nowrap transition-colors",
              isActive ? "bg-accent text-ink" : "bg-surface text-ink-muted hover:bg-line",
            )}
          >
            {label}
          </button>
        );
      })}
      <button
        type="button"
        className="text-primary px-4 py-3 text-base font-medium whitespace-nowrap transition-opacity hover:opacity-80"
      >
        + More
      </button>
    </div>
  );
}
