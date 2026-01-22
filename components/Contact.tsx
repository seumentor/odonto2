import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contato" className="bg-primary-950" dark>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Pronto para renovar seu sorriso?
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Agende sua avaliação hoje mesmo. Sem compromisso, sem medo e com a certeza de estar em ótimas mãos.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold-400 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Telefone & WhatsApp</h3>
                <p className="text-slate-300">(11) 99999-9999</p>
                <p className="text-slate-400 text-sm mt-1">Atendimento rápido pelo WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Localização</h3>
                <p className="text-slate-300">Av. Principal, 1000 - Centro</p>
                <p className="text-slate-300">São Paulo - SP</p>
                <p className="text-slate-400 text-sm mt-1">Estacionamento no local</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold-400 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Horário</h3>
                <p className="text-slate-300">Segunda a Sexta: 08h às 19h</p>
                <p className="text-slate-300">Sábado: 08h às 13h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl font-serif font-bold text-primary-950 mb-6">
            Solicite um contato
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
              <input 
                type="text" 
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
              <input 
                type="tel" 
                id="phone"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Como podemos ajudar?</label>
              <textarea 
                id="message"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                placeholder="Gostaria de agendar uma limpeza..."
              ></textarea>
            </div>
            <Button fullWidth className="mt-2 text-lg">
              Solicitar Agendamento
            </Button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Nossa equipe entrará em contato em até 1 hora.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};