"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "./components/Carousel";
import Delivery from "./components/Delivery";
import FreeDelivery from "./components/FreeDelivery";
import SealGallery from "./components/SealGallery";
import ContactUs from "./components/ContactUs";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />

      <Carousel />

      <Delivery />

      <SealGallery />
      <FreeDelivery />

      <ContactUs />
    </>
  );
}
