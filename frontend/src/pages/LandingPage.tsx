import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <Hero />

      <DashboardPreview />

      <Features />

      <HowItWorks />

      <Statistics />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </div>
  );
};

export default LandingPage;