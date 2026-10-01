import Image from "next/image";
import Link from "next/link";
import { fonts } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "light" | "dark";
  markOnly?: boolean;
  className?: string;
}

export function Logo({ tone = "dark", markOnly = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className={cn("flex items-center gap-2", className)}
    >
      <Image
        src="/images/brand/logo-mark.svg"
        alt=""
        width={29}
        height={32}
        priority
        className="h-[31.5px] w-[28.875px]"
      />
      {!markOnly && (
        <span
          className={cn(
            fonts.display.className,
            "text-2xl leading-none font-bold",
            tone === "light" ? "text-surface" : "text-ink",
          )}
        >
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
