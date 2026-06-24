"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useFadeUp } from "@/hooks/useFadeUp";

const locations = [
  {
    icon: "🌳",
    title: "Public Parks",
    description:
      "Open green spaces perfect for large-scale events and public spectators",
  },
  {
    icon: "🛝",
    title: "Playgrounds",
    description:
      "Community play areas and recreational grounds for local events",
  },
  {
    icon: "⚽",
    title: "Community Play Fields",
    description: "Sports fields and multi-use community spaces across the UK",
  },
  {
    icon: "🏟️",
    title: "Indoor Sports Centres",
    description: "Fully enclosed venues for year-round all-weather events",
  },
];

const partners = [
  "Schools",
  "Colleges & Universities",
  "Councils & Local Authorities",
  "Corporate Sponsors",
  "Youth Groups",
  "Clubs & Societies",
  "Residents Associations",
  "Charities and Non-Profit Organisations",
];

const events = [
  {
    icon: "🎗️",
    title: "Fund-Raising Events",
    description:
      "Engage donors and supporters with a truly memorable activity",
  },
  {
    icon: "🎉",
    title: "Private Parties",
    description:
      "Birthdays, hen dos and stag dos — we make your event unforgettable",
  },
  {
    icon: "🏢",
    title: "Corporate Parties & Entertainment",
    description:
      "Team-building and corporate entertainment with a competitive edge",
  },
  {
    icon: "⚡",
    title: "One-Off Promotional Events",
    description:
      "Single-location activations designed to make maximum impact",
  },
  {
    icon: "🚐",
    title: "Multi-Location Roadshows",
    description: "Take your brand or campaign on tour across multiple venues",
  },
  {
    icon: "📣",
    title: "PR & Brand Promotional Campaigns",
    description:
      "Paintball as a marketing tool — eye-catching, memorable and effective",
  },
  {
    icon: "🎪",
    title: "Shows, Fairs & Festivals",
    description: "From local fairs to major festivals — we bring the spectacle",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-widest text-gray-400">
      {children}
    </p>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="fade-up rounded-lg border-l-4 border-[#E63329] bg-[#1A1A1A] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/20">
      <span className="text-3xl" aria-hidden="true">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
  );
}

export default function Home() {
  const [hasHeroBg, setHasHeroBg] = useState(false);

  useFadeUp();

  useEffect(() => {
    const img = new window.Image();
    img.src = "/images/hero-bg.jpg";
    img.onload = () => setHasHeroBg(true);
    img.onerror = () => setHasHeroBg(false);
  }, []);

  return (
    <div className="page-enter">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0D0D0D]">
        {hasHeroBg && (
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: hasHeroBg
              ? "linear-gradient(to bottom, rgba(13,13,13,0.75), rgba(13,13,13,0.9)), radial-gradient(ellipse at top left, rgba(230,51,41,0.15) 0%, transparent 55%)"
              : "radial-gradient(ellipse at top left, rgba(230,51,41,0.15) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full min-w-0 max-w-4xl px-6 py-24">
          <p className="text-xs uppercase tracking-widest text-gray-400 sm:text-sm">
            MOBILE PAINTBALL ARENA — UK NATIONWIDE
          </p>
          <h1
            className="mt-4 break-words font-display leading-none text-white"
            style={{ fontSize: "clamp(2.25rem, 8vw, 6rem)" }}
          >
            GIVING EVENTS A SPECTACULAR EDGE
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            Supported by Paintball Master DJ &apos;Splatz&apos; and the
            &apos;Adrenalin&apos; Cheer Leaders — we bring tournament-style
            Speedball, Sup&apos;Air and X-Ball paintball arenas directly to
            your event.
          </p>
          <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#E63329] px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-red-700 sm:w-auto"
            >
              Book Now
            </Link>
            <a
              href="#intro"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("intro")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/40 px-8 py-3 text-center text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 z-10 h-[60px] w-full bg-[#E63329]"
          style={{ transform: "skewY(-2deg)", transformOrigin: "bottom left" }}
          aria-hidden="true"
        />
      </section>

      {/* Introduction */}
      <section id="intro" className="scroll-mt-20 bg-[#1A1A1A] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="fade-up section-heading mt-2 text-white">
            THE PAINTBALL ROADSHOW
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-gray-300">
            <p>
              The Paintball-Roadshow is a spectator-friendly netted Mobile Arena
              system which allows us to literally take Paintball &apos;out of the
              woods&apos;, giving us the flexibility to take an Official
              Tournament &apos;Speedball&apos;-style &apos;Sup&apos;Air&apos; and
              &apos;X-Ball&apos; Paintball Sports Arena to public parks,
              playgrounds, community play fields and indoor sports centres across
              the country.
            </p>
            <p>
              The Mobile Arena is also used as an exceptionally eye-catching,
              novel and highly-effective promotion tool — encouraging spectator
              viewing and participation. The Roadshow performs high-profile
              Exhibition Paintball Shows with music provided by our Paintball
              Master DJ &apos;Splatz&apos; and an impressive performance from
              the &apos;Adrenalin&apos; Cheer Leaders at local, national and
              international events, seeking to raise their profile in a novel and
              original way which appeals to people&apos;s sense of competitive
              kudos and personal achievement.
            </p>
            <p>
              We also provide Marketing and PR support to Major Events and
              Festivals, Brand Promotions and Product Launches across the country
              — portraying an active outdoor pursuits image of someone
              who&apos;s energetic, fit, confident, competitive and fun. Hence our
              motto:{" "}
              <span className="font-semibold italic text-white">
                Mixing Business with Pleasure.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="scroll-mt-20 bg-[#0D0D0D] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>WHERE WE OPERATE</Eyebrow>
          <h2 className="fade-up section-heading mt-2 text-white">
            OUR LOCATIONS
          </h2>
          <p className="mb-12 mt-4 text-gray-400">
            Our mobile arena is fully self-contained and can be deployed almost
            anywhere.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <FeatureCard key={location.title} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Partners */}
      <section id="partners" className="scroll-mt-20 bg-[#1A1A1A] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>WHO WE WORK WITH</Eyebrow>
          <h2 className="fade-up section-heading mt-2 text-white">
            CLIENT PARTNERS
          </h2>
          <p className="mb-12 mt-4 text-gray-400">
            We work with a wide range of organisations across the public,
            private and third sectors.
          </p>
          <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
            {partners.map((partner) => (
              <li key={partner} className="fade-up flex items-center gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E63329] text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-lg text-white">{partner}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="scroll-mt-20 bg-[#0D0D0D] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="fade-up section-heading mt-2 text-white">
            EVENTS WE CATER FOR
          </h2>
          <p className="mb-12 mt-4 text-gray-400">
            From intimate private parties to large-scale multi-location roadshows
            — we deliver every time.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <FeatureCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#E63329] px-6 py-16 text-center">
        <div className="fade-up mx-auto max-w-4xl">
          <h2
            className="font-display text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            READY TO MAKE YOUR EVENT UNFORGETTABLE?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Call our Bookings Hotline on 08700 630063 or get in touch online to
            secure your date. UK Standard National Rate applies.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:08700630063"
              className="rounded-lg bg-white px-8 py-3 font-bold text-[#E63329] transition-colors hover:bg-gray-100"
            >
              Call 08700 630063
            </a>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white px-8 py-3 text-white transition-colors hover:bg-white/10"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
