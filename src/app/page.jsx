import AboutSection from "@/components/Pages/Home/AboutSection";
import HeroSection from "@/components/Pages/Home/HeroSection";
import ServicesOverview from "@/components/Pages/Home/ServicesOverview";
import Testimonials from "@/components/Pages/Home/Testimonials";
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
