import type { Metadata } from "next";
import { AuthLayout, SignupForm } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your ByteSpace account to start learning.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <SignupForm />
    </AuthLayout>
  );
}
