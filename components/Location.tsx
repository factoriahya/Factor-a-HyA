import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { BRAND } from '../constants';

const Location: React.FC = () => {
  return (
    <div className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Column */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <span className="text-cta font-bold uppercase tracking-widest text-sm mb-2 block">Visítanos</span>
              <h2 className="font-heading font-black text-4xl text-dark mb-6">
                Ubicación Estratégica
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                Nos encontramos en el corazón industrial de Espinar, listos para atender emergencias y proyectos de gran envergadura.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg mb-1">Dirección Taller</h4>
                  <p className="text-secondary">{BRAND.address}</p>
                  <p className="text-sm text-cta font-bold mt-2 flex items-center">
                    <Navigation className="w-3 h-3 mr-1" /> Plus Code: {BRAND.plus_code}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-cta/10 p-3 rounded-full text-cta shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg mb-1">Horario de Atención</h4>
                  <p className="text-secondary font-medium">{BRAND.hours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg mb-1">Contacto Directo</h4>
                  <p className="text-secondary text-xl font-bold">{BRAND.phone}</p>
                  <span className="text-xs text-green-600 font-bold uppercase tracking-wide">Llamadas y WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="order-1 lg:order-2 h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
             {/* Using standard google maps embed with query for GPS coordinates */}
             <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=-14.78715780552859,-71.40329781081425&hl=es&z=16&output=embed"
                title="Mapa Factoría H&A Espinar"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
             >
             </iframe>
             <div className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-lg shadow-lg text-xs font-bold text-dark pointer-events-none">
               GPS: -14.7871, -71.4032
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Location;