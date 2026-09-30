import Image from "next/image";
import { fonts } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <figcaption className="flex flex-col">
        <p
          className={cn(fonts.heading.className, "text-xl font-semibold tracking-tight text-black")}
        >
          {testimonial.name}
        </p>
        <p className="text-primary text-lg">{testimonial.role}</p>
      </figcaption>
      <blockquote className="text-lg leading-relaxed text-[#4f4f4f]">
        {testimonial.quote}
      </blockquote>
    </figure>
  );
}
