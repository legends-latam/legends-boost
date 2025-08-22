import { useState } from 'react';
import { ChevronDown, Shield, Zap, Globe, Clock, CheckCircle, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo funciona exactamente la IA?",
    answer: "Nuestra IA analiza cada acción en tus replays: movimientos, decisiones, timings, eficiencia. Compara con patrones de jugadores exitosos de tu mismo nivel y rango superior, identificando exactamente dónde pierdes ventaja. Procesamos +50 variables por partida incluyendo GPM, XPM, patrones de muerte, eficiencia de farmeo, positioning en teamfights y mucho más.",
    icon: Zap
  },
  {
    question: "¿Es considerado trampa o me pueden banear?",
    answer: "Absolutamente NO. Analizamos replays públicos que ya están disponibles, no interferimos con el juego en tiempo real. Es exactamente como tener un coach mirando tus partidas grabadas. 100% legal, seguro y permitido por Valve. Más de 15,000 jugadores lo usan sin problemas.",
    icon: Shield
  },
  {
    question: "¿Funciona en servidores SA/Brasil?",
    answer: "Perfectamente. Tenemos servidores locales en São Paulo, Ciudad de México y Buenos Aires. Latencia <30ms garantizada. Soporte completo para español y português brasileño. Precios optimizados para economías LATAM y métodos de pago locales como PIX, OXXO Pay y MercadoPago.",
    icon: Globe
  },
  {
    question: "¿Puedo pausar o cancelar cuando quiera?",
    answer: "Cuando quieras, sin preguntas incómodas. Tu progreso y datos se guardan por 6 meses si decides volver. Sin contratos, sin compromisos. Si cancelas, mantienes acceso hasta el final del período pagado. Proceso de cancelación en 1 click desde tu dashboard.",
    icon: Clock
  },
  {
    question: "¿Qué pasa si no mejoro en 30 días?",
    answer: "Si en 30 días no ves mejora medible en tus métricas (MMR, winrate, KDA, GPM, etc.), devolvemos tu dinero completo. Sin letra pequeña, sin excepciones. Nuestra confianza en el sistema es total - 92% de usuarios ven mejoras significativas en las primeras 3 semanas.",
    icon: CheckCircle
  },
  {
    question: "¿Cuánto tiempo necesito para ver resultados?",
    answer: "La mayoría de usuarios ve mejoras en 7-14 días. Resultados típicos: Semana 1: identificación de errores principales. Semana 2-3: corrección de hábitos básicos, +15-25% mejora. Mes 1: progreso sólido medible, muchos suben 1 rank. Mes 2-3: mejoras consistentes, algunos suben 2-3 ranks.",
    icon: HelpCircle
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6">
            Preguntas <span className="text-neon-cyan">Frecuentes</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Las dudas más comunes de jugadores como tú. Si no encuentras tu respuesta, 
            <span className="text-neon-green"> únete a nuestro Discord.</span>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className={`glass-card transition-all duration-300 ${
                    isOpen ? 'border-neon-cyan/50' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isOpen ? 'bg-neon-cyan/20' : 'bg-white/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${isOpen ? 'text-neon-cyan' : 'text-white'}`} />
                      </div>
                      <h3 className={`font-semibold text-lg ${
                        isOpen ? 'text-neon-cyan' : 'text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    <ChevronDown 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-neon-cyan' : 'text-text-muted'
                      }`} 
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <p className="text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-xl mb-4">
              ¿Necesitas Más Ayuda?
            </h3>
            <p className="text-text-secondary mb-6">
              Nuestro equipo de soporte está disponible 24/7 para resolver cualquier duda. 
              La comunidad Legends también está llena de jugadores dispuestos a ayudar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Únete a Discord
              </button>
              <button className="btn-secondary">
                WhatsApp Support
              </button>
            </div>
            
            <div className="mt-6 text-sm text-text-muted">
              <p>Email: contact@legendslatam.com</p>
              <p>Tiempo de respuesta promedio: 2 horas</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <Shield className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <h4 className="font-semibold mb-2">100% Seguro</h4>
              <p className="text-sm text-text-secondary">
                Datos encriptados y servidores certificados
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <CheckCircle className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Garantía Real</h4>
              <p className="text-sm text-text-secondary">
                30 días sin preguntas, dinero de vuelta
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <Globe className="w-8 h-8 text-neon-purple mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Soporte LATAM</h4>
              <p className="text-sm text-text-secondary">
                Equipo nativo en español y português
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;