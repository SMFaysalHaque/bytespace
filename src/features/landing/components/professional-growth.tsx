import Image from "next/image";
import { Container } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { growthStats } from "@/data/stats";
import { cn } from "@/lib/utils";

function GrowthText() {
  return (
    <div className="flex w-full flex-col gap-10 lg:w-[574px] lg:shrink-0">
      <h2
        className={cn(
          fonts.heading.className,
          "text-ink text-3xl leading-[1.2] font-semibold tracking-[-0.44px] sm:text-4xl lg:text-[44px]",
        )}
      >
        Your Path to Professional Growth Starts Here!
      </h2>
      <p className="text-ink-muted max-w-[477px] text-lg leading-relaxed">
        Explore our curated selection of courses tailored to enhance your capabilities and
        accelerate your career journey. Whether you are looking to sharpen specific skills, gain
        industry expertise, or embark on a new career path entirely, we have the resources you need.
      </p>
      <dl className="flex gap-10 sm:gap-14">
        {growthStats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <dt
              className={cn(
                fonts.heading.className,
                "text-primary text-4xl leading-[44px] font-medium tracking-[-0.36px]",
              )}
            >
              {stat.value}
            </dt>
            <dd className="text-ink-muted text-lg">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function GrowthShowcase() {
  return (
    <div className="mx-auto w-full max-w-[620px] lg:flex-1">
      <Image
        src="/images/hero/frame-11.png"
        alt="Student exploring a course with live learning progress"
        width={703}
        height={697}
        unoptimized
        className="h-auto w-full"
      />
    </div>
  );
}

export function ProfessionalGrowth() {
  return (
    <section className="pt-20 pb-9">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
        <GrowthText />
        <GrowthShowcase />
      </Container>
    </section>
  );
}
