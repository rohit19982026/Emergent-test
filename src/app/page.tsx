import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/ui/Marquee";
import Services from "@/components/Services";
import GrowthPath from "@/components/GrowthPath";
import About from "@/components/About";
import Statement from "@/components/Statement";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import StatsBand from "@/components/StatsBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { marqueeItems } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Marquee items={marqueeItems} tilt />
        <Services />
        <GrowthPath />
        <About />
        <Statement />
        <Portfolio />
        <Process />
        <StatsBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
