import { Coins, Heart, Users, Trophy, Zap, Gift, Crown, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GamificationSection = () => {
  return (
    <section className="relative py-24 px-0 overflow-hidden bg-gradient-to-b from-bg-primary via-bg-tertiary to-bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-neon-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Floating Coins Animation */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          >
            <Coins className="w-6 h-6 text-neon-yellow/20" />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <Trophy className="w-5 h-5 text-neon-yellow" />
            <span className="text-neon-yellow font-semibold">Sistema de Recompensas</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            Gana{' '}
            <span className="bg-gradient-to-r from-neon-yellow via-neon-green to-neon-yellow bg-clip-text text-transparent">
              Legends Coins
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Completa desafíos, mejora tus habilidades y desbloquea recompensas increíbles mientras subes de nivel.
          </p>
        </div>

        {/* Legends Coins Overview */}
        <div className="mb-16">
          <Card className="glass-card border-neon-yellow/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Visual */}
                <div className="relative bg-gradient-to-br from-yellow-900/20 via-yellow-800/10 to-transparent p-8 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated Coin Stack */}
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow to-yellow-600 rounded-full animate-spin-slow opacity-20"></div>
                      <div className="absolute inset-4 bg-gradient-to-br from-neon-yellow to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50">
                        <Coins className="w-24 h-24 text-black" />
                      </div>

                      {/* Orbiting Mini Coins */}
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="absolute w-12 h-12 bg-gradient-to-br from-neon-yellow to-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-orbit"
                          style={{
                            animationDelay: `${i * 0.75}s`,
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${i * 90}deg) translateX(80px) rotate(-${i * 90}deg)`
                          }}
                        >
                          <Coins className="w-6 h-6 text-black" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Info */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">¿Qué son Legends Coins?</h3>
                  <p className="text-text-secondary mb-6">
                    La moneda virtual de Legends OS que ganas completando desafíos diarios, mejorando tu rendimiento y progresando en tu entrenamiento.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-green/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-neon-green" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Gana al Completar Desafíos</p>
                        <p className="text-sm text-text-secondary">50-100 coins por desafío diario</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-purple/20 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-neon-purple" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Mejora tu Rendimiento</p>
                        <p className="text-sm text-text-secondary">25 coins por cada hito alcanzado</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 flex items-center justify-center flex-shrink-0">
                        <Crown className="w-5 h-5 text-neon-cyan" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Progresión Continua</p>
                        <p className="text-sm text-text-secondary">15 coins por lección completada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What You Can Buy */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            ¿Qué Puedes Comprar con{' '}
            <span className="text-neon-yellow">Legends Coins</span>?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Lives */}
            <Card className="glass-card border-neon-red/30 hover:border-neon-red hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Vidas Extra</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Continúa entrenando sin límites
                  </p>
                  <div className="flex items-center justify-center gap-2 text-neon-yellow font-bold text-lg">
                    <Coins className="w-5 h-5" />
                    <span>300 Coins</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coaching Sessions */}
            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Coaching 1 a 1</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Sesión personalizada con un pro
                  </p>
                  <div className="flex items-center justify-center gap-2 text-neon-yellow font-bold text-lg">
                    <Coins className="w-5 h-5" />
                    <span>3000 Coins</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clan Creation */}
            <Card className="glass-card border-neon-cyan/30 hover:border-neon-cyan hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Crear Clan</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Forma tu equipo de legendas
                  </p>
                  <div className="flex items-center justify-center gap-2 text-neon-yellow font-bold text-lg">
                    <Coins className="w-5 h-5" />
                    <span>1500 Coins</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Premium Content */}
            <Card className="glass-card border-neon-green/30 hover:border-neon-green hover:scale-105 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Contenido Premium</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Guías exclusivas y mapas especiales
                  </p>
                  <div className="flex items-center justify-center gap-2 text-neon-yellow font-bold text-lg">
                    <Coins className="w-5 h-5" />
                    <span>Desde 600 Coins</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 8s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GamificationSection;
