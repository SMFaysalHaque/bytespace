import Image from "next/image";
import type { ReactNode } from "react";
import { Logo } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { AuthDecoration } from "./auth-decoration";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <main className="bg-primary relative flex min-h-dvh w-full flex-col overflow-x-clip">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <Image
          src="/images/hero/grid.svg"
          alt=""
          width={1442}
          height={1026}
          className="absolute top-0 left-1/2 max-w-none -translate-x-1/2"
          priority
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 sm:px-8 xl:px-[122px]">
        <div className="sticky top-0 z-30 flex h-20 shrink-0 items-center lg:h-[120px]">
          <Logo markOnly tone="light" />
        </div>

        <div className="flex flex-1 items-center justify-center gap-6 py-10 lg:justify-between xl:gap-12">
          <div className="hidden lg:block lg:flex-1">
            <div className="flex max-w-[330px] flex-col gap-4 xl:max-w-[475px]">
              <h1
                className={cn(
                  fonts.heading.className,
                  "text-surface text-xl font-semibold tracking-[-0.2px]",
                )}
              >
                {title}
              </h1>
              <p className="text-surface text-base leading-relaxed xl:text-lg">{description}</p>
            </div>
            <AuthDecoration className="mt-8 xl:mt-10" />
          </div>

          <div className="w-full max-w-[579px] shrink-0 rounded-3xl bg-white px-6 py-10 shadow-xl sm:px-14 sm:py-16 xl:w-[579px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
