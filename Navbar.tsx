
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, toggleCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Fecha menu ao mudar de rota
  }, [location]);

  const shouldBeSolid = !isHomePage || isScrolled || isMenuOpen;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${shouldBeSolid ? 'bg-white shadow-md py-3 border-b border-soft-lilac' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className={`text-xl md:text-2xl font-display font-medium flex items-center gap-2 ${shouldBeSolid ? 'text-primary' : 'text-white'}`}>
          <span className="material-symbols-outlined text-2xl md:text-3xl">filter_vintage</span>
          Namastone
        </Link>
        
        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-10 text-sm font-semibold tracking-wide ${shouldBeSolid ? 'text-primary/80' : 'text-white/90'}`}>
          <Link to="/" className="hover:text-accent transition-colors">Início</Link>
          <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-accent">
            Coleções <span className="material-symbols-outlined text-sm">expand_more</span>
          </div>
          <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
        </nav>
        
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={toggleCart}
            className={`flex items-center gap-2 text-sm font-bold ${shouldBeSolid ? 'text-primary' : 'text-white'}`}
          >
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="hidden sm:inline uppercase tracking-widest text-[10px]">Meu Carrinho</span>
            {cartCount > 0 && (
              <span className="bg-accent text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-1 ${shouldBeSolid ? 'text-primary' : 'text-white'}`}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[60px] bg-white z-40 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col p-10 gap-8">
          <Link to="/" className="serif-title text-4xl text-primary border-b border-soft-lilac pb-4">Início</Link>
          <a href="#sobre" className="serif-title text-4xl text-primary border-b border-soft-lilac pb-4" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#categorias" className="serif-title text-4xl text-primary border-b border-soft-lilac pb-4" onClick={() => setIsMenuOpen(false)}>Coleções</a>
          <a href="#contato" className="serif-title text-4xl text-primary border-b border-soft-lilac pb-4" onClick={() => setIsMenuOpen(false)}>Contato</a>
          
          <div className="mt-10 pt-10 border-t border-soft-lilac">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Redes de Luz</p>
            <div className="flex gap-6">
              <span className="material-symbols-outlined text-primary text-3xl">share</span>
              <span className="material-symbols-outlined text-primary text-3xl">star</span>
              <span className="material-symbols-outlined text-primary text-3xl">camera</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
