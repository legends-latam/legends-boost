import {User, TrendingUp, Target, Users, Award, Sparkles, Bot, BarChart, Trophy} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SocialNetworkSection = () => {
  return (
    <section className="relative py-18 px-0 overflow-hidden bg-gradient-to-b from-bg-primary via-bg-tertiary to-bg-primary">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute inset-0 hex-grid opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <User className="w-5 h-5 text-neon-purple" />
            <span className="text-neon-purple font-semibold">Tu Perfil de Leyenda</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            Tu red social de{' '}
            <span className="bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green bg-clip-text text-transparent">
              jugadores
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Encuentra tu equipo perfecto, potencia tu rol con jugadores que se adpatan a tu juego. Entrena mecánicas de grupo como los grandes.
          </p>
        </div>

        {/* Main Profile Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Left: AI Features */}
          <div className="space-y-6">
            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Conecta con Jugadores con IA</h3>
                    <p className="text-text-secondary">
                      Encuentra tu match perfecto que se adapte a tu juego, tu rol y compartan objetivos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Evolucióna como Equipo</h3>
                    <p className="text-text-secondary">
                      La mejor forma de aprender es en manada, no evoluciones en solitario, convierte tu equipo en Legenda.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-green/30 hover:border-neon-green transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Formaliza el Clan</h3>
                    <p className="text-text-secondary">
                      ¿Es tu equipo soñado? Define las reglas del juego, metas y compromisos para llegar al siguiente nivel.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-yellow/30 hover:border-neon-yellow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Participa en torneos</h3>
                    <p className="text-text-secondary">
                      Noticias de torneos activos, análisis de debilidades de equipos participantes y pública tus trofeos obtenidos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Profile Preview */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border-2 border-neon-purple/30 bg-gradient-to-br from-gray-900 to-black shadow-2xl hover:border-neon-purple transition-all duration-500">
              {/* Profile Header with Background */}
              <div className="relative h-32 bg-gradient-to-r from-purple-600 via-cyan-600 to-green-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }}></div>
              </div>

              <div className="p-8">
                {/* Avatar and Username */}
                <div className="flex items-start justify-between mb-6 -mt-16">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 p-1 shadow-xl ring-4 ring-gray-900">
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                          <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-500 border-2 border-gray-900 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-white">Legends</h3>
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">Steam ID: 76561199813017931</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col gap-2 mt-12">
                    <Button size="sm" variant="default" className="btn-hero pulse-glow whitespace-nowrap text-xs sm:text-sm px-3 py-2">
                      Conectar
                    </Button>
                    <Button size="sm" variant="ghost" className="border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 text-xs sm:text-sm px-3 py-2">
                      Ver Análisis
                    </Button>
                  </div>
                </div>

                {/* Mobile Buttons */}
                <div className="flex sm:hidden gap-2 mb-4">
                  <Button size="sm" variant="default" className="btn-hero pulse-glow flex-1 text-sm px-4 py-2">
                    Conectar
                  </Button>
                  <Button size="sm" variant="ghost" className="border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 flex-1 text-sm px-4 py-2">
                    Ver Análisis
                  </Button>
                </div>

                {/* Role Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border border-yellow-500/40 rounded-full text-yellow-400 text-sm font-semibold flex items-center gap-1">
                    ⭐ Oro II
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/40 rounded-full text-green-400 text-sm">
                    🎮 Jungle (Principal)
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/10 border border-blue-500/40 rounded-full text-blue-400 text-sm">
                    🎯 Mid (Secundario)
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-purple-600/10 border border-purple-500/40 rounded-full text-purple-400 text-sm">
                    🌎 Región: SA
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">2,847</div>
                    <div className="text-xs text-gray-400">Partidas Totales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">58.3%</div>
                    <div className="text-xs text-gray-400">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">#127</div>
                    <div className="text-xs text-gray-400">Rank Regional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">6/10</div>
                    <div className="text-xs text-gray-400">Comportamiento</div>
                  </div>
                </div>

                {/* Game Objectives */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">Objetivos de Juego</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-green-400 text-sm">Practicar Mécanicas</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-400 text-sm">Competir</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-400 text-sm">Equipo</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-400 text-sm">Estratégia</span>
                  </div>
                </div>

                {/* Favorite Player */}
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold text-sm">Jugador que Admira</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <User className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-white">Faker | Dendi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialNetworkSection;
