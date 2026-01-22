import React from 'react';
import { Section } from './ui/Section';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana S.",
    text: "Simplesmente a melhor dentista que já fui! Tenho trauma de infância e ela conseguiu me deixar super tranquila. Tem mãos de fada, não senti absolutamente nada.",
    rating: 5,
    tags: ["Sem dor", "Mãos de fada"]
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    text: "Profissionalismo impecável. Explica tudo com muita calma antes de fazer qualquer procedimento. O consultório é lindo e a equipe muito atenciosa. Recomendo de olhos fechados.",
    rating: 5,
    tags: ["Transparência", "Confiança"]
  },
  {
    id: 3,
    name: "Fernanda L.",
    text: "Levei meu filho e o atendimento infantil foi excepcional. Muita paciência e carinho. O preço é super justo pela qualidade que oferecem. Cliente fiel desde 2019.",
    rating: 5,
    tags: ["Atendimento Infantil", "Preço Justo"]
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="depoimentos" className="bg-gradient-to-b from-white to-primary-50">
      <div className="text-center mb-16">
        <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2 block">
          Depoimentos Reais
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-950 mb-4">
          O que nossos pacientes dizem
        </h2>
        <div className="flex justify-center items-center gap-2 text-gold-500 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={24} fill="currentColor" />)}
          </div>
          <span className="text-slate-700 font-bold ml-2">5.0 no Google</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative">
            <Quote className="absolute top-6 right-6 text-primary-100" size={48} />
            
            <div className="flex gap-1 text-gold-500 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-slate-700 italic mb-6 leading-relaxed relative z-10">
              "{t.text}"
            </p>
            
            <div>
              <p className="font-bold text-primary-900">{t.name}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {t.tags?.map(tag => (
                  <span key={tag} className="text-xs bg-primary-50 text-primary-800 px-2 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};