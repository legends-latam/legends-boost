import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Shield, Check, Users, Zap } from 'lucide-react';

const CtaSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-neon-cyan/10 to-neon-purple/10 opacity-30" />
        <div className="hex-grid opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-orbitron font-black text-4xl md:text-6xl mb-6 text-glow">
            ¿Listo Para Dejar De Perder Por Los 
            <span className="bg-gradient-to-r from-neon-red to-neon-yellow bg-clip-text text-transparent">
              {' '}Mismos Errores{' '}
            </span>
            Una Y Otra Vez?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
            Únete a <span className="text-neon-green font-bold">15,247 jugadores</span> que ya están 
            subiendo de rank con Legends. Sin promesas vacías, solo 
            <span className="text-neon-cyan font-bold"> resultados medibles.</span>
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="tu-email@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-bg-tertiary border-white/20 text-white placeholder:text-text-muted text-lg py-6"
              />
              <Button className="btn-hero text-lg py-6 px-8 pulse-glow">
                <Zap className="w-5 h-5 mr-2" />
                EMPEZAR MI TRANSFORMACIÓN
              </Button>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-neon-green" />
              <span>Setup en 2 minutos</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-neon-cyan" />
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-neon-yellow" />
              <span>30 días garantía total</span>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-16">
            <Shield className="w-4 h-4" />
            <span>🔒 Pago 100% seguro</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-neon-green mb-2">68%</div>
            <div className="text-sm text-text-secondary">Mejora Promedio</div>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-neon-cyan mb-2">2.3x</div>
            <div className="text-sm text-text-secondary">Más Rápido</div>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-neon-purple mb-2">92%</div>
            <div className="text-sm text-text-secondary">Satisfacción</div>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-neon-yellow mb-2">15.2K</div>
            <div className="text-sm text-text-secondary">Jugadores</div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 mb-12">
            <h3 className="font-orbitron font-bold text-xl mb-6">
              Jugadores Mejorando <span className="text-neon-green">Ahora Mismo</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan flex items-center justify-center text-black font-bold">
                  M
                </div>
                <div className="text-left">
                  <div className="font-semibold">MarcosPro</div>
                  <div className="text-sm text-text-secondary">+156 MMR esta semana</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center text-black font-bold">
                  L
                </div>
                <div className="text-left">
                  <div className="font-semibold">LuanaGamer</div>
                  <div className="text-sm text-text-secondary">Ancient I → Divine</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple to-neon-yellow flex items-center justify-center text-black font-bold">
                  C
                </div>
                <div className="text-left">
                  <div className="font-semibold">CarlosK</div>
                  <div className="text-sm text-text-secondary">73% winrate L20</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-muted">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span>2,847 jugadores entrenando en este momento</span>
            </div>
          </div>

          {/* Final Push */}
          <div className="text-center">
            <p className="text-lg text-text-secondary mb-6">
              El próximo rank que siempre has querido está a un click de distancia.
            </p>
            
            <Button className="btn-hero text-xl py-8 px-12 pulse-glow">
              <ArrowRight className="w-6 h-6 mr-3" />
              SÍ, QUIERO MEJORAR AHORA
            </Button>
            
            <p className="text-sm text-text-muted mt-4">
              * Acceso inmediato • Sin compromisos • Garantía 30 días
            </p>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-card p-6 border-neon-yellow/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-neon-yellow animate-pulse" />
              <span className="font-bold text-neon-yellow">OFERTA LIMITADA</span>
            </div>
            <p className="text-text-secondary">
              Solo quedan <span className="text-neon-green font-bold">127 cupos</span> con 
              descuento del 30% de por vida. Una vez que se agoten, el precio sube a $13 USD/mes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;