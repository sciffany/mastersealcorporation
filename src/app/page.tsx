import type { Metadata } from "next";
import Carousel from "./components/Carousel";
import Delivery from "./components/Delivery";
import FreeDelivery from "./components/FreeDelivery";
import SealGallery from "./components/SealGallery";
import ContactUs from "./components/ContactUs";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { meta } from "./lib/data";

export const metadata: Metadata = {
  title: "Masterseal Corporation | Security Seals | Manila",
  description:
    (meta as Record<string, any>)["/"]?.description ||
    "Masterseal Corporation is a leading provider of security seals, plastic seals, metal seals, truck seals, tanker seals, container van seals, meter seals to detect tampering and pilferage.",
  keywords: (meta as Record<string, any>)["/"]?.keywords,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />

      <Carousel />

      <Delivery />

      <SealGallery />
      <FreeDelivery />

      <ContactUs />
      <Footer />
    </>
  );
}
