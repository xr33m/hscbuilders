import React from 'react';
import HeroSection from '../components/HeroSection';
import LogoSlider from '../components/LogoSlider';
import MobileQuoteForm from '../components/MobileQuoteForm';
import AboutUsSection from '../components/AboutUsSection';
import ServicesPreview from '../components/ServicesPreview';
import OurProcessSection from '../components/OurProcessSection';
import ReviewsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import RecentProjectsSection from '../components/RecentProjectsSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <LogoSlider />
      <MobileQuoteForm />
      <AboutUsSection />
      <ServicesPreview />
      <OurProcessSection />
      <ReviewsSection />
      <RecentProjectsSection />
      <FAQSection />
    </div>
  );
};

export default Home;