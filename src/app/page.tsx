import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollChoreographer from "@/components/scroll/ScrollChoreographer";

export default function Home() {
  return (
    <>
      <ScrollChoreographer />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
