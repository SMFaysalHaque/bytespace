import Image from "next/image";
import { Container } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { createManageFeatures } from "@/data/features";
import { cn } from "@/lib/utils";

function CreateManageText() {
  return (
    <div className="flex w-full flex-col gap-10 lg:w-[580px] lg:shrink-0">
      <h2
        className={cn(
          fonts.heading.className,
          "text-ink text-3xl leading-[1.2] font-semibold tracking-[-0.44px] sm:text-4xl lg:text-[44px]",
        )}
      >
        Create & Manage Courses Easily.
      </h2>
      <p className="text-ink-muted max-w-[574px] text-lg leading-relaxed">
        <span className="text-ink font-bold">ByteSpace</span> supports individuals or entities in
        the creation, publication, and administration of educational courses.
      </p>
      <ul className="flex flex-col gap-4">
        {createManageFeatures.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Image
              src="/images/icons/check-circle.svg"
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
            <span className="text-ink text-lg font-medium">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CreateManageShowcase() {
  return (
    <div className="mx-auto w-full max-w-[540px] lg:flex-1">
      <Image
        src="/images/hero/frame-12.png"
        alt="Course creator dashboard with revenue and student stats"
        width={587}
        height={719}
        unoptimized
        className="h-auto w-full"
      />
    </div>
  );
}

export function CreateManageCourses() {
  return (
    <section className="pt-9 pb-20">
      <Container className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:justify-between lg:gap-16">
        <CreateManageText />
        <CreateManageShowcase />
      </Container>
    </section>
  );
}
