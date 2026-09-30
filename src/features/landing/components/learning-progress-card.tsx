import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";

export function LearningProgressCard() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-xl">
      <p className="text-ink text-sm font-medium">Learning Progress</p>
      <p className={cn(fonts.heading.className, "text-ink text-5xl font-semibold tracking-tight")}>
        55%
      </p>
      <div className="relative h-2 w-[200px] rounded-full bg-[#f6f6f6]">
        <div className="bg-accent absolute inset-y-0 left-0 w-[112px] rounded-full" />
      </div>
    </div>
  );
}
