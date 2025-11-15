import { Target, Swords, Mic, Brain, BookOpen, Map, Users as UsersIcon, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PracticeModesSection = () => {
  const practiceModes = [
    {
      icon: Target,
      title: "Misiones de Práctica",
      description: "Completa misiones en mapa personalizado para dominar mecánicas",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/30",
      hoverBorder: "hover:border-green-500",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      details: "Mapas creados por nuestra comunidad de Legends"
    },
    {
      icon: Swords,
      title: "Simulación de Teamfight",
      description: "Juego de roles - Decisiones en tiempo real bajo presión",
      color: "from-red-500 to-red-600",
      borderColor: "border-red-500/30",
      hoverBorder: "hover:border-red-500",
      iconBg: "bg-red-500/20",
      iconColor: "text-red-400",
      details: "Practica teamfights en escenarios realistas"
    },
    {
      icon: Mic,
      title: "Comunicación de Equipo",
      description: "Practica protocolos de comunicación con reconocimiento de voz",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-500",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      details: "Mejora tu comunicación con tu equipo"
    },
    {
      icon: Brain,
      title: "Quiz de Conocimientos",
      description: "Pon a prueba tu conocimiento sobre Dota 2",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-500",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      details: "Héroes, items, mecánicas y estrategias"
    },
    {
      icon: BookOpen,
      title: "Tutorial Interactivo",
      description: "Aprende conceptos paso a paso con contenido visual",
      color: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-500",
      iconBg: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
      details: "Guías detalladas para cada concepto"
    },
    {
      icon: Map,
      title: "Análisis de Replay",
      description: "Analiza tus partidas con IA y detecta errores críticos",
      color: "from-cyan-500 to-cyan-600",
      borderColor: "border-cyan-500/30",
      hoverBorder: "hover:border-cyan-500",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
      details: "Feedback instantáneo sobre tu gameplay"
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <Swords className="w-5 h-5 text-neon-cyan" />
            <span className="text-neon-cyan font-semibold">Modos de Práctica</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            Entrena Sin{' '}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-green to-neon-purple bg-clip-text text-transparent">
              Límites
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Practica todas las veces que quieras. Sin afectar vidas. Sin recompensas.
            Modo práctica está diseñado para que perfecciones tus habilidades.
          </p>
        </div>

        {/* Practice Mode Card */}
        <div className="mb-16">
          <Card className="glass-card border-neon-cyan/30 overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-cyan-900/20 p-8 text-center border-b border-cyan-500/20">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                    <Swords className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Modo Práctica</h3>
                </div>
                <p className="text-text-secondary mb-2">
                  Entrena sin límites • Sin afectar vidas • Sin recompensas
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg mt-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-cyan-400 text-sm font-semibold">
                    Practica todas las veces que quieras. Este modo no otorga XP ni recompensas.
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-xl font-bold text-white mb-6 text-center">
                  Selecciona tu entrenamiento
                </h4>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {practiceModes.map((mode, index) => (
                    <button
                      key={index}
                      className={`glass-card ${mode.borderColor} ${mode.hoverBorder} p-4 text-left transition-all duration-300 hover:scale-105 group cursor-pointer`}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${mode.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <mode.icon className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="text-white font-bold mb-1 text-sm">{mode.title}</h5>
                      <p className="text-text-secondary text-xs">{mode.details}</p>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured: Teamfight Simulation */}
        <div className="mt-16">
          <Card className="glass-card border-red-500/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Visual */}
                <div className="relative bg-gradient-to-br from-red-900/20 via-orange-900/10 to-transparent p-8">
                  <div className="relative">
                    {/* Simulated Teamfight Interface */}
                    <div className="bg-gray-900/90 rounded-xl border-2 border-red-500/30 p-6 shadow-2xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <Swords className="w-8 h-8 text-red-400" />
                          <div>
                            <h4 className="text-white font-bold">ESCENARIO 1/3</h4>
                            <p className="text-sm text-gray-400">Simulación de Teamfight</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                        <p className="text-white text-sm leading-relaxed">
                          Estás defendiendo tu base en desventaja. El Lion enemigo acaba de usar su Finger of Death en tu tanque.
                          El carry enemigo, un Phantom Assassin, salta sobre tu support en la retaguardia.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full bg-green-900/30 hover:bg-green-900/50 border border-green-500/40 rounded-lg p-3 text-left transition-all duration-200 group">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold">1</span>
                            </div>
                            <p className="text-white text-sm">Usar todos los stuns en Phantom Assassin para salvar al support</p>
                          </div>
                        </button>

                        <button className="w-full bg-gray-800/30 hover:bg-gray-800/50 border border-gray-600/40 rounded-lg p-3 text-left transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gray-600/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-gray-400 font-bold">2</span>
                            </div>
                            <p className="text-gray-300 text-sm">Ignorar al support y enfocarse en matar al Lion vulnerable</p>
                          </div>
                        </button>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                          <span className="font-mono font-bold">5s</span>
                        </div>
                        <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                          Saltar
                        </Button>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                          Continuar
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right: Info */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Simulación de Teamfight</h3>
                  <p className="text-text-secondary mb-6">
                    Enfrenta escenarios de teamfight realistas donde cada decisión cuenta. Aprende cuándo pelear,
                    cuándo retirarte y cómo priorizar objetivos bajo presión.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Swords className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Decisiones en Tiempo Real</p>
                        <p className="text-sm text-text-secondary">
                          Responde rápido a situaciones de combate complejas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Brain className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Feedback Inmediato</p>
                        <p className="text-sm text-text-secondary">
                          Aprende de tus errores con análisis instantáneo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Escenarios Adaptativos</p>
                        <p className="text-sm text-text-secondary">
                          La dificultad se ajusta a tu nivel de habilidad
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-8 btn-hero">
                    <Play className="w-5 h-5 mr-2" />
                    Probar Simulación
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-neon-green/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <UsersIcon className="w-12 h-12 mx-auto mb-4 text-neon-green" />
              <h3 className="text-2xl font-bold text-white mb-3">Mapas Creados por la Comunidad</h3>
              <p className="text-text-secondary mb-6">
                Accede a cientos de mapas personalizados creados por jugadores para jugadores que desean entrenar drills avanzados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticeModesSection;
