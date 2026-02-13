
import React from 'react';
import { IMAGES } from '../constants';

interface ProductHighlightProps {
  addToCart: () => void;
}

const ProductHighlight: React.FC<ProductHighlightProps> = ({ addToCart }) => {
  return (
    <section className="py-24 bg-soft-lilac/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-soft-lilac">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="h-[400px] lg:h-[650px] relative overflow-hidden group">
              <img 
                src={IMAGES.AMETISTA_BANNER} 
                alt="Ametista Imperial" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="p-10 lg:p-20 flex flex-col justify-center">
              <span className="bg-vibrant-purple text-white px-6 py-2 rounded-full text-xs uppercase tracking-[0.3em] font-bold mb-8 w-fit shadow-md">
                Novo Lançamento
              </span>
              <h3 className="serif-title text-5xl lg:text-7xl mb-8 text-primary leading-tight">
                Ametista Imperial
              </h3>
              <p className="text-gray-600 text-lg lg:text-xl mb-12 leading-relaxed font-light">
                Uma obra-prima da natureza esculpida para a eternidade. Esta ametista selecionada a dedo é banhada em ouro 18k, criando uma ponte entre o terreno e o divino. Sinta a vibração da transmutação em sua forma mais pura.
              </p>
              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={addToCart}
                  className="purple-gradient text-white px-12 py-5 rounded-full font-bold hover:shadow-xl hover:shadow-vibrant-purple/30 transition-all text-lg uppercase tracking-wider"
                >
                  Garantir a Minha
                </button>
                <button className="px-12 py-5 rounded-full font-bold border-2 border-soft-lilac hover:bg-soft-lilac transition-all text-primary text-lg uppercase tracking-wider">
                  Explorar Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
