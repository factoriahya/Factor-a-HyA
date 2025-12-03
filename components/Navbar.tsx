import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Flame } from 'lucide-react';
import { BRAND } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Ubicación', id: 'ubicacion' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg py-3' : 'bg-primary py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 text-white font-heading font-black text-xl md:text-2xl cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <Flame className="w-8 h-8 text-cta animate-pulse" />
            <span className="tracking-tight">FACTORÍA H&A</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-cta font-medium transition-colors uppercase text-sm tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <a 
              href={`tel:${BRAND.phone.replace(/\s/g, '')}`} 
              className="bg-cta hover:bg-ctaHover text-white px-6 py-2 rounded-full font-bold flex items-center space-x-2 transition-transform hover:-translate-y-1 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>{BRAND.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-x-0 bg-primary/95 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out border-t border-white/10 ${
          isOpen ? 'top-[70px] opacity-100 visible' : '-top-full opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white text-lg font-bold uppercase tracking-wide py-3 border-b border-white/10 hover:text-cta hover:pl-2 transition-all text-left"
            >
              {item.label}
            </button>
          ))}
          <a 
             href={`https://wa.me/${BRAND.whatsapp}?text=Hola,%20quisiera%20cotizar%20un%20servicio.`}
             target="_blank"
             rel="noopener noreferrer"
             className="w-full bg-cta text-white py-4 rounded-xl font-bold text-center mt-4 shadow-lg uppercase"
          >
            Cotizar WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;