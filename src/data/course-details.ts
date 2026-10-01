import type { CourseDetail } from "@/types";

export const courseTabs = ["About", "Lessons", "Reviews"] as const;

export type CourseTab = (typeof courseTabs)[number];

export const courseDetail: CourseDetail = {
  slug: "build-digital-asset",
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  studio: "purepearl studio",
  poster: "/images/courses/digital-asset-poster.png",
  meta: [
    { icon: "/images/icons/signal.svg", label: "Intermediate" },
    { icon: "/images/icons/star-rate.svg", label: "4.8 (172 reviews)" },
    { icon: "/images/icons/people.svg", label: "199 Students" },
  ],
  lessonsSummary: "112 Lessons (24 hours)",
  lessonsPreview: [
    { order: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { order: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { order: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  moreLessons: "99 more videos",
  priceNote: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  price: 25,
  priceUnit: "/lifetime",
  includes: [
    { icon: "/images/icons/source.svg", label: "Learning Resources" },
    { icon: "/images/icons/videocam.svg", label: "Quality Lesson Videos" },
    { icon: "/images/icons/badge.svg", label: "Certificate of Completion" },
    { icon: "/images/icons/consultation.svg", label: "Private Consultation" },
  ],
  instructor: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "/images/creators/purepearl-studio.png",
    blurb: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    profileHref: "/creators",
  },
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [
    "/images/courses/sneak-peek-1.png",
    "/images/courses/sneak-peek-2.png",
    "/images/courses/sneak-peek-3.png",
    "/images/courses/sneak-peek-4.png",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  lessons: {
    intro: {
      heading: "Explore the Modules",
      text: "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    },
    modules: [
      {
        title: "Module 1: Introduction to Digital Assets",
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Module 2: Design Principles for Impact",
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "Module 4: User-Centric Design Strategies",
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Module 5: Interactive Media and Engagement",
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Module 6: Project Showcase and Critique",
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    lessonContent: {
      heading: "Lesson Content",
      text: "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    },
    progressTracking: {
      heading: "Lesson Progress Tracking",
      text: "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    },
    progress: {
      label: "Learning Progress",
      percent: 55,
    },
  },
  reviews: {
    heading: "What Learners Are Saying",
    intro:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    averageRating: 4.7,
    ratingLabel: "Ratings",
    breakdown: [
      { count: 720, percent: 92.28 },
      { count: 120, percent: 36.49 },
      { count: 21, percent: 9.47 },
      { count: 12, percent: 3.51 },
      { count: 16, percent: 5.26 },
    ],
    ratingFilters: ["All rating", "5", "4", "3", "2", "1"],
    reviews: [
      {
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/images/reviews/reviewer-1.png",
        rating: 5,
        timeAgo: "a year ago",
        text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      },
      {
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/images/reviews/reviewer-2.png",
        rating: 5,
        timeAgo: "a year ago",
        text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/images/reviews/reviewer-3.png",
        rating: 5,
        timeAgo: "a year ago",
        text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/images/reviews/reviewer-4.png",
        rating: 5,
        timeAgo: "a year ago",
        text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
};
