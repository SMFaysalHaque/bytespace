"use client";

import { useState } from "react";
import Image from "next/image";
import { fonts } from "@/config/fonts";
import { searchPageCount } from "@/data/search";
import { cn } from "@/lib/utils";

const pages = Array.from({ length: searchPageCount }, (_, index) => index + 1);

function ArrowButton({
  icon,
  label,
  onClick,
  disabled,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="border-shuttle-200 hover:bg-surface flex items-center justify-center rounded-3xl border bg-white px-3 py-2.5 transition-colors disabled:cursor-not-allowed disabled:opacity-40 sm:px-4 sm:py-3"
    >
      <Image src={icon} alt="" width={24} height={24} className="size-5 sm:size-6" />
    </button>
  );
}

export function Pagination() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <ArrowButton
        icon="/images/icons/chevron-left.svg"
        label="Previous page"
        onClick={() => setCurrent((page) => Math.max(1, page - 1))}
        disabled={current === 1}
      />
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => setCurrent(page)}
          aria-current={page === current ? "page" : undefined}
          className={cn(
            fonts.heading.className,
            "px-1 text-lg leading-7 font-semibold tracking-[-0.2px] transition-colors sm:text-xl",
            page === current ? "text-shuttle-200" : "text-ink hover:text-primary",
          )}
        >
          {page}
        </button>
      ))}
      <ArrowButton
        icon="/images/icons/chevron-right.svg"
        label="Next page"
        onClick={() => setCurrent((page) => Math.min(searchPageCount, page + 1))}
        disabled={current === searchPageCount}
      />
    </div>
  );
}
