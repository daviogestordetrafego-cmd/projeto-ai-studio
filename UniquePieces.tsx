
import React from 'react';
import { IMAGES } from '../constants';

const UniquePieces: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1 text-center lg:text-left">
          <h2 className="serif-title text-4xl sm:text-5xl lg:text-6xl mb-8 lg:mb-10 leading-tight text-primary">
            Peças Únicas,<br />
            <span className="text-vibrant-purple italic font-normal">Energia Autêntica</span>
          </h2>
          <div className="space-y-6 lg:space-y-8 text-gray-500 leading-relaxed text-lg lg:text-xl font-light">
            <p>
              Cada cristal na Namastone é selecionado individualmente por sua vibração energética e pureza estrutural. Não acreditamos em produção em massa, acreditamos em conexão.
            </p>
            <p className="hidden sm:block">
              Nossa curadoria garante que você receba não apenas uma joia, mas um amuleto carregado de intenções positivas e cura natural. Sinta a diferença de usar algo feito para elevar sua frequência.
            </p>
          </div>
          <div className="mt-10 lg:mt-14">
            <button className="purple-gradient text-white px-10 lg:px-14 py-4 lg:py-5 rounded-full font-display text-xl lg:text-2xl hover:scale-105 transition-transform shadow-2xl shadow-vibrant-purple/20">
              Descobrir Coleção
            </button>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4 sm:gap-8 order-1 lg:order-2 px-4 lg:px-0">
          <div className="space-y-8 pt-8 lg:pt-16">
            <div className="rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-3 lg:rotate-6 hover:rotate-0 transition-transform duration-700 border-[6px] lg:border-[12px] border-white ring-1 ring-soft-lilac">
              <img src={IMAGES.UNIQUE_1} alt="Cristal Quartzo" className="w-full h-[250px] sm:h-[450px] object-cover" />
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl transform -rotate-2 lg:-rotate-3 hover:rotate-0 transition-transform duration-700 border-[6px] lg:border-[12px] border-white ring-1 ring-soft-lilac">
              <img src={IMAGES.UNIQUE_2} alt="Anel Esmeralda" className="w-full h-[250px] sm:h-[450px] object-cover" />
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-vibrant-purple/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default UniquePieces;
