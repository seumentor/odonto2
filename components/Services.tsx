import React from 'react';
import { Section } from './ui/Section';
import { Service } from '../types';
import { Syringe, Sparkles, User, SmilePlus, Microscope, Activity } from 'lucide-react';

const services: Service[] = [
  {
    id: 1,
    title: "Estética Dental",
    description: "Lentes de contato, facetas e clareamento para um sorriso harmonioso e brilhante.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Implantes",
    description: "Recupere a função e a estética com implantes seguros e de aparência natural.",
    icon: User,
  },
  {
    id: 3,
    title: "Ortodontia",
    description: "Alinhadores invisíveis e aparelhos modernos para corrigir sua mordida com discrição.",
    icon: SmilePlus,
  },
  {
    id: 4,
    title: "Endodontia (Canal)",
    description: "Tratamento de canal realizado com microscopia, rapidez e, acima de tudo, sem dor.",
    icon: Microscope,
  },
  {
    id: 5,
    title: "Clínica Geral",
    description: "Prevenção, limpeza profunda e restaurações para manter sua saúde em dia.",
    icon: Activity,
  },
  {
    id: 6,
    title: "Harmonização",
    description: "Procedimentos faciais sutis que valorizam sua beleza natural e moldura do sorriso.",
    icon: Syringe,
  },
];

export const Services: React.FC = () => {
  return (
    <Section id="tratamentos" dark className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gold-400 rounded-full blur-[128px] top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-[128px] bottom-0 right-0"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Tratamentos Completos
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Da prevenção à reabilitação complexa, tudo em um só lugar com o padrão DT de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-primary-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center text-gold-400 mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};