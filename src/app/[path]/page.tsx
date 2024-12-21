// PageContent.tsx (No changes needed)
'use client';
import React, { JSX } from 'react'; // Ensure React is imported
import { usePathname } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import DoctorSection from '@/components/DoctorSection';
import TopProfessionalsSection from '@/components/TopProfessionalsSection';
import UnderstandingSexTherapy from '@/components/UnderstandingSexTherapy';
import WhenToSeeASexologist from '@/components/WhenToSeeASexologist';
import TestimonialsSection from '@/components/TestimonialsSection';
import SexologistSection from '@/components/SexologistSection';
import RxMenHelpSection from '@/components/RxMenHelpSection';

// Type declaration for the object keys
type Path = '/sexologist-near-me' | '/sexologist-in-pune' | '/sex-therapy-in-bangalore';

const componentsForPath: Record<Path, JSX.Element[]> = {
  '/sexologist-near-me': [
    <HeroSection key="hero" />,
    <DoctorSection key="doctor" />,
    <TopProfessionalsSection key="top-pros" />,
    <SexologistSection key="sexologist" />,
    <RxMenHelpSection key="help" />,
    <UnderstandingSexTherapy key="understand" />,
    <WhenToSeeASexologist key="when-to-see" />,
    <TestimonialsSection key="testimonials" />,
  ],
  '/sexologist-in-pune': [<HeroSection key="hero" />],
  '/sex-therapy-in-bangalore': [
    <HeroSection key="hero" />,
    <TopProfessionalsSection key="top-pros" />,
    <TestimonialsSection key="testimonials" />,
  ],
};

export default function PageContent() {
  const path = usePathname(); // path can be a string, not specifically a Path type

  // Type guard to check if the path matches a valid Path type
  if (!componentsForPath[path as Path]) {
    return <p>404: The requested page could not be found.</p>;
  }

  const componentsToRender = componentsForPath[path as Path]; // Now it's safe to index by `path`

  return <div>{componentsToRender}</div>;
}
