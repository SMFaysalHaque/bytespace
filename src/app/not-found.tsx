import type { Metadata } from "next";
import { NotFoundScreen } from "@/features/not-found/components";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return <NotFoundScreen />;
}
