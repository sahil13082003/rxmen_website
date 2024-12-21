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
import HeroSectionPune from "./HeroSectionPune";
import HeroSectionBengaluru from "./HeroSectionBengaluru";
import Navbar from "./Navbar";
import UnderstandingSexologist from "./UnderstandingSexologist";

// Correct type for the component
type ComponentEntry = {
    component: React.ElementType; // You can replace `any` with specific prop types if available
};

const componentsForPath: Record<string, ComponentEntry[]> = {
    "/sexologist-near-me": [
        { component: Navbar },
        { component: HeroSection },
        { component: DoctorSection },
        { component: TopProfessionalsSection },
        { component: SexologistSection },
        { component: RxMenHelpSection },
        { component: WhenToSeeASexologist },
        { component: TestimonialsSection },
    ],
    "/sexologist-in-pune": [
        { component: Navbar },
        { component: HeroSectionPune },
        { component: DoctorSection },
        { component: TopProfessionalsSection },
        { component: UnderstandingSexologist },
        { component: RxMenHelpSection },
        { component: WhenToSeeASexologist },
        { component: TestimonialsSection },
    ],
    "/sex-therapy-in-bangalore": [
        { component: Navbar },
        { component: HeroSectionBengaluru },
        { component: DoctorSection },
        { component: TopProfessionalsSection },
        { component: UnderstandingSexTherapy },
        { component: RxMenHelpSection },
        { component: WhenToSeeASexologist },
        { component: TestimonialsSection },
    ],
};

export default function PageContent() {
    const path = usePathname(); // Get the current route path
    const componentsToRender = componentsForPath[path] || [];

    return (
        <>
            {componentsToRender.map(({ component: Component }, index) => (
                <Component key={index} />
            ))}
        </>
    );
}
