import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ember & Ivory Events | Luxury Event & Wedding Management",
    template: "%s | Ember & Ivory Events",
  },
  description:
    "Jaipur-based bespoke event and wedding architects crafting timeless royal weddings, high-level corporate galas, refined social soirees, and monumental spatial scenography.",
  keywords: [
    "Luxury Wedding Planner Jaipur",
    "Destination Weddings Rajasthan",
    "Corporate Event Management Jaipur",
    "Bespoke Event Scenography",
    "Palace Weddings India",
    "Celebrity & Artist Booking India",
  ],
  authors: [{ name: "Siyara Innovations" }],
  creator: "Siyara Innovations",
  metadataBase: new URL("https://emberandivory.events"),
  openGraph: {
    title: "Ember & Ivory Events | Luxury Event & Wedding Management",
    description:
      "Bespoke event and wedding architects crafting timeless royal weddings, corporate summits, and transcendent scenography across Jaipur and India.",
    url: "https://emberandivory.events",
    siteName: "Ember & Ivory Events",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember & Ivory Events | Luxury Event & Wedding Management",
    description:
      "Timeless destination weddings, private celebrations, and master scenography based in Jaipur, Rajasthan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${workSans.variable}`}>
      <body className="min-h-screen bg-parchment text-ink antialiased selection:bg-oxblood selection:text-bone">
        {children}
      </body>
    </html>
  );
}
