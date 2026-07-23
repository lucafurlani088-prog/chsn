import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/Marquee";
import { FeaturedDrop } from "@/components/sections/FeaturedDrop";
import { Manifesto } from "@/components/sections/Manifesto";
import { LookbookTeaser } from "@/components/sections/LookbookTeaser";
import { NewsletterBanner } from "@/components/sections/NewsletterBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee text="Chosen, Not Given" />
      <FeaturedDrop />
      <Manifesto />
      <LookbookTeaser />
      <NewsletterBanner />
    </>
  );
}
