import React from 'react';
import { Button } from './ui/Button';
import { Calendar, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2600&auto=format&fit=crop" 
          alt="Sorriso confiante e saudável"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl fade-in-up visible">
          <span className="inline-block py-1 px-3 rounded-full bg-gold-500/20 border border-gold-400/30 text-gold-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Excelência em Odontologia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Seu sorriso merece <br />
            <span className="text-gold-400 italic">cuidado e perfeição.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-xl font-light">
            Experimente uma odontologia humana, ética e sem dor. 
            Tecnologia avançada aliada a mãos leves para devolver sua confiança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato">
              <Button fullWidth className="sm:w-auto h-14 text-lg">
                Agendar Avaliação
              </Button>
            </a>
            <a href="#diferenciais">
              <Button variant="white" fullWidth className="sm:w-auto h-14 text-lg bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20">
                Conheça a Clínica
              </Button>
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-sm text-slate-300">
            <div className="flex -space-x-2">
               <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-primary-900 flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/seed/user1/100/100" alt="Avatar" />
               </div>
               <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-primary-900 flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/seed/user2/100/100" alt="Avatar" />
               </div>
               <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-primary-900 flex items-center justify-center overflow-hidden">
                 <img src="https://picsum.photos/seed/user3/100/100" alt="Avatar" />
               </div>
            </div>
            <p>+500 pacientes satisfeitos e sorrindo.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};