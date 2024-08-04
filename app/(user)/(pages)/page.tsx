import Apropos from "@/components/User Components/Apropos";
import Hero from "@/components/User Components/HeroSection";
import LogosSlider from "@/components/User Components/LogoSlider";
import SomeCategories from "@/components/User Components/SomeCategories";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Apropos />
      <Suspense
        fallback={<div className="text-2xl">Loading categories...</div>}
      >
        <SomeCategories />
      </Suspense>
      <LogosSlider />
    </>
  );
}
