import type { Metadata } from "next";
import { featuredCreator } from "@/data/creators";
import { CreatorCourses, CreatorHero } from "@/features/creator/components";

export const metadata: Metadata = {
  title: featuredCreator.name,
  description: `Explore the profile and courses of ${featuredCreator.name} on ByteSpace.`,
};

export default function CreatorsPage() {
  return (
    <>
      <CreatorHero />
      <CreatorCourses />
    </>
  );
}
