import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'A Clínica', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
            DT<span className="text-gold-500">.</span>
          </div>
          <span className={`hidden md:block text-sm tracking-widest uppercase ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
            Odontologia Integrada
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide hover:text-gold-500 transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contato"
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${
              isScrolled 
                ? 'bg-primary-900 text-white hover:bg-primary-800' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
            }`}
          >
            <Phone size={16} />
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#0f172a' : '#ffffff'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 md:hidden flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-lg font-serif text-slate-800 py-2 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contato"
            className="mt-2 w-full bg-gold-500 text-white py-3 rounded-lg font-bold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Avaliação
          </a>
        </div>
      )}
    </header>
  );
};