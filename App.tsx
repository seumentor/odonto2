import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  // Intersection observer logic for global fade-in animations handled in CSS/Components,
  // but we can add a global effect here if needed. 
  // For now, styling is handled in index.html styles and hooks.

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-gold-200 selection:text-primary-900">
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap group-hover:pl-3 font-bold">
          Agendar Agora
        </span>
      </a>
    </main>
  );
};

export default App;