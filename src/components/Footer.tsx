import { Github, Twitter, MessageCircle, Youtube, Instagram } from 'lucide-react';
import legendsLogo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary/50 backdrop-blur-md border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={legendsLogo} alt="Legends" className="h-10 w-auto" />
              <span className="font-orbitron font-bold text-xl">LEGENDS</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              La plataforma de planes de entrenamiento personalizado con IA más avanzada de LATAM. 
              Transformamos jugadores promedio en <strong>LEGENDAS</strong>.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-green/20 hover:text-neon-green transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-purple/20 hover:text-neon-purple transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-neon-yellow/20 hover:text-neon-yellow transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Producto Column */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-neon-green">Producto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-text-secondary hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-text-secondary hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#dashboard" className="text-text-secondary hover:text-white transition-colors">Dashboard Demo</a></li>
              <li><a href="#roadmap" className="text-text-secondary hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#api" className="text-text-secondary hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#changelog" className="text-text-secondary hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Compañía Column */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-neon-cyan">Compañía</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-text-secondary hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#blog" className="text-text-secondary hover:text-white transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-text-secondary hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#press" className="text-text-secondary hover:text-white transition-colors">Prensa</a></li>
              <li><a href="#partners" className="text-text-secondary hover:text-white transition-colors">Partners</a></li>
              <li><a href="#investors" className="text-text-secondary hover:text-white transition-colors">Inversionistas</a></li>
            </ul>
          </div>

          {/* Soporte Column */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-neon-purple">Soporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#faq" className="text-text-secondary hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#discord" className="text-text-secondary hover:text-white transition-colors">Discord Community</a></li>
              <li><a href="#tutorials" className="text-text-secondary hover:text-white transition-colors">Tutoriales</a></li>
              <li><a href="#status" className="text-text-secondary hover:text-white transition-colors">Status</a></li>
              <li>
                <a href="mailto:contact@legendslatam.com" className="text-text-secondary hover:text-white transition-colors">
                  contact@legendslatam.com
                </a>
              </li>
              <li>
                <a href="#whatsapp" className="text-text-secondary hover:text-white transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
            <a href="#terms" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#privacy" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#cookies" className="hover:text-white transition-colors">Política de Cookies</a>
            <a href="#dmca" className="hover:text-white transition-colors">DMCA</a>
            <a href="#refund" className="hover:text-white transition-colors">Política de Reembolso</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-text-muted">
              © {new Date().getFullYear()} Legends. Hecho por Gamers 💚 para gamers LATAM.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-xs text-text-muted">
              <div className="w-4 h-4 bg-neon-green rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <span>SSL Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <div className="w-4 h-4 bg-neon-cyan rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <div className="w-4 h-4 bg-neon-purple rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <div className="w-4 h-4 bg-neon-yellow rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <span>99.9% Uptime</span>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>

    </footer>
  );
};

export default Footer;