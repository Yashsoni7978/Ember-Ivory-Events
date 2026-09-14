import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import InquiryFunnel from "@/components/sections/InquiryFunnel";

export default function Home() {
  return (
    <main className="min-h-screen bg-parchment text-ink selection:bg-oxblood selection:text-bone">
      {/* Editorial Navigation */}
      <NavBar />

      {/* Approved Asymmetric Hero */}
      <Hero />

      {/* Section 1: Services */}
      <Services />

      {/* Section 2: Portfolio */}
      <Portfolio />

      {/* Section 3: Testimonials */}
      <Testimonials />

      {/* Section 4: Booking Inquiry Funnel */}
      <InquiryFunnel />

      {/* Temporary anchor target stubs for smooth development until subsequent sections are reviewed */}
      <div id="about" className="sr-only" aria-hidden="true" />
    </main>
  );
}
