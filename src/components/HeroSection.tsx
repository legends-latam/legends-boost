import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, Shield, Users, TrendingUp } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import legendsLogo from '@/assets/legends-logo.png';

const HeroSection = () => {
  const [userCount, setUserCount] = useState(15247);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
        <div className="flex justify-center mb-8">
          <img src={legendsLogo} alt="Legends" className="h-20 w-auto glow-green" />
        </div>

        {/* Headline */}
        <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-6 text-glow">
          ¿Por Qué Sigues En El Mismo{' '}
          <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
            Rank
          </span>{' '}
          Después De 1000+ Partidas?
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
          La IA analiza <span className="text-neon-cyan font-bold">+50 variables por partida</span> para 
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

        {/* CTA Section */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="tu-email@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-bg-tertiary border-white/20 text-white placeholder:text-text-muted"
            />
            <Button className="btn-hero pulse-glow whitespace-nowrap">
              ANALIZA TU JUEGO GRATIS
            </Button>
          </div>
          <p className="text-sm text-text-muted mt-2 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            No pedimos contraseña de Steam
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="mb-12">
          <Button variant="ghost" className="btn-secondary">
            <Play className="w-4 h-4 mr-2" />
            Ver Demo En Vivo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-neon-green mb-2">68%</div>
            <div className="text-sm text-text-secondary">Mejora Promedio<br />en 30 días</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2">2.3x</div>
            <div className="text-sm text-text-secondary">Más Rápido<br />que Solo</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-6 h-6 text-neon-yellow" />
              <div className="text-2xl font-bold text-neon-yellow font-mono">
                {userCount.toLocaleString()}
              </div>
            </div>
            <div className="text-sm text-text-secondary">Jugadores LATAM<br />Mejorando</div>
          </div>
        </div>

        {/* Live Activity */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-muted">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          <span>{Math.floor(userCount * 0.19)} jugadores entrenando ahora</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;