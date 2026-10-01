import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";

const numberGradient =
  "linear-gradient(180deg, #d4fb20 0%, rgba(212,251,32,0.96) 25%, rgba(212,251,32,0.81) 50.5%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)";

export function NotFoundScreen() {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 select-none"
      >
        <Image
          src="/images/hero/grid.svg"
          alt=""
          width={1442}
          height={1026}
          className="max-w-none"
          priority
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center pt-32 pb-20 text-center sm:pt-36 lg:pt-40 lg:pb-28">
        <p
          aria-hidden
          className={cn(
            fonts.heading.className,
            "bg-clip-text text-[120px] leading-none font-semibold tracking-[-0.72px] text-transparent sm:text-[240px] lg:text-[480px]",
          )}
          style={{ backgroundImage: numberGradient }}
        >
          404
        </p>

        <div className="-mt-4 flex max-w-[935px] flex-col items-center gap-6 sm:-mt-12 sm:gap-8 lg:-mt-40">
          <h1
            className={cn(
              fonts.heading.className,
              "text-3xl leading-[1.2] font-semibold tracking-[-0.72px] text-white sm:text-5xl lg:text-[72px]",
            )}
          >
            {"The page you are looking for doesn't exist"}
          </h1>
          <p className="text-line text-base sm:text-lg">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className="bg-accent text-ink hover:bg-accent-bright inline-flex items-center justify-center rounded-3xl px-6 py-3 text-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
