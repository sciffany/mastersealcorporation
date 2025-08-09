import type { Metadata } from "next";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Navigation from "../components/Navigation";
import { meta } from "../lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    (meta as Record<string, any>)["/about"]?.description ||
    "Learn about Masterseal Corporation, our mission, values, and the high-quality security seals we provide.",
  keywords: (meta as Record<string, any>)["/about"]?.keywords,
  alternates: {
    canonical: "/about-us",
  },
};

export default function Home() {
  return (
    <div>
      <Navigation />

      <AboutUs />

      <ContactUs />
    </div>
  );
}
