import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Institutions from "@/components/home/Institutions";
import CampusLife from "@/components/home/CampusLife";
import Testimonials from "@/components/home/Testimonials";
import Careers from "@/components/home/Careers";
import Contact from "@/components/home/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Institutions />
        <CampusLife />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
