import Image from "next/image";
import { cn } from "@/lib/utils";

export function CourseVideo({
  poster,
  title,
  className,
}: {
  poster: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[720/479] w-full overflow-hidden rounded-3xl bg-[#443131]",
        className,
      )}
    >
      <Image src={poster} alt={title} fill priority className="object-cover" />
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-[#4f4f4f] bg-[#3d3d3d]/25 p-3 backdrop-blur-xl transition-transform hover:scale-105 sm:p-4"
      >
        <Image
          src="/images/icons/play.svg"
          alt=""
          width={72}
          height={72}
          className="size-12 sm:size-[72px]"
        />
      </button>
    </div>
  );
}
