import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
        <div>
          <span className="text-cta font-bold uppercase tracking-widest text-sm mb-2 block">Portafolio</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl mb-4">
            Proyectos Recientes
          </h2>
          <p className="text-gray-300 max-w-lg">
            Evidencia de nuestra calidad y compromiso en cada soldadura, estructura y reparación.
          </p>
        </div>
        <div className="hidden md:flex items-center text-cta font-bold animate-pulse">
          Desliza para ver más <ArrowRight className="ml-2 w-5 h-5" />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto space-x-6 px-4 md:px-8 pb-8 scrollbar-hide snap-x">
        {PROJECTS.map((url, index) => (
          <div 
            key={index} 
            className="flex-none w-80 md:w-96 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl relative snap-center group"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all z-10"></div>
            <img 
              src={url} 
              alt={`Proyecto Factoría H&A ${index + 1}`} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
              <span className="bg-cta text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Terminado
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Background Gradient Texture */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-cta/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default Projects;