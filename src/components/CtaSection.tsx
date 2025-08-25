import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Shield, Check, Users, Zap } from 'lucide-react';

const CtaSection = () => {
  const [email, setEmail] = useState('');


  const openDashboard = () => {
    window.location.href = 'https://stephanoapiolaza.github.io/legends-core/';
  }

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
          <p className="text-xl md:text-2xl text-text-secondary mb-9 leading-relaxed max-w-3xl mx-auto">
            Únete a <span className="text-neon-green font-bold">15,247 jugadores</span> que ya están 
            subiendo de rank con Legends. Sin promesas vacías, solo 
            <span className="text-neon-cyan font-bold"> resultados medibles.</span>
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-lg py-6 px-8 pulse-glow" onClick={openDashboard}>
                <Zap className="w-5 h-5 mr-2" />
                EMPEZAR MI TRANSFORMACIÓN
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;