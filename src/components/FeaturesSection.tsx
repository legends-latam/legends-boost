import { Brain, BarChart3, Target, Globe, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "🧠 IA Con precision quirúrjica",
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
  }
];

const FeaturesSection = () => {

  const openDashboard = () => {
    window.location.href = 'https://stephanoapiolaza.github.io/legends-core/';
  }

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
            <button className="btn-hero" onClick={openDashboard} >
              PROBAR LEGENDS GRATIS
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;