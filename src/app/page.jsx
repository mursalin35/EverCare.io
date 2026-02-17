import AboutSection from "@/components/Pages/home/AboutSection";
import HeroSection from "@/components/Pages/home/HeroSection";
import ServicesOverview from "@/components/Pages/home/ServicesOverview";
import Testimonials from "@/components/Pages/home/Testimonials";
import Image from "next/image";

export default function HomePage() {
  return (
   <div>
    <HeroSection/>
    <AboutSection/>
    <ServicesOverview/>
    <Testimonials/>

   </div>
  );
}
