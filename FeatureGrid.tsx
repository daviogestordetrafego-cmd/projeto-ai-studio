
import React from 'react';
import { Link } from 'react-router-dom';
import { HIGHLIGHT_PRODUCTS } from '../constants';

interface FeatureGridProps {
  addToCart: () => void;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ addToCart }) => {
  return (
    <section className="relative -mt-20 lg:-mt-32 z-40 px-6 max-w-7xl mx-auto mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {HIGHLIGHT_PRODUCTS.map((product, index) => (
          <Link 
            to={`/product/${product.id}`}
            key={product.id} 
            className="bg-[#fcfbf9] rounded-[30px] lg:rounded-[40px] p-8 lg:p-10 shadow-xl flex flex-col items-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-out border border-white animate-fade-in-up relative h-full"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h3 className="text-2xl lg:text-3xl font-normal text-[#1a1a1a] self-start mb-6 lg:mb-8 tracking-tight font-sans">
              {product.name}
            </h3>
            
            <div className="flex-grow flex items-center justify-center p-4 w-full min-h-[200px] lg:min-h-[250px]">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-48 h-48 lg:w-56 lg:h-56 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
            
            <div 
              className="mt-6 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-[9px] lg:text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 self-start hover:bg-primary transition-all shadow-md"
            >
              Ver mais detalhes
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
