import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import PersonalizedTrainingSection from '@/components/PersonalizedTrainingSection';
import PracticeModesSection from '@/components/PracticeModesSection';
import GamificationSection from '@/components/GamificationSection';
import SocialNetworkSection from '@/components/SocialNetworkSection.tsx';
import DashboardPreview from '@/components/DashboardPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Indicator */}
      <div
        className="scroll-indicator"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Landing Page Sections */}
      <HeroSection />
      <PersonalizedTrainingSection />
      <SocialNetworkSection />
      <GamificationSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
