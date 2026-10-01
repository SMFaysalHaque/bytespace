import {
  CommunityTestimonials,
  CreateManageCourses,
  CreatorCta,
  DiscoverPassion,
  ExploreLearningPaths,
  Hero,
  Partners,
  ProfessionalGrowth,
} from "@/features/landing/components";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <DiscoverPassion />
      <ExploreLearningPaths />
      <div className="bg-growth-gradient">
        <ProfessionalGrowth />
        <CreateManageCourses />
      </div>
      <CreatorCta />
      <CommunityTestimonials />
    </>
  );
}
