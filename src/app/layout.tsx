import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { meta } from "./lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Masterseal Corporation | Security Seals | Manila",
    template: "%s | Masterseal Corporation | Security Seals | Manila",
  },
  description:
    "Masterseal Corporation is a leading provider of security seals, plastic seals, metal seals, truck seals, tanker seals, container van seals, meter seals to detect tampering and pilferage. Located in Marikina, Manila, Philippines.",
  keywords: meta["/"].keywords,
  other: {
    search: "bullet seal, cable seal, hexa seal, warranty sticker, void tape",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Masterseal Corporation | Security Seals | Manila",
    title: "Masterseal Corporation | Security Seals | Manila",
    description:
      "Masterseal Corporation is a leading provider of security seals for trucks, containers, meters, and more in the Philippines. Located in Marikina, Manila, Philippines.",
    images: [
      {
        url: "/logo.png",
        width: 630,
        height: 630,
        alt: "Masterseal Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterseal Corporation | Security Seals | Manila",
    description:
      "Masterseal Corporation is a leading provider of security seals for trucks, containers, meters, and more in the Philippines. Located in Marikina, Manila, Philippines.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Masterseal Corporation | Security Seals | Manila",
    url: BASE_URL,
    logo: "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Dona Aurora St, Parang",
      addressLocality: "Marikina",
      addressRegion: "Manila",
      postalCode: "1809",
      addressCountry: "Philippines",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+63-2-8255-9085",
      contactType: "customer service",
      areaServed: "Philippines",
      availableLanguage: "English",
    },
    email: "masterseal.sales@gmail.com",
    telephone: "+63-2-8255-9085",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Masterseal Corporation | Security Seals | Manila",
    url: BASE_URL,
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Masterseal Corporation",
    description:
      "Leading provider of security seals, plastic seals, metal seals, truck seals, tanker seals, container van seals, meter seals to detect tampering and pilferage.",
    url: BASE_URL,
    logo: "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Dona Aurora St, Parang",
      addressLocality: "Marikina",
      addressRegion: "Manila",
      postalCode: "1809",
      addressCountry: "Philippines",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+63-2-8255-9085",
      contactType: "customer service",
      areaServed: "Philippines",
      availableLanguage: "English",
    },
    email: "masterseal.sales@gmail.com",
    telephone: "+63-2-8255-9085",
    openingHours: "Mo-Fr 08:30-17:00",
    priceRange: "$$",
    areaServed: "Philippines",
    serviceArea: {
      "@type": "Country",
      name: "Philippines",
    },
  };
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <script
          type='application/ld+json'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type='application/ld+json'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type='application/ld+json'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
