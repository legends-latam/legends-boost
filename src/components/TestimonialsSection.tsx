import { Quote, Star, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Carlos M.",
    country: "🇧🇷 Brasil",
    rank: "Guardian II → Cruzado V",
    time: "2 meses",
    quote: "Subí de Guardian II a Cruzado V en 2 meses. El análisis de IA es increíble, me mostró errores que ni sabía que tenía.",
    stats: "+68% winrate",
    avatar: "C",
    stars: 4,
  },
  {
    name: "María G.",
    country: "🇲🇽 México", 
    rank: "Archon III → Legend I",
    time: "6 semanas",
    quote: "Por fin entiendo mis errores de farming. Los drills personalizados son exactamente lo que necesitaba.",
    stats: "+245 MMR",
    avatar: "M",
    stars: 5,
  },
  {
    name: "Juan P.",
    country: "🇵🇪 Perú",
    rank: "Cruzado I → Ancient II",
    time: "3 meses", 
    quote: "El análisis es más detallado que un coach de $100/hora. La comunidad PRO está llena de gente que realmente mejora.",
    stats: "+87% mejora",
    avatar: "J",
    stars: 4,
  },
  {
    name: "Ana R.",
    country: "🇦🇷 Argentina",
    rank: "Herald V → Guardian III",
    time: "45 días",
    quote: "Como mujer gamer, encontré una comunidad que me respeta y me ayuda. Mis friends no pueden creer mi progreso.",
    stats: "+156% KDA",
    avatar: "A",
    stars: 4,
  },
  {
    name: "Diego S.",
    country: "🇨🇴 Colombia",
    rank: "Legend II → Ancient IV",
    time: "8 semanas",
    quote: "Los $9 USD valen cada centavo. Mi team ahora me pide consejos en vez de flamerme. Legends cambió mi gameplay.",
    stats: "+73% winrate",
    avatar: "D",
    stars: 5,
  },
  {
    name: "Isabella F.",
    country: "🇨🇱 Chile",
    rank: "Ancient I → Divine V",
    time: "4 meses",
    quote: "Llegué a Divine gracias a Legends. Ahora estoy considerando competir en torneos. El sueño se hace realidad.",
    stats: "+890 MMR",
    avatar: "I",
    stars: 5,
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
            Historias <span className="text-neon-green">Reales</span> de Transformación
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Más de 15,000 jugadores ya están usando Legends para dominar sus ranks. 
            <span className="text-neon-cyan"> Estas son sus historias.</span>
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${currentIndex}-${index}`}
                className={`glass-card p-8 transition-all duration-500 hover:scale-105 ${
                  index === 1 ? 'md:scale-105 border-neon-green/30' : 'border-white/10'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan flex items-center justify-center text-black font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-text-secondary">{testimonial.country}</div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-neon-cyan" />
                </div>

                {/* Quote */}
                <blockquote className="text-text-secondary mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Progreso:</span>
                    <span className="text-sm font-semibold text-neon-green">{testimonial.rank}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Tiempo:</span>
                    <span className="text-sm font-semibold text-neon-cyan">{testimonial.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Mejora:</span>
                    <span className="text-sm font-semibold text-neon-yellow">{testimonial.stats}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-4 pt-4 border-t border-white/10">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
                  ))}
                  <span className="ml-2 text-sm text-text-secondary">{testimonial.stars}.0</span>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-neon-green' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;