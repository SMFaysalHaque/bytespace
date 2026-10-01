"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fonts } from "@/config/fonts";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { cn } from "@/lib/utils";
import { AuthField } from "./auth-field";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = { email?: string; password?: string };

const socialProviders = [
  { name: "Facebook", icon: "/images/icons/facebook.svg" },
  { name: "Google", icon: "/images/icons/google.svg" },
];

export function SigninForm() {
  const router = useRouter();
  const { login, user } = useAuth();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string>();

  useEffect(() => {
    if (user) router.replace("/");
  }, [user, router]);

  const update = (key: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError(undefined);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: FieldErrors = {};
    if (!emailPattern.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (!values.password) nextErrors.password = "Please enter your password.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const result = login(values.email, values.password);
    if (!result.ok) {
      setFormError(result.error);
      return;
    }
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <p className="text-primary text-lg">Sign In</p>
        <h1
          className={cn(
            fonts.heading.className,
            "text-ink text-3xl font-semibold tracking-[-0.44px] sm:text-4xl lg:text-[44px] lg:leading-[1.2]",
          )}
        >
          Welcome Back
        </h1>
      </div>

      <div className="flex flex-col items-end gap-6">
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
          autoComplete="current-password"
          value={values.password}
          onChange={update("password")}
          error={errors.password}
        />
        {formError && <p className="w-full text-sm text-red-500">{formError}</p>}
        <button
          type="submit"
          className="bg-accent text-ink hover:bg-accent-bright rounded-3xl px-6 py-3 text-lg font-medium transition-colors"
        >
          Sign In
        </button>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full items-center gap-3">
          <span className="bg-line h-px flex-1" />
          <span className="text-lg text-[#888]">or</span>
          <span className="bg-line h-px flex-1" />
        </div>
        <div className="flex items-center gap-4">
          {socialProviders.map((provider) => (
            <button
              key={provider.name}
              type="button"
              aria-label={`Continue with ${provider.name}`}
              className="hover:bg-surface flex size-18 items-center justify-center rounded-3xl border border-[#d1d1d1] transition-colors"
            >
              <Image src={provider.icon} alt="" width={40} height={40} className="size-10" />
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-base">
        <span className="text-[#888]">New user? </span>
        <Link href="/signup" className="text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}
