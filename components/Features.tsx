import React from 'react';
import { Section } from './ui/Section';
import { Feather, ShieldCheck, Heart, Clock, Sparkles, Smile } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: "Mãos Leves e Sem Dor",
    description: "Técnicas modernas de anestesia e delicadeza no toque para garantir seu conforto absoluto.",
    icon: Feather,
  },
  {
    id: 2,
    title: "Atendimento Humanizado",
    description: "Você não é apenas um número. Ouvimos seus medos e explicamos cada passo com paciência.",
    icon: Heart,
  },
  {
    id: 3,
    title: "Explicação Clara",
    description: "Transparência total sobre seu tratamento e orçamento. Sem termos complicados, sem surpresas.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos que garantem diagnósticos precisos e tratamentos mais rápidos.",
    icon: Sparkles,
  },
  {
    id: 5,
    title: "Pontualidade",
    description: "Respeitamos seu tempo. Agendamento inteligente para evitar longas esperas.",
    icon: Clock,
  },
  {
    id: 6,
    title: "Ambiente Acolhedor",
    description: "Um espaço pensado para sua tranquilidade, desde a recepção até a cadeira do dentista.",
    icon: Smile,
  },
];

export const Features: React.FC = () => {
  return (
    <Section id="diferenciais">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 mb-4">
          Por que escolher a <span className="text-gold-600">DT?</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Unimos ciência, arte e empatia para transformar sua experiência com o dentista em algo positivo e transformador.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
          >
            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-900 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
              <feature.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary-950 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};