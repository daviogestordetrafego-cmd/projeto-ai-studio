
import React from 'react';
import { CATEGORIES } from '../constants';

const CategorySection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="serif-title text-5xl md:text-6xl mb-4 text-primary">Categorias em Destaque</h2>
        <div className="w-20 h-1 bg-vibrant-purple mx-auto mb-6 rounded-full"></div>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light tracking-wide">
          Encontre a joia que ressoa com a sua alma e amplifica sua energia vital.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, index) => (
          <div 
            key={cat.id} 
            className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-out"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-[400px] overflow-hidden m-4 rounded-xl relative">
              <img 
                src={cat.imageUrl} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
            </div>
            
            <div className="p-8 text-center flex flex-col items-center flex-grow">
              <h3 className="serif-title text-4xl mb-3 text-primary group-hover:text-vibrant-purple transition-colors">
                {cat.name}
              </h3>
              <p className="text-[11px] text-gray-400 mb-8 font-semibold uppercase tracking-[0.2em] leading-relaxed max-w-[200px]">
                {cat.description}
              </p>
              
              <button className="mt-auto px-12 py-3 border border-gray-200 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-full text-xs font-bold uppercase tracking-widest">
                EXPLORAR
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
