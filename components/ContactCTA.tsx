import React from 'react';
import { Phone, MessageCircle, Map } from 'lucide-react';
import { BRAND } from '../constants';

const ContactCTA: React.FC = () => {
  return (
    <div className="bg-dark py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl text-white mb-8">
          ¿Listo para trabajar? Contáctanos Ahora
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href={`tel:${BRAND.phone.replace(/\s/g, '')}`} 
            className="flex items-center justify-center space-x-3 bg-cta hover:bg-ctaHover text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6" />
            <span>LLAMAR AHORA</span>
          </a>

          <a 
            href={`https://wa.me/${BRAND.whatsapp}?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            <span>WHATSAPP</span>
          </a>

          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${BRAND.gps}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-primary hover:bg-blue-800 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
          >
            <Map className="w-6 h-6" />
            <span>IR CON GPS</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;