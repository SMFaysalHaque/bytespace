import type { Metadata } from "next";
import { AuthLayout, SigninForm } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <SigninForm />
    </AuthLayout>
  );
}
