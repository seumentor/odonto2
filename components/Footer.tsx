import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold tracking-tighter">
            DT<span className="text-gold-500">.</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-gold-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-gold-500 transition-colors">WhatsApp</a>
          </div>

          <div className="text-sm text-slate-500 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} DT Odontologia Integrada.</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};