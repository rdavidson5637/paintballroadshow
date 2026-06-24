import type { Metadata } from "next";
import "./globals.css";

const favicon = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#E63329"/></svg>'
)}`;

export const metadata: Metadata = {
  title: "Paintball Roadshow | Mobile Paintball Arena UK",
  description:
    "The UK's premier mobile paintball arena — bringing tournament-style Speedball, Sup'Air and X-Ball arenas to parks, festivals, schools and corporate events nationwide.",
  icons: {
    icon: favicon,
  },
  openGraph: {
    title: "Paintball Roadshow | Mobile Paintball Arena UK",
    description:
      "Spectator-friendly mobile paintball arenas for festivals, corporate events, schools and councils across the UK. Book now.",
    url: "https://paintball-roadshow.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-brand-dark font-body text-brand-light antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
