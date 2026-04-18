import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import heroVideoMp4 from '@/assets/hero.mp4';
import heroVideoWebm from '@/assets/hero.webm';
import {
  Shield, Users, TrendingUp,
  Zap,
  BarChart3, Download,
} from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import legendsLogo from '@/assets/logo.png';
import dota from '@/assets/dota.svg';
import lol from '@/assets/lol.webp';
import valorant from '@/assets/valorant.webp';
import cs2 from '@/assets/cs2.webp';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const highlights = [
    'App ligera de 38 MB',
    'Pensado en rendimiento, no reduce FPS',
    'No genera lags ni aumento de ping. Offline no usa internet',
    'Anti-Cheat First: no se banea tu cuenta, es 100% legal',
    'Pensado en tu privacidad',
    'Disponible para Windows, Mac y Linux',
  ];

  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const [typedHighlight, setTypedHighlight] = useState('');
  const [isDeletingHighlight, setIsDeletingHighlight] = useState(false);

  useEffect(() => {
    const currentHighlight = highlights[activeHighlightIndex];

    const timeout = window.setTimeout(() => {
      if (!isDeletingHighlight) {
        if (typedHighlight === currentHighlight) {
          setIsDeletingHighlight(true);
          return;
        }

        const nextValue = currentHighlight.slice(0, typedHighlight.length + 1);
        setTypedHighlight(nextValue);

        return;
      }

      const nextValue = currentHighlight.slice(0, Math.max(typedHighlight.length - 1, 0));
      setTypedHighlight(nextValue);

      if (nextValue.length === 0) {
        setIsDeletingHighlight(false);
        setActiveHighlightIndex((prev) => (prev + 1) % highlights.length);
      }
    }, isDeletingHighlight ? (typedHighlight ? 7 : 220) : (typedHighlight === currentHighlight ? 1000 : 52));

    return () => {
      window.clearTimeout(timeout);
    };
  }, [activeHighlightIndex, highlights, isDeletingHighlight, typedHighlight]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Dota 2 Gaming Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/60 to-bg-primary/90" />
        <div className="absolute inset-0 hex-grid opacity-30" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-green rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8 mt-3">
          <img src={legendsLogo} alt="Legends" className="h-20 w-auto" />
        </div>

        {/* Headline */}
        <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-6 text-glow">
          ¿Por Qué Sigues En El Mismo{' '}
          <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
            Rank
          </span>{' '}
          Después De Muchas +Partidas?
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
          Legends OS analiza <span className="text-neon-cyan font-bold">+50 variables por partida</span> para
          mostrarte EXACTAMENTE qué te impide mejorar. Sin rodeos, sin guías genéricas,
          solo <span className="text-neon-green font-bold">TU plan personalizado</span>.
        </p>

        {/* Game Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 glass-card">
            <img src={dota} alt="Dota 2" className="w-auto" />
            <span className="text-white font-semibold">Dota 2 ✅</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card opacity-50">
            <img src={lol} alt="League of Legends" className="w-auto" />
            <span className="text-text-muted">LoL 🔒</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card opacity-50">
            <img src={valorant} alt="Valorant" className="w-auto" />
            <span className="text-text-muted">Valorant 🔒</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card opacity-50">
            <img src={cs2} alt="Counter Strike 2" className="w-auto" />
            <span className="text-text-muted">CS2 🔒</span>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mb-12">
          <Button className="btn-hero pulse-glow whitespace-nowrap" disabled>
            <Download className="w-4 h-4" />
            Próximamente...
          </Button>
          <p className="text-sm text-text-muted mt-2 flex items-center justify-center gap-2">
            Compatible para Windows, Mac y Linux
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-5xl">
          <div className="glass-card border border-neon-cyan/20 bg-bg-secondary/60 p-5 md:p-6">
            <div className="rounded-2xl border border-white/8 bg-black/30 px-5 py-5 text-left">
              <div className="mb-3 flex items-center gap-3">
                <Shield className="h-5 w-5 shrink-0 text-neon-green" />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neon-cyan">
                  Unéte a Legends
                </p>
              </div>

              <div className="min-h-[96px] md:min-h-[72px]">
                <p className="text-xl font-semibold leading-relaxed text-white md:text-2xl">
                  {typedHighlight}
                  <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-1 animate-pulse bg-neon-green align-middle" />
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {highlights.map((highlight, index) => (
                  <span
                    key={highlight}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors ${index === activeHighlightIndex
                      ? 'border-neon-green/50 bg-neon-green/10 text-neon-green'
                      : 'border-white/10 bg-white/5 text-text-muted'
                      }`}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* App Preview with Monitor Frame */}
        <div className="mb-16 mt-12">
          <div className="relative max-w-6xl mx-auto">
            {/* Monitor Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900">
              {/* Monitor Top Bar */}
              <div className="bg-gradient-to-b from-gray-700 to-gray-800 px-4 py-2 flex items-center justify-between border-b-2 border-gray-900">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">Legends OS - Tu Coach AI Personal</div>
                <div className="w-16"></div>
              </div>

              {/* Screen Content */}
              <div className="relative bg-black aspect-video overflow-hidden">
                {/* App Demo Video */}
                <video
                  className="w-full h-full object-fill"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={heroVideoWebm} type="video/webm" />
                  <source src={heroVideoMp4} type="video/mp4" />
                  {/* Fallback for browsers that don't support video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">Legends OS</h3>
                      <p className="text-gray-400">Tu navegador no soporta reproducción de video</p>
                    </div>
                  </div>
                </video>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-green/20 via-neon-purple/20 to-neon-cyan/20 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="relative z-10 px-6 lg:px-12 py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Mayor visibilidad", value: "15%", icon: Users, desc: "para formar equipos" },
              { label: "Más eficiente", value: "49%", icon: TrendingUp, desc: "vs práctica tradicional" },
              { label: "Mejora más rápida", value: "27%", icon: Zap, desc: "en GPM & KDA & XPM" },
              { label: "Satisfacción", value: "92%", icon: BarChart3, desc: "por jugadores entrevistados" }
            ].map((stat, index) => (
              <Card key={index} className="glass-card border-neon-green/20 glow-green hover:glow-purple transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-neon-green" />
                  <div className="text-3xl font-bold text-glow mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-xs text-neon-cyan/70 mt-1">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
};

export default HeroSection;