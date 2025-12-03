import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-28 pb-48 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/Y2NcKJgK/Whats_App_Image_2025_12_02_at_6_30_48_PM.jpg"
          alt="Soldadura industrial en Espinar" 
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center space-x-2 bg-cta/90 px-4 py-1 rounded-full mb-6 animate-pulse">
          <Flame className="w-5 h-5" />
          <span className="font-bold uppercase tracking-wider text-sm">Expertos en Soldadura y Metal Mecánica</span>
        </div>
        
        <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 drop-shadow-2xl max-w-6xl mx-auto">
          Somos especialistas en <br className="hidden lg:block"/>
          <span className="text-cta">Diseño, Fabricación y Mantenimiento</span>
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Más de 9 años de precisión, fuerza y mantenimiento especializado en estructuras para minería e industria.
          <br />
          <span className="text-cta font-bold mt-2 block">{BRAND.hours}</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href={`https://wa.me/${BRAND.whatsapp}?text=Hola%20Factoria%20H%26A,%20necesito%20una%20cotizaci%C3%B3n.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-cta hover:bg-ctaHover text-white text-lg font-bold py-4 px-10 rounded-full shadow-[0_10px_20px_rgba(243,117,33,0.3)] transition-all transform hover:-translate-y-1 flex items-center"
          >
            <span>📱 Cotizar WhatsApp</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button 
            onClick={() => {
                document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-lg font-bold py-3.5 px-10 rounded-full transition-all flex items-center"
          >
            Nuestros Servicios
          </button>
        </div>
      </div>
      
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-gray-50">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="opacity-100"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;