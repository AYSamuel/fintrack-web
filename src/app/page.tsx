import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import PrivacySection from "../components/sections/PrivacySection";
import RegionMap from "../components/sections/RegionMap";
import Testimonials from "../components/sections/Testimonials";
import WaitlistCTA from "../components/sections/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <PrivacySection />
        <RegionMap />
        <Testimonials />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
