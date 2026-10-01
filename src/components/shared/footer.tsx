import Link from "next/link";
import {
  footerCopyright,
  footerDescription,
  footerDisclaimer,
  footerLegalLinks,
  footerLinkGroups,
} from "@/data/footer";
import { Container } from "./container";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-line border-t bg-white">
      <Container className="py-16">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-20">
          <div className="flex max-w-xl flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-ink max-w-lg text-sm leading-relaxed">{footerDescription}</p>
            </div>
            <div className="flex flex-col gap-6">
              <form className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-shuttle-200 text-ink placeholder:text-muted focus:border-primary h-13 w-full rounded-full border px-6 text-base transition-colors outline-none sm:w-94"
                />
                <button
                  type="submit"
                  className="bg-accent text-ink hover:bg-accent-bright rounded-3xl px-6 py-3 text-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-ink max-w-lg text-xs leading-relaxed">{footerDisclaimer}</p>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
            {footerLinkGroups.map((group, index) => (
              <ul key={index} className="flex flex-col gap-4">
                {group.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-ink hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="border-line mt-14 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink text-xs">{footerCopyright}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-ink hover:text-primary text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
