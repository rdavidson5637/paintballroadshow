"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

const scrollLinks = [
  { label: "Introduction", id: "intro" },
  { label: "Locations", id: "locations" },
  { label: "Client Partners", id: "partners" },
  { label: "Events", id: "events" },
] as const;

const sectionIds = scrollLinks.map((link) => link.id);

const navLinkBase =
  "text-sm font-semibold uppercase tracking-wide transition-colors";

function scrollToSection(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
  pathname: string,
  router: ReturnType<typeof useRouter>,
  onNavigate?: () => void
) {
  event.preventDefault();

  if (pathname === "/") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onNavigate?.();
    return;
  }

  router.push(`/#${id}`);
  onNavigate?.();
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const visibility = new Map<string, number>();

    const updateActiveSection = () => {
      if (visibility.size === 0) return;

      const [mostVisible] = Array.from(visibility.entries()).sort(
        (a, b) => b[1] - a[1]
      );
      setActiveSection(mostVisible[0]);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibility.set(id, entry.intersectionRatio);
          } else {
            visibility.delete(id);
          }
        });
        updateActiveSection();
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (sectionIds.includes(hash as (typeof sectionIds)[number])) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);
  const isContactActive = pathname === "/contact";

  const navLinkClass = (id: string) =>
    `${navLinkBase} ${
      pathname === "/" && activeSection === id
        ? "text-[#E63329]"
        : "text-white hover:text-[#E63329]"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 bg-[#0D0D0D] ${
        scrolled ? "border-b-2 border-[#E63329]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="max-w-[58%] shrink-0 font-display leading-none text-white sm:max-w-none"
          style={{ fontSize: "clamp(1.1rem, 4vw, 1.6rem)" }}
        >
          PAINTBALL ROADSHOW
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {scrollLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(event) =>
                  scrollToSection(event, link.id, pathname, router)
                }
                className={navLinkClass(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors ${
                isContactActive
                  ? "bg-red-700"
                  : "bg-[#E63329] hover:bg-[#E63329]/90"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex shrink-0 items-center justify-center p-2 text-white md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="bg-[#1A1A1A] p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {scrollLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(event) =>
                    scrollToSection(
                      event,
                      link.id,
                      pathname,
                      router,
                      closeMobileMenu
                    )
                  }
                  className={`block py-3 ${navLinkClass(link.id)}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="inline-block rounded-full bg-[#E63329] px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#E63329]/90"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
