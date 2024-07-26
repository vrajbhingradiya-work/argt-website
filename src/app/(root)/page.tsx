"use client";

import AboutUs from "@/components/about-us/AboutUs";
import ContactForm from "@/components/contact-us/ContactForm";
import HeroSection from "@/components/hero-section/HeroSection";

export default function Home() {
  return (
    <div className="px-4 flex flex-col gap-4 w-[100vw]">
      <HeroSection />
      <AboutUs />
      <ContactForm />
    </div>
  );
}
