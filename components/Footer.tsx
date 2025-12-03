import React from 'react';
import { BRAND } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-white font-heading font-bold text-xl mb-1">{BRAND.name}</h3>
          <p className="text-sm">Espinar, Cusco, Perú</p>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Factoría H&A. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;