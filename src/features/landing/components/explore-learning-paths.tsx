import { Container, SectionHeading } from "@/components/shared";
import { CategoryGrid } from "./category-grid";

export function ExploreLearningPaths() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          size="sm"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          descriptionClassName="max-w-[917px]"
        />
        <CategoryGrid />
      </Container>
    </section>
  );
}
