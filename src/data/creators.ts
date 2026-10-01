import type { Creator } from "@/types";

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Passionate UI/UX, Web designer",
    avatar: "/images/creators/purepearl-studio.png",
    badge: "Creator",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    stats: [
      { value: "3", label: "Products" },
      { value: "12", label: "Followers" },
    ],
  },
];

export const featuredCreator = creators[0];
