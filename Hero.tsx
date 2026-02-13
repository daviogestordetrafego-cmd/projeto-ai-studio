
import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-primary">
      {/* Background Split / Images */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {/* Left Side (Desktop) / Top Side (Mobile) */}
        <div className="w-full lg:w-[50%] h-[50vh] lg:h-full bg-primary sacred-geometry relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <div className="w-[80%] h-[80%] border border-white rounded-full"></div>
             <div className="absolute w-[60%] h-[60%] border border-white rounded-full"></div>
             <div className="absolute w-[100%] h-[100%] border border-white rounded-full scale-150 origin-center opacity-50"></div>
          </div>
        </div>
        
        {/* Right Side (Desktop) / Bottom Side (Mobile) */}
        <div className="w-full lg:w-[50%] h-[50vh] lg:h-full bg-[#f7f3f0] relative">
           <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
              alt="Modelo Joalheria" 
              className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-90 lg:opacity-100"
           />
           <div className="absolute bottom-0 right-0 w-[80%] h-[90%] bg-vibrant-purple/5 rounded-t-full -z-10 translate-x-10"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col lg:flex-row items-center py-24 lg:py-0 h-full lg:min-h-screen">
        <div className="w-full lg:w-1/2 text-white lg:pr-10 animate-fade-in-up text-center lg:text-left mt-auto lg:mt-0 pb-12 lg:pb-0">
          <h1 className="serif-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] font-normal drop-shadow-sm">
            Cada peça é uma <br className="hidden lg:block" />
            armadura energética
          </h1>
          <p className="text-sm md:text-lg font-light mb-10 text-white/70 max-w-sm mx-auto lg:mx-0 leading-relaxed">
            Leve a cura dos cristais para <br className="hidden lg:block" /> seu dia a dia
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <button className="gold-gradient text-primary px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-lg text-xs uppercase tracking-widest">
              Comprar Agora
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-lg text-xs uppercase tracking-widest">
              Explorar Coleções
            </button>
          </div>
        </div>

        {/* Floating Jewelry Box */}
        <div className="relative lg:absolute lg:left-[50%] top-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 w-56 sm:w-72 md:w-[400px] lg:w-[450px] animate-float my-12 lg:my-0">
          <img 
            src={IMAGES.AMETISTA_BANNER} 
            alt="Caixa de Joias" 
            className="w-full drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transform -rotate-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
