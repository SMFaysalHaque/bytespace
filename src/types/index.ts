export interface NavLink {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  courseCount: number;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  author: string;
  authorAvatar: string;
  rating: number;
  reviewCount: number;
  price: number;
  lessons: number;
  duration: string;
}

export interface Stat {
  value: string;
  label: string;
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
