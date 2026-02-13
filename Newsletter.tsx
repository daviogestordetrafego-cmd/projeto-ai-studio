
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-deep-lilac rounded-[40px] lg:rounded-[60px] p-10 md:p-20 lg:p-28 text-center relative overflow-hidden shadow-2xl">
        {/* Background decorative icons */}
        <div className="absolute -top-10 -right-10 p-8 text-white/5 select-none pointer-events-none hidden md:block">
          <span className="material-symbols-outlined text-[15rem] lg:text-[20rem]">auto_awesome</span>
        </div>
        <div className="absolute -bottom-10 -left-10 p-8 text-white/5 select-none pointer-events-none hidden md:block">
          <span className="material-symbols-outlined text-[10rem] lg:text-[15rem]">filter_vintage</span>
        </div>

        <div className="relative z-10">
          <div className="mb-8 lg:mb-10 inline-block bg-accent/20 p-4 rounded-full">
            <span className="material-symbols-outlined text-accent text-5xl lg:text-6xl">spa</span>
          </div>
          <h2 className="serif-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 lg:mb-8 text-white px-2">Receba energia exclusiva</h2>
          <p className="text-soft-lilac/70 mb-10 lg:mb-14 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed font-light">
            Junte-se à nossa comunidade espiritual. Receba guias de cristais, rituais de proteção e acesso antecipado.
          </p>
          <form className="flex flex-col md:flex-row gap-4 lg:gap-5 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="w-full flex-1 px-8 lg:px-10 py-5 lg:py-6 rounded-full border-none focus:ring-4 focus:ring-accent/50 bg-white/10 text-white placeholder-soft-lilac/40 backdrop-blur-md shadow-inner text-base lg:text-lg outline-none" 
              placeholder="Seu melhor e-mail" 
              type="email"
            />
            <button className="w-full md:w-auto bg-accent text-primary px-10 lg:px-14 py-5 lg:py-6 rounded-full font-black hover:bg-white hover:text-primary transition-all shadow-xl text-base lg:text-lg uppercase tracking-widest whitespace-nowrap">
              Inscrever-se
            </button>
          </form>
          <p className="text-[10px] lg:text-sm text-soft-lilac/30 mt-8 lg:mt-10 italic tracking-widest px-4">Sua energia está segura conosco. Prometemos apenas luz e cura.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
