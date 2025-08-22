import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
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

      {/* Test Landing Page */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl mb-6 text-glow">
            ¿Por Qué Sigues En El Mismo{' '}
            <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
              Rank
            </span>{' '}
            Después De 1000+ Partidas?
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-8">
            La IA analiza <span className="text-neon-cyan font-bold">+50 variables por partida</span> para 
            mostrarte EXACTAMENTE qué te impide mejorar.
          </p>
          <button className="btn-hero pulse-glow">
            ANALIZA TU JUEGO GRATIS AHORA
          </button>
        </div>
      </div>

      {/* Landing Page Sections */}
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <DashboardPreview />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
