import type { ReactNode } from "react";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";

const titleSizes = {
  md: "text-3xl tracking-[-0.44px] sm:text-4xl lg:text-[44px]",
  sm: "text-2xl tracking-[-0.36px] sm:text-3xl lg:text-[36px]",
};

interface SectionHeadingProps {
  title: ReactNode;
  description?: ReactNode;
  size?: keyof typeof titleSizes;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  title,
  description,
  size = "md",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center gap-4 text-center", className)}>
      <h2
        className={cn(
          fonts.heading.className,
          "leading-[1.2] font-semibold text-[#040819]",
          titleSizes[size],
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("text-muted text-base leading-[1.6] sm:text-lg", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
