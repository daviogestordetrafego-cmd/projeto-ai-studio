
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, subtitle, products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="animate-fade-in-up">
            <h2 className="serif-title text-5xl md:text-6xl text-primary mb-4">{title}</h2>
            <div className="w-24 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg font-light">{subtitle}</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <Link 
              to={`/product/${product.id}`}
              key={product.id} 
              className="min-w-[280px] md:min-w-[320px] group cursor-pointer flex flex-col snap-start"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#fcfbf9] mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-gray-50">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {product.isSale && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-accent text-white py-2 px-4 rounded-2xl shadow-lg flex flex-col items-center gap-1 border border-white/30 backdrop-blur-sm">
                      <span className="text-[8px] font-black uppercase tracking-widest opacity-80 leading-none">OFERTA</span>
                      <div className="flex flex-col items-center leading-none mt-1">
                         <span className="text-[10px] line-through opacity-60">R${product.originalPrice}</span>
                         <span className="text-[14px] font-black">R${product.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-primary px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                  Sintonizar
                </div>
              </div>
              <h4 className="serif-title text-3xl text-primary mb-2 group-hover:text-accent transition-colors">{product.name}</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-4 font-semibold">{product.category}</p>
              
              <div className="flex items-center gap-3">
                 <p className="text-2xl font-bold text-primary">R$ {product.price},00</p>
                 {product.isSale && (
                    <span className="text-sm line-through text-gray-300 font-light bg-gray-100 px-2 py-0.5 rounded">R$ {product.originalPrice},00</span>
                 )}
              </div>
            </Link>
          ))}
          
          <div className="min-w-[280px] md:min-w-[320px] flex items-center justify-center snap-start">
             <Link 
              to="/" 
              className="w-full aspect-[4/5] border-2 border-dashed border-soft-lilac rounded-3xl flex flex-col items-center justify-center gap-4 group hover:bg-soft-lilac/20 transition-all duration-500"
             >
                <div className="w-16 h-16 rounded-full bg-soft-lilac flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">add</span>
                </div>
                <span className="serif-title text-2xl text-primary">Ver Mais</span>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
