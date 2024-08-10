import Apropos from "@/components/User Components/Apropos";
import Hero from "@/components/User Components/HeroSection";
import LogosSlider from "@/components/User Components/LogoSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <Apropos />
      {/* <Suspense fallback={<SkeletonSomeCategories numberOfCategories={3} />}>
        <SomeCategories numberOfCategories={3} />
      </Suspense> */}
      <LogosSlider />
    </>
  );
}
