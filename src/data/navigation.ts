import type { NavLink } from "@/types";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const authNav = {
  login: { label: "Sign In", href: "/login" },
  signup: { label: "Join Us", href: "/signup" },
};
