import { Github, Twitter, MessageCircle, Youtube, Instagram } from 'lucide-react';
import legendsLogo from '@/assets/logo.png';
import etmDay from '@/assets/etmday.svg';
import hubUnab from '@/assets/hub-unab.png';

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
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-neon-green transition-all">
                <img
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4152ae5860036dadf1_tiktok.svg"
                    loading="lazy" alt="Tiktok" className="image"/>
              </a>
              <a href="#"
                 className="w-8 h-8 flex items-center justify-center hover:text-neon-cyan transition-all">
                <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg" loading="lazy" alt="Twitter" class="image" />
              </a>
              <a href="#" className="w-8 h-8  flex items-center justify-center hover:text-neon-red transition-all">
                <Youtube className="w-8 h-8" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-neon-purple transition-all">
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Producto Column */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-neon-green">Producto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#dashboard" className="text-text-secondary hover:text-white transition-colors">Descarga</a></li>
              <li><a href="#roadmap" className="text-text-secondary hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#api" className="text-text-secondary hover:text-white transition-colors">Legends SDK</a></li>
              <li><a href="#changelog" className="text-text-secondary hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Compañía Column */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-neon-cyan">Compañía</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-text-secondary hover:text-white transition-colors">Nuestro Team</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=+56933251730" className="text-text-secondary hover:text-white transition-colors" target="_blank">Trabaja con nosotros</a></li>
              <li><a href="https://drive.google.com/uc?export=view&id=1PwSDGg2sFamJzQZ4yP9pGczE4A0WVHUX" download className="text-text-secondary hover:text-white transition-colors">Inversionistas</a></li>
            </ul>
          </div>

          {/* Soporte Column */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-neon-purple">Soporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#faq" className="text-text-secondary hover:text-white transition-colors">FAQ</a></li>
              <li>
                <a href="mailto:reclutame@legendslatam.com" className="text-text-secondary hover:text-white transition-colors">
                  reclutame@legendslatam.com
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-text-muted">
              © {new Date().getFullYear()} Legends. Hecho por Gamers 💚 para gamers.
            </div>

            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-xs text-text-muted">
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <img src={etmDay} alt="ETM Day" className="h-10 w-auto" />
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <img src={hubUnab} alt="Hub de Negocios Sostenibles UNAB" className="h-12 w-auto" />
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