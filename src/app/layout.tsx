import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Masterseal Corporation",
    template: "%s | Masterseal Corporation",
  },
  description:
    "Masterseal Corporation is a leading provider of security seals, plastic seals, metal seals, truck seals, tanker seals, container van seals, meter seals to detect tampering and pilferage.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Masterseal Corporation",
    title: "Masterseal Corporation",
    description:
      "Masterseal Corporation is a leading provider of security seals for trucks, containers, meters, and more in the Philippines.",
    images: [
      {
        url: "/logo.avif",
        width: 1200,
        height: 630,
        alt: "Masterseal Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterseal Corporation",
    description:
      "Masterseal Corporation is a leading provider of security seals for trucks, containers, meters, and more in the Philippines.",
    images: ["/logo.avif"],
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
    name: "Masterseal Corporation",
    url: BASE_URL,
    logo: "/logo.avif",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Masterseal Corporation",
    url: BASE_URL,
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
        {children}
      </body>
    </html>
  );
}
