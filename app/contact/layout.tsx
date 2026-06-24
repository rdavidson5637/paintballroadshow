import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Paintball Roadshow",
  description:
    "Get in touch with Paintball Roadshow to book your mobile paintball arena event. Call 08700 630063 or send us an enquiry online.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
