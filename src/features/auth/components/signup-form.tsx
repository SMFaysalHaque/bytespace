"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fonts } from "@/config/fonts";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { cn } from "@/lib/utils";
import { AuthField } from "./auth-field";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = { name?: string; email?: string; password?: string };

export function SignupForm() {
  const router = useRouter();
  const { signup, user } = useAuth();
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors>({});

  useEffect(() => {
    if (user) router.replace("/");
  }, [user, router]);

  const update = (key: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: FieldErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!emailPattern.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (values.password.length < 6) nextErrors.password = "Password must be at least 6 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    signup(values.name, values.email, values.password);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <p className="text-primary text-lg">Create an Account</p>
        <h1
          className={cn(
            fonts.heading.className,
            "text-ink text-3xl font-semibold tracking-[-0.44px] sm:text-4xl lg:text-[44px] lg:leading-[1.2]",
          )}
        >
          Welcome to ByteSpace
        </h1>
      </div>

      <div className="flex flex-col items-end gap-6">
        <AuthField
          id="name"
          label="Full Name"
          placeholder="Jamie Davis"
          autoComplete="name"
          value={values.name}
          onChange={update("name")}
          error={errors.name}
        />
        <AuthField
          id="email"
          type="email"
          label="Email"
          placeholder="designer@example.com"
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
        />
        <AuthField
          id="password"
          type="password"
          label="Password"
          placeholder="********"
          autoComplete="new-password"
          value={values.password}
          onChange={update("password")}
          error={errors.password}
        />
        <button
          type="submit"
          className="bg-accent text-ink hover:bg-accent-bright rounded-3xl px-6 py-3 text-lg font-medium transition-colors"
        >
          Continue
        </button>
      </div>

      <p className="mt-2 text-center text-base">
        <span className="text-ink-muted">Already have an account? </span>
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
