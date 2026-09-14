import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#EFE8DA",
  width: "device-width",
  initialScale: 1,
};

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
    "Rambagh Palace Wedding Planner",
    "Samode Palace Wedding",
  ],
  authors: [{ name: "Siyara Innovations", url: "https://siyara.in" }],
  creator: "Siyara Innovations",
  publisher: "Ember & Ivory Events Pvt. Ltd.",
  metadataBase: new URL("https://emberandivory.events"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ember & Ivory Events | Luxury Event & Wedding Management",
    description:
      "Bespoke event and wedding architects crafting timeless royal celebrations, corporate summits, and transcendent scenography across Jaipur and India.",
    url: "https://emberandivory.events",
    siteName: "Ember & Ivory Events",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero_palace.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury candlelit banquet dinner in a heritage Rajasthan palace courtyard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember & Ivory Events | Luxury Event & Wedding Management",
    description:
      "Timeless destination weddings, private celebrations, and master scenography based in Jaipur, Rajasthan.",
    images: ["/images/hero_palace.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ember & Ivory Events",
  "image": "https://emberandivory.events/images/hero_palace.jpg",
  "telephone": "+91-141-256-8920",
  "email": "atelier@emberandivory.events",
  "url": "https://emberandivory.events",
  "description":
    "Bespoke event and wedding architects crafting timeless royal weddings, high-level corporate galas, refined social soirees, and monumental spatial scenography across Rajasthan and India.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Narain Niwas Heritage Compound, Anandilal Poddar Marg",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302004",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.8967,
    "longitude": 75.8164,
  },
  "priceRange": "$$$$",
  "founder": [
    {
      "@type": "Person",
      "name": "Raghavendra Rathore",
      "jobTitle": "Head of Spatial Architecture",
    },
    {
      "@type": "Person",
      "name": "Ananya Singhania",
      "jobTitle": "Creative Director",
    },
  ],
  "areaServed": ["Jaipur", "Udaipur", "Jodhpur", "Rajasthan", "India", "International"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-parchment text-ink antialiased selection:bg-oxblood selection:text-bone">
        {children}
      </body>
    </html>
  );
}
