"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authNav, mainNav } from "@/data/navigation";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Logo } from "./logo";

function UserMenu({ name, onLogout }: { name: string; onLogout: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        className="bg-accent text-ink flex size-10 items-center justify-center rounded-full text-base font-medium uppercase"
      >
        {name.charAt(0)}
      </button>
      {open && (
        <div
          role="menu"
          className="border-line absolute right-0 mt-3 w-48 rounded-2xl border bg-white p-2 shadow-xl"
        >
          <p className="text-ink truncate px-3 py-2 text-sm font-medium">{name}</p>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
            className="text-ink-muted hover:bg-surface w-full rounded-lg px-3 py-2 text-left text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-primary shadow-md shadow-black/5" : "bg-transparent",
      )}
    >
      <Container className="relative flex h-20 items-center justify-between gap-6 md:h-30">
        <Logo tone="light" />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-surface text-base transition-opacity hover:opacity-80",
                isActive(link.href) ? "font-medium" : "font-normal",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          {user ? (
            <UserMenu name={user.name} onLogout={logout} />
          ) : (
            <>
              <Link
                href={authNav.login.href}
                className="text-surface text-base transition-opacity hover:opacity-80"
              >
                {authNav.login.label}
              </Link>
              <Link
                href={authNav.signup.href}
                className="text-surface text-base transition-opacity hover:opacity-80"
              >
                {authNav.signup.label}
              </Link>
            </>
          )}
          <button
            type="button"
            aria-label="View cart"
            className="transition-opacity hover:opacity-80"
          >
            <Image src="/images/icons/cart.svg" alt="" width={24} height={24} className="size-6" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="text-surface flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="bg-primary border-t border-white/10 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-surface rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-white/10",
                  isActive(link.href) ? "font-medium" : "font-normal",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-3">
              {user ? (
                <>
                  <p className="text-surface px-3 py-2.5 text-base font-medium">{user.name}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      logout();
                    }}
                    className="text-surface rounded-lg px-3 py-2.5 text-left text-base transition-colors hover:bg-white/10"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={authNav.login.href}
                    onClick={() => setOpen(false)}
                    className="text-surface rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-white/10"
                  >
                    {authNav.login.label}
                  </Link>
                  <Link
                    href={authNav.signup.href}
                    onClick={() => setOpen(false)}
                    className="text-surface rounded-lg px-3 py-2.5 text-base transition-colors hover:bg-white/10"
                  >
                    {authNav.signup.label}
                  </Link>
                </>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
