"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />

      <AboutUs />

      <ContactUs />
    </div>
  );
}
