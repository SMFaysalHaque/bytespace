import { Container } from "@/components/shared";
import { fonts } from "@/config/fonts";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./testimonial-card";

function TestimonialsHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
      <h2
        className={cn(
          fonts.heading.className,
          "text-3xl leading-[1.2] font-semibold tracking-[-0.44px] text-black sm:text-4xl lg:w-[577px] lg:text-[44px]",
        )}
      >
        Discover What Our Community Is Saying
      </h2>
      <p className="text-lg leading-relaxed text-[#4f4f4f] lg:w-[580px]">
        At ByteSpace, our vibrant community of learners and creators is at the heart of what we do.
        Hear directly from those who have experienced the transformative journey of learning and
        creating on our platform. Explore testimonials that reflect the diverse perspectives of
        enthusiastic learners and accomplished creators.
      </p>
    </div>
  );
}

export function CommunityTestimonials() {
  return (
    <section className="bg-community-gradient">
      <Container className="flex flex-col gap-[72px] py-20">
        <TestimonialsHeader />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
