
import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CategorySection from '../components/CategorySection';
import ProductHighlight from '../components/ProductHighlight';
import BestSellers from '../components/BestSellers';
import UniquePieces from '../components/UniquePieces';
import Newsletter from '../components/Newsletter';
import ProductCarousel from '../components/ProductCarousel';
import { CHAKRA_COLLECTION, PROTECTION_COLLECTION } from '../constants';

interface LandingPageProps {
  addToCart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ addToCart }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <FeatureGrid addToCart={addToCart} />
      
      <div id="categorias" className="relative">
        <CategorySection />
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex items-center gap-4">
            <h2 className="serif-title text-4xl text-primary/40 uppercase tracking-widest font-light">Produtos</h2>
            <div className="flex-grow h-px bg-soft-lilac"></div>
          </div>
        </div>
      </div>

      {/* 1. Original Best Sellers (Fluxo de Energia) */}
      <BestSellers addToCart={addToCart} />

      {/* 2. New tab below Fluxo de Energia: Chakra Collection */}
      <ProductCarousel 
        title="Harmonia dos Chakras" 
        subtitle="Alinhe seus centros de energia com cristais de alta frequência." 
        products={CHAKRA_COLLECTION} 
      />
      
      {/* 3. New Release highlight (ProductHighlight) */}
      <ProductHighlight addToCart={addToCart} />

      {/* 4. New tab below Novos Lançamentos: Protection Collection */}
      <ProductCarousel 
        title="Escudo e Proteção" 
        subtitle="Peças consagradas para blindar sua aura contra negatividade." 
        products={PROTECTION_COLLECTION} 
      />
      
      <div id="sobre">
        <UniquePieces />
      </div>
      
      <div id="contato">
        <Newsletter />
      </div>
    </div>
  );
};

export default LandingPage;
