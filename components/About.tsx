import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="sobre" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop" 
              alt="Consultório moderno e aconchegante" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-400 rounded-2xl z-0 hidden md:block"></div>
        </div>

        <div>
          <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            Sobre Nós
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-950 mb-6">
            Mais que tratamentos, <br/> cuidamos de <span className="italic text-primary-800">pessoas</span>.
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Desde a nossa fundação, a DT Odontologia Integrada tem um propósito claro: acabar com o medo de ir ao dentista. Acreditamos que a saúde bucal pode ser conquistada com leveza, sem dor e com muita transparência.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Nossa clínica é equipada com o que há de mais moderno, mas nosso maior diferencial é humano. Aqui, você é ouvido, respeitado e tratado com a gentileza que merece.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Especialistas em pacientes com fobia",
              "Protocolos rigorosos de biossegurança",
              "Atendimento desde 2017 com excelência",
              "Ambiente climatizado e relaxante"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-primary-900 font-medium">
                <CheckCircle2 className="text-gold-500" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <a href="#contato">
            <Button>Conheça nossa estrutura</Button>
          </a>
        </div>
      </div>
    </Section>
  );
};