"use client";

import AboutUs from "@/components/about-us/AboutUs";
import Certifications from "@/components/cerifications/Certifications";
import Clients from "@/components/clients/Clients";
import ContactForm from "@/components/contact-us/ContactForm";
import ContactUsSection from "@/components/contact-us/ContactUsSection";
import HeroSection from "@/components/hero-section/HeroSection";
import Services from "@/components/services/Services";
import Stats from "@/components/videoComponent/Stats";
import VideoSection from "@/components/videoComponent/VideoSection";

export default function Home() {
  return (
    <div className=" flex flex-col  w-[100vw] overflow-hidden">
      <HeroSection />
      <AboutUs />
      <VideoSection />
      <Stats />
      <Services />
      <Clients />
      <Certifications />
      <ContactUsSection />
    </div>
  );
}
