import { ArrowRight, X, RefreshCw, CheckCircle, TrendingUp } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
            La <span className="text-neon-red">Frustración</span> Que Todo Gamer Conoce
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Practicas todos los días, ves streams, lees guías... pero sigues estancado. 
            <span className="text-neon-cyan"> Es hora de romper ese ciclo.</span>
          </p>
        </div>

        {/* Three Column Transformation */}
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          
          {/* Column 1: Problem */}
          <div className="glass-card p-8 border-neon-red/30 hover:border-neon-red/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-red/20 flex items-center justify-center">
                <X className="w-8 h-8 text-neon-red" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-neon-red mb-4">SIN LEGENDS</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-neon-red mt-1 flex-shrink-0" />
                <span className="text-text-secondary">Mismo rank por meses</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-neon-red mt-1 flex-shrink-0" />
                <span className="text-text-secondary">Practicas sin dirección</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-neon-red mt-1 flex-shrink-0" />
                <span className="text-text-secondary">No sabes qué mejorar</span>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-neon-red mt-1 flex-shrink-0" />
                <span className="text-text-secondary">Frustración constante</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-neon-red/10 rounded-lg">
              <p className="text-sm text-neon-red font-semibold">
                "Llevo 6 meses en Guardian II... ¿qué estoy haciendo mal?"
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-neon-cyan animate-spin" />
              </div>
              <ArrowRight className="w-8 h-8 text-neon-cyan" />
              <div className="text-center">
                <p className="text-sm font-bold text-neon-cyan">PROCESO LEGENDS</p>
                <p className="text-xs text-text-muted">IA + Datos = Resultados</p>
              </div>
              <ArrowRight className="w-8 h-8 text-neon-cyan" />
            </div>
          </div>

          {/* Column 3: Solution */}
          <div className="glass-card p-8 border-neon-green/30 hover:border-neon-green/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-green/20 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-neon-green mb-4">TU TRANSFORMACIÓN</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <span className="text-text-secondary">Subes de rank consistentemente</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <span className="text-text-secondary">Mejoras métricas clave</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <span className="text-text-secondary">Ganas más partidas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <span className="text-text-secondary">Disfrutas competir</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-neon-green/10 rounded-lg">
              <p className="text-sm text-neon-green font-semibold">
                "De Guardian a Cruzado en 2 meses. Increíble análisis!"
              </p>
            </div>
          </div>
        </div>

        {/* Progress Chart Visual */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <h4 className="font-orbitron font-bold text-xl text-center mb-8">
              Progresión Típica de Usuarios Legends
            </h4>
            
            <div className="relative h-40">
              {/* Chart Lines */}
              <svg className="w-full h-full" viewBox="0 0 400 160">
                {/* Grid */}
                <defs>
                  <pattern id="grid" width="40" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Stagnation Line */}
                <path
                  d="M 0 100 L 120 95 L 150 100 L 180 105 L 200 100"
                  fill="none"
                  stroke="hsl(var(--neon-red))"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                />
                
                {/* Legends Growth Line */}
                <path
                  d="M 200 100 L 220 90 L 250 75 L 280 60 L 320 45 L 360 30 L 400 20"
                  fill="none"
                  stroke="hsl(var(--neon-green))"
                  strokeWidth="4"
                />
                
                {/* Legends Start Point */}
                <circle cx="200" cy="100" r="6" fill="hsl(var(--neon-cyan))" />
                
                {/* Labels */}
                <text x="100" y="130" fill="hsl(var(--neon-red))" fontSize="12" textAnchor="middle">
                  Sin Legends
                </text>
                <text x="200" y="150" fill="hsl(var(--neon-cyan))" fontSize="12" textAnchor="middle">
                  Starts Legends
                </text>
                <text x="300" y="130" fill="hsl(var(--neon-green))" fontSize="12" textAnchor="middle">
                  Con Legends
                </text>
              </svg>
              
              {/* Rank Labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-text-muted">
                <span>Divine</span>
                <span>Ancient</span>
                <span>Legend</span>
                <span>Crusader</span>
                <span>Guardian</span>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-neon-red rounded" />
                <span className="text-sm text-text-secondary">Progreso tradicional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-neon-green rounded" />
                <span className="text-sm text-text-secondary">Con Legends IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;