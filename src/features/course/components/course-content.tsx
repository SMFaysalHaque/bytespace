"use client";

import { useState } from "react";
import { courseTabs, type CourseTab } from "@/data/course-details";
import { cn } from "@/lib/utils";
import type { CourseDetail } from "@/types";
import { CourseAbout } from "./course-about";
import { CourseLessons } from "./course-lessons";
import { CourseReviews } from "./course-reviews";

export function CourseContent({ course, className }: { course: CourseDetail; className?: string }) {
  const [activeTab, setActiveTab] = useState<CourseTab>("About");

  return (
    <div className={cn("flex flex-col gap-10", className)}>
      <div className="flex flex-wrap gap-4" role="tablist" aria-label="Course details">
        {courseTabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "rounded-3xl px-4 py-3 text-base font-medium transition-colors",
                isActive ? "bg-accent text-ink" : "bg-surface text-ink-muted hover:bg-surface/70",
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {activeTab === "About" && <CourseAbout course={course} />}
      {activeTab === "Lessons" && <CourseLessons lessons={course.lessons} />}
      {activeTab === "Reviews" && <CourseReviews reviews={course.reviews} />}
    </div>
  );
}
