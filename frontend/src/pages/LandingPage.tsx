import Navbar from "../components/landingPage/Navbar";
import Hero from "../components/landingPage/Hero";
import DashboardPreview from "../components/landingPage/DashboardPreview";
import Features from "../components/landingPage/Features";
import HowItWorks from "../components/landingPage/HowItWorks";
import Statistics from "../components/landingPage/Statistics";
import Testimonials from "../components/landingPage/Testimonials";
import FAQ from "../components/landingPage/FAQ";
import CTA from "../components/landingPage/CTA";
import Footer from "../components/landingPage/Footer";

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