import Hero from "@/components/Hero";
import ImpactBento from "@/components/ImpactBento";
import StackStrip from "@/components/StackStrip";
import SelectedWork from "@/components/SelectedWork";
import AboutTeaser from "@/components/AboutTeaser";
import Contact from "@/components/Contact";

/** Home page: composes the landing sections in order. */
export default function Home() {
  return (
    <>
      <Hero />
      <ImpactBento />
      <StackStrip />
      <SelectedWork />
      <AboutTeaser />
      <Contact />
    </>
  );
}
