import { Brain, BarChart3, Target, Globe, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "🧠 IA Más Inteligente Que Un Coach",
    description: "Analiza +50 variables que ni los pros notan. GPM, XPM, patrones de muerte, eficiencia de farmeo, y mucho más.",
    gradient: "from-neon-purple to-neon-cyan"
  },
  {
    icon: BarChart3,
    title: "📊 Dashboard Que Habla Tu Idioma",
    description: "Visualiza tu progreso real con métricas que importan. Sin información basura, solo lo que necesitas mejorar.",
    gradient: "from-neon-cyan to-neon-green"
  },
  {
    icon: Target,
    title: "🎯 Entrenamiento 100% Personalizado",
    description: "Drills específicos para TUS debilidades. Si fallas en teamfights, practicas teamfights. Simple.",
    gradient: "from-neon-green to-neon-yellow"
  },
  {
    icon: Globe,
    title: "🌎 Hecho Para LATAM, Por LATAM",
    description: "Servidores en São Paulo, Ciudad de México y Buenos Aires. Precios justos, idioma nativo.",
    gradient: "from-neon-yellow to-neon-green"
  },
  {
    icon: Award,
    title: "🏆 Certificaciones Con Valor Real",
    description: "Valida tus habilidades con badges verificables. Muestra tu progreso a equipos y patrocinadores.",
    gradient: "from-neon-green to-neon-cyan"
  },
  {
    icon: Users,
    title: "👥 Comunidad Que Te Entiende",
    description: "15,000+ jugadores latinos mejorando juntos. Encuentra duo, equipo, o simplemente apoyo.",
    gradient: "from-neon-cyan to-neon-purple"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
            Features Que <span className="text-neon-green">Realmente Importan</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            No es magia, es tecnología avanzada diseñada específicamente para 
            jugadores competitivos de LATAM.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 group hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5`}>
                    <div className="w-full h-full bg-bg-secondary rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Floating glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="font-orbitron font-bold text-xl mb-4 text-white group-hover:text-glow transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-500 rounded-full`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl mb-4">
              ¿Listo Para Ver La Diferencia?
            </h3>
            <p className="text-text-secondary mb-6">
              Más de 15,000 jugadores ya están usando estas herramientas para dominar sus ranks.
            </p>
            <button className="btn-hero">
              PROBAR LEGENDS GRATIS
            </button>
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-orbitron font-bold text-2xl mb-4">
              Tecnología De <span className="text-neon-cyan">Vanguardia</span>
            </h3>
            <p className="text-text-secondary">
              Nuestros algoritmos procesan millones de datos cada minuto
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-neon-green mb-2">10M+</div>
              <div className="text-sm text-text-secondary">Partidas Analizadas</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-neon-cyan mb-2">50+</div>
              <div className="text-sm text-text-secondary">Variables por Match</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-neon-purple mb-2">24/7</div>
              <div className="text-sm text-text-secondary">Análisis en Tiempo Real</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-neon-yellow mb-2">99.9%</div>
              <div className="text-sm text-text-secondary">Uptime Garantizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;