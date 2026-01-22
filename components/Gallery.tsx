import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop",
    alt: "Recepção moderna e acolhedora",
    category: "Nossa Casa"
  },
  {
    url: "https://images.unsplash.com/photo-1609840114035-1c29046a8028?q=80&w=2000&auto=format&fit=crop",
    alt: "Consultório equipado com tecnologia",
    category: "Tecnologia"
  },
  {
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2000&auto=format&fit=crop",
    alt: "Atendimento humanizado",
    category: "Cuidado"
  },
  {
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
    alt: "Procedimentos cuidadosos",
    category: "Procedimentos"
  },
  {
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2000&auto=format&fit=crop",
    alt: "Sorrisos transformados",
    category: "Resultados"
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    alt: "Ambiente relaxante",
    category: "Conforto"
  }
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Section id="galeria" className="bg-white">
      <div className="text-center mb-12">
         <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 mb-4">
            Um ambiente pensado em você
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conheça nossa clínica: moderna, limpa e preparada nos mínimos detalhes para oferecer o máximo conforto e segurança.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((img, idx) => (
          <div 
            key={idx} 
            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(img.url)}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center text-white">
                <ZoomIn size={32} className="mb-2 text-gold-400" />
                <span className="font-serif font-medium tracking-wide text-lg">{img.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-primary-950/95 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Galeria zoom" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </Section>
  );
};