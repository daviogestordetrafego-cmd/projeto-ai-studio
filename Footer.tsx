
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 lg:pt-24 pb-12 border-t border-soft-lilac">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20 lg:mb-24">
          <div className="sm:col-span-2 lg:col-span-2">
            <a className="text-2xl lg:text-3xl font-display font-bold text-primary flex items-center gap-3 mb-8 lg:mb-10" href="#">
              <span className="material-symbols-outlined text-3xl lg:text-4xl">filter_vintage</span>
              Namastone
            </a>
            <p className="text-gray-500 max-w-sm mb-10 lg:mb-12 text-base lg:text-lg leading-relaxed font-light">
              Curadoria de semi-joias energéticas focadas na sua proteção espiritual e bem-estar diário. Peças que contam histórias de cura e luz.
            </p>
            <div className="flex gap-4 lg:gap-5">
              {['camera', 'share', 'star'].map(icon => (
                <a key={icon} className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-soft-lilac flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-sm" href="#">
                  <span className="material-symbols-outlined text-xl lg:text-2xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold uppercase text-[10px] lg:text-xs tracking-[0.3em] mb-6 lg:mb-10 text-primary opacity-60">Institucional</h4>
            <ul className="space-y-4 lg:space-y-5 text-gray-500 font-medium text-sm lg:text-base">
              <li><a className="hover:text-vibrant-purple transition-colors" href="#">Nossa História</a></li>
              <li><a className="hover:text-vibrant-purple transition-colors" href="#">Propósitos e Valores</a></li>
              <li className="hidden sm:block"><a className="hover:text-vibrant-purple transition-colors" href="#">Políticas de Privacidade</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold uppercase text-[10px] lg:text-xs tracking-[0.3em] mb-6 lg:mb-10 text-primary opacity-60">Coleções</h4>
            <ul className="space-y-4 lg:space-y-5 text-gray-500 font-medium text-sm lg:text-base">
              <li><a className="hover:text-vibrant-purple transition-colors" href="#">Proteção Áurica</a></li>
              <li><a className="hover:text-vibrant-purple transition-colors" href="#">Chakras</a></li>
              <li className="hidden sm:block"><a className="hover:text-vibrant-purple transition-colors" href="#">Lançamentos</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold uppercase text-[10px] lg:text-xs tracking-[0.3em] mb-6 lg:mb-10 text-primary opacity-60">Ajuda</h4>
            <ul className="space-y-4 lg:space-y-5 text-gray-500 font-medium text-sm lg:text-base">
              <li><a className="hover:text-vibrant-purple transition-colors" href="#">Entregas</a></li>
              <li><a className="hover:text-vibrant-purple transition-colors" href="#">Trocas</a></li>
              <li><a className="hover:text-vibrant-purple transition-colors" href="#">Fale Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-soft-lilac flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-xs lg:text-sm text-gray-400 font-medium">© 2024 Namastone. Arte e Proteção em cada detalhe.</p>
          <p className="serif-title text-3xl lg:text-4xl text-primary/10 italic select-none hidden lg:block">Gratidão à sua proteção.</p>
          <div className="flex gap-6 lg:gap-8 items-center opacity-40">
            <span className="material-symbols-outlined text-2xl lg:text-3xl">credit_card</span>
            <span className="material-symbols-outlined text-2xl lg:text-3xl">payments</span>
            <span className="material-symbols-outlined text-2xl lg:text-3xl">account_balance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
