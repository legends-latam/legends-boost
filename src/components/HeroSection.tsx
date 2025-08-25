import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Play, Shield, Users, TrendingUp, Star,
  Trophy, 
  Zap,  
  BarChart3, 
  GamepadIcon,
  CheckCircle,
  Twitter,
  MessageCircle,
  Youtube,
  Twitch
 } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import legendsLogo from '@/assets/logo.png';

const HeroSection = () => {
  const [userCount, setUserCount] = useState(15247);
  const [email, setEmail] = useState('');
  const [playerCount, setPlayerCount] = useState(15247);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    // Simulate live player counter
    const intervalCounter = setInterval(() => {
      setPlayerCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => {
      clearInterval(interval);
      clearInterval(intervalCounter);
    }
  }, []);

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => (
    <span className="tabular-nums font-bold text-2xl md:text-3xl text-glow animate-glow-pulse">
      {value.toLocaleString()}{suffix}
    </span>
  );

  const openDashboard = () => {
    window.location.href = 'https://stephanoapiolaza.github.io/legends-core/';
  }

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
            <Shield className="w-5 h-5 text-neon-green" />
            <span className="text-white font-semibold">Dota 2 ✅</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card opacity-50">
            <Shield className="w-5 h-5 text-text-muted" />
            <span className="text-text-muted">LoL 🔒</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card opacity-50">
            <Shield className="w-5 h-5 text-text-muted" />
            <span className="text-text-muted">Valorant 🔒</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card opacity-50">
            <Shield className="w-5 h-5 text-text-muted" />
            <span className="text-text-muted">CS2 🔒</span>
          </div>
        </div>
        <p className="text-sm text-text-muted mb-12">Más juegos próximamente</p>

        {/* Secondary CTA */}
        <div className="mb-12">
          <Button className="btn-hero pulse-glow whitespace-nowrap">
              Analiza mi nivel Gratis
            </Button>
          <p className="text-sm text-text-muted mt-2 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Te autenticas directamente en Steam
          </p>
        </div>

      {/* Stats Section */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Partidas analizadas", value: "3245", icon: Users, desc: "Hoy" },
            { label: "Más eficiente", value: "49%", icon: TrendingUp, desc: "vs práctica tradicional" },
            { label: "Mejora más rápida", value: "27%", icon: Zap, desc: "en GPM & KDA & XPM" },
            { label: "Satisfacción", value: "92%", icon: BarChart3, desc: "de nuestros usuarios" }
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

        {/* Live Activity */}
        <div className="mb-8 flex items-center justify-center gap-2 text-sm text-text-muted">
          <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span><AnimatedCounter value={playerCount} suffix="" /> jugadores LATAM</span>
              </div>
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;