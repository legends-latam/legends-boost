import { Target, Crosshair, BookOpen, Play, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import heroVideoWebm from "@/assets/training-path.webm";
import heroVideoMp4 from "@/assets/training-path.mp4";

const PersonalizedTrainingSection = () => {
  return (
    <section className="relative py-24 px-0 overflow-hidden bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      {/* Background Effects */}
      <div className="absolute inset-0 hex-grid opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
            <Target className="w-5 h-5 text-neon-green" />
            <span className="text-neon-green font-semibold">Entrenamiento Personalizado</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            Evoluciona con {' '}
            <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
              IA Personalizada
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            No más tutoriales aburridos y guías genéricas. Tu perfil se adapta a tu estilo de juego, rol preferido y objetivos personales.
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Visual Preview */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden hover:border-neon-green transition-all duration-500">
              {/* Simulated Training Path Interface */}
              {/* App Preview with Monitor Frame */}
              <div className="">
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
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Crosshair className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Rutas de Aprendizaje Personalizadas</h3>
                    <p className="text-text-secondary">
                      Cada jugador recibe un camino único basado en su rol principal, nivel actual y áreas de mejora identificadas por nuestra IA.
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
                      <Play className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Escenarios Interactivos</h3>
                    <p className="text-text-secondary">
                      Practica mecánicas específicas en situaciones de juego simuladas. Toma decisiones en tiempo real y recibe feedback instantáneo.
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
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Progreso Verificado</h3>
                    <p className="text-text-secondary">
                      Cada lección está diseñada para enseñar una habilidad específica. Avanza solo cuando domines cada concepto.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Contenido Creado por la Comunidad</h3>
                    <p className="text-text-secondary">
                      Accede a mapas personalizados y desafíos creados por jugadores profesionales y la comunidad de Legends.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PersonalizedTrainingSection;
