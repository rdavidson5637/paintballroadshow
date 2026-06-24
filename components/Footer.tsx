"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";

const footerNavLinks = [
  { label: "Introduction", id: "intro" },
  { label: "Locations", id: "locations" },
  { label: "Client Partners", id: "partners" },
  { label: "Events", id: "events" },
] as const;

function scrollToSection(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
  pathname: string,
  router: ReturnType<typeof useRouter>
) {
  event.preventDefault();

  if (pathname === "/") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  router.push(`/#${id}`);
}

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <footer className="border-t border-white/10 bg-[#0D0D0D] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-[1.4rem] text-white">
              PAINTBALL ROADSHOW
            </p>
            <p className="mt-2 text-gray-400">
              Giving Events a Spectacular Edge
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              NAVIGATE
            </p>
            <ul className="mt-4 space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) =>
                      scrollToSection(event, link.id, pathname, router)
                    }
                    className="text-white transition-colors hover:text-[#E63329]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-white transition-colors hover:text-[#E63329]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              GET IN TOUCH
            </p>
            <ul className="mt-4 space-y-2 text-white">
              <li>
                <a
                  href="tel:08700630063"
                  className="transition-colors hover:text-[#E63329]"
                >
                  08700 63 00 63
                </a>
              </li>
              <li>
                <a
                  href="tel:08700630064"
                  className="transition-colors hover:text-[#E63329]"
                >
                  08700 63 00 64
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@paintball-roadshow.com"
                  className="transition-colors hover:text-[#E63329]"
                >
                  info@paintball-roadshow.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.paintball-roadshow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#E63329]"
                >
                  www.paintball-roadshow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-sm text-gray-400">
          <p>
            &copy; 2025 Paintball Roadshow. All rights reserved. | Management
            &amp; Leisure Strategies Limited | Registered in England &amp; Wales
            | Company No. 5176055 | Registered Office: Fiducia House, 14 Ffordd
            Cynfal, Bangor, Gwynedd, UK. LL57 2YL
          </p>
        </div>
      </div>
    </footer>
  );
}
