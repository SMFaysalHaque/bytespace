export interface NavLink {
  label: string;
  href: string;
}

export interface FilterOption {
  label: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  studio: string;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  price: number;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CourseMeta {
  icon: string;
  label: string;
}

export interface CourseLesson {
  order: string;
  title: string;
  duration: string;
}

export interface CourseFeature {
  icon: string;
  label: string;
}

export interface CourseInstructor {
  name: string;
  role: string;
  avatar: string;
  blurb: string;
  profileHref: string;
}

export interface CourseModule {
  title: string;
  description: string;
}

export interface CourseSection {
  heading: string;
  text: string;
}

export interface CourseProgress {
  label: string;
  percent: number;
}

export interface CourseLessonsContent {
  intro: CourseSection;
  modules: CourseModule[];
  lessonContent: CourseSection;
  progressTracking: CourseSection;
  progress: CourseProgress;
}

export interface CourseRatingBar {
  count: number;
  percent: number;
}

export interface CourseReview {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  text: string;
}

export interface CourseReviewsContent {
  heading: string;
  intro: string;
  averageRating: number;
  ratingLabel: string;
  breakdown: CourseRatingBar[];
  ratingFilters: string[];
  reviews: CourseReview[];
}

export interface CourseDetail {
  slug: string;
  title: string;
  subtitle: string;
  studio: string;
  poster: string;
  meta: CourseMeta[];
  lessonsSummary: string;
  lessonsPreview: CourseLesson[];
  moreLessons: string;
  priceNote: string;
  price: number;
  priceUnit: string;
  includes: CourseFeature[];
  instructor: CourseInstructor;
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  lessons: CourseLessonsContent;
  reviews: CourseReviewsContent;
}

export interface Creator {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  badge: string;
  bio: string[];
  stats: Stat[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}
