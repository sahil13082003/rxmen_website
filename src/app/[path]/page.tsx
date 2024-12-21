'use client';

import { usePathname } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import DoctorSection from "@/components/DoctorSection";
import TopProfessionalsSection from "@/components/TopProfessionalsSection";
import UnderstandingSexTherapy from "@/components/UnderstandingSexTherapy";
import WhenToSeeASexologist from "@/components/WhenToSeeASexologist";
import TestimonialsSection from "@/components/TestimonialsSection";
import SexologistSection from "@/components/SexologistSection";
import RxMenHelpSection from "@/components/RxMenHelpSection";

const componentsForPath = {
  "/sexologist-near-me": [
    <HeroSection key="hero" />,
    <DoctorSection key="doctor" />,
    <TopProfessionalsSection key="top-pros" />,
    <SexologistSection key="sexologist" />,
    <RxMenHelpSection key="help" />,
    <UnderstandingSexTherapy key="understand" />,
    <WhenToSeeASexologist key="when-to-see" />,
    <TestimonialsSection key="testimonials" />,
  ],
  "/sexologist-in-pune": [<HeroSection key="hero" />],
  "/sex-therapy-in-bangalore": [
    <HeroSection key="hero" />,
    <TopProfessionalsSection key="top-pros" />,
    <TestimonialsSection key="testimonials" />,
  ],
};

export default function PageContent() {
  const path = usePathname();
  const componentsToRender = componentsForPath[path] || null;

  return (
    <div>
      {componentsToRender
        ? componentsToRender
        : <p>404: The requested page could not be found.</p>}
    </div>
  );
}
