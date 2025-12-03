import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-cta font-bold uppercase tracking-widest text-sm mb-2 block">Soluciones Integrales</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-dark mb-4">
            Nuestros Servicios <span className="text-primary">Industriales</span>
          </h2>
          <div className="h-1.5 w-24 bg-cta mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-industrial transition-all duration-300 transform hover:-translate-y-2 border-t-8 border-primary"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 bg-cta p-4 rounded-xl shadow-lg transform group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;