import { Check, X, Crown, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {

  const openDashboard = () => {
    window.location.href = 'https://stephanoapiolaza.github.io/legends-core/';
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
            Planes Que <span className="text-neon-green">Realmente Funcionan</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Precios justos para LATAM. Sin letra pequeña, sin trucos. 
            <span className="text-neon-cyan"> Cancela cuando quieras.</span>
          </p>
        </div>

        {/* Early Access Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass-card p-6 border-neon-yellow/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-neon-yellow" />
              <span className="font-bold text-neon-yellow">EARLY ACCESS: SOLO QUEDAN 127 CUPOS</span>
            </div>
            <p className="text-text-secondary">
              30% DESCUENTO PRIMER AÑO - Los primeros 500 usuarios obtienen precio bloqueado para siempre
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* FREE Plan */}
          <div className="glass-card p-8 border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-orbitron font-bold text-2xl mb-2">Gratuito</h3>
              <div className="text-4xl font-bold mb-2">$0</div>
              <div className="text-text-secondary">Para probar</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">3 análisis por semana</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Dashboard básico</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">1 drill semanal</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Comunidad general</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-text-muted flex-shrink-0" />
                <span className="text-sm text-text-muted">Sin certificaciones</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-5 h-5 text-text-muted flex-shrink-0" />
                <span className="text-sm text-text-muted">Sin plan personalizado</span>
              </div>
            </div>

            <Button variant="outline" className="w-full btn-secondary" onClick={openDashboard}>
              Empezar Gratis
            </Button>
          </div>

          {/* PRO Plan - Featured */}
          <div className="relative glass-card p-8 border-neon-green/50 hover:border-neon-green transition-all duration-300 scale-105" style={{overflow: 'unset'}}>
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-neon-green to-neon-cyan px-2 py-2 rounded-full text-black font-bold text-sm">
                MÁS POPULAR
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan p-0.5">
                <div className="w-full h-full bg-bg-secondary rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-neon-green" />
                </div>
              </div>
              <h3 className="font-orbitron font-bold text-2xl mb-2 text-neon-green">PRO</h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-text-muted line-through">$13</span>
                <span className="text-4xl font-bold text-neon-green">$9</span>
                <span className="text-text-secondary">USD/mes</span>
              </div>
              <div className="text-neon-yellow font-semibold">30% Descuento/Primer Año</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Análisis ILIMITADO con IA</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Dashboard completo personalizable</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Drills ilimitados personalizados</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Planes de entrenamiento adaptativos</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Certificaciones de progreso</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Comunidad PRO exclusiva</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Soporte prioritario</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                <span className="text-sm">Acceso a torneos Legends</span>
              </div>
            </div>

            <Button className="w-full btn-hero pulse-glow" onClick={openDashboard}>
              OBTENER PRO AHORA
            </Button>
            
            <p className="text-xs text-neon-cyan text-center mt-2">
              ⚡ Oferta limitada: Solo primeros 500 usuarios
            </p>
          </div>

          {/* ELITE Plan */}
          <div className="glass-card p-8 border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300 opacity-75">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 flex items-center justify-center">
                <Crown className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="font-orbitron font-bold text-2xl mb-2 text-neon-purple">ELITE</h3>
              <div className="text-2xl font-bold mb-2">Próximamente</div>
              <div className="text-text-secondary">2026</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="text-sm text-neon-purple font-semibold mb-4">Todo lo PRO más:</div>
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-neon-purple flex-shrink-0" />
                <span className="text-sm">Coaching 1-on-1 profesional</span>
              </div>
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-neon-purple flex-shrink-0" />
                <span className="text-sm">Análisis de equipo completo</span>
              </div>
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-neon-purple flex-shrink-0" />
                <span className="text-sm">Preparación para torneos específicos</span>
              </div>
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-neon-purple flex-shrink-0" />
                <span className="text-sm">Badge exclusivo Elite</span>
              </div>
            </div>

            <Button variant="outline" disabled className="w-full border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black">
              Me Interesa
            </Button>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-neon-green" />
              <span className="text-sm text-text-secondary">Cancela cuando quieras</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-neon-cyan" />
              <span className="text-sm text-text-secondary">30 días garantía devolución</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-neon-yellow" />
              <span className="text-sm text-text-secondary">Usado por 15,247 jugadores</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="glass-card p-8 text-center">
            <h3 className="font-orbitron font-bold text-xl mb-6">Métodos de Pago LATAM</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="glass-card p-4">
                <div className="text-lg font-bold text-neon-green mb-1">🇧🇷 Brasil</div>
                <div className="text-sm text-text-secondary">PIX, Boleto, MercadoPago</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-lg font-bold text-neon-purple mb-1">🇨🇱 Chile</div>
                <div className="text-sm text-text-secondary">Mercadopago, Webpay</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-lg font-bold text-neon-yellow mb-1">🇵🇪 Perú</div>
                <div className="text-sm text-text-secondary">Yape, Plin</div>
              </div>
               <div className="glass-card p-4">
                <div className="text-lg font-bold text-neon-cyan mb-1">🌎 Global</div>
                <div className="text-sm text-text-secondary">Visa, Mastercard</div>
              </div>
            </div>
            
            <p className="text-sm text-text-muted">
              Todos los pagos procesados de forma segura. Sin cargos ocultos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Users = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default PricingSection;