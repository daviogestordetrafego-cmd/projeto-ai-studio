
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HIGHLIGHT_PRODUCTS, BEST_SELLERS, CHAKRA_COLLECTION, PROTECTION_COLLECTION } from '../constants';
import { Product } from '../types';

interface ProductDetailsProps {
  addToCart: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('60g');

  useEffect(() => {
    const allProducts = [...HIGHLIGHT_PRODUCTS, ...BEST_SELLERS, ...CHAKRA_COLLECTION, ...PROTECTION_COLLECTION];
    const found = allProducts.find(p => p.id === id);
    if (found) {
      setProduct(found);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light">
        <p className="text-primary font-display text-2xl animate-pulse">Sintonizando energia...</p>
      </div>
    );
  }

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleMagicBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Dispara o evento mágico global
    const event = new CustomEvent('triggerMagic', { 
      detail: { x: centerX, y: centerY } 
    });
    window.dispatchEvent(event);
    
    // Adiciona ao carrinho após um pequeno delay para a mágica começar
    setTimeout(addToCart, 100);
  };

  const reviews = [
    { id: 1, user: "Ana Clara M.", date: "15 de Outubro, 2024", rating: 5, comment: "Absolutamente fascinada! O acabamento é impecável e a energia da pedra é palpável. Sinto-me muito mais centrada desde que comecei a usar." },
    { id: 2, user: "Ricardo J.", date: "02 de Novembro, 2024", rating: 4, comment: "Peça muito elegante. O envio foi rápido e a embalagem demonstra um cuidado raro. Vale cada centavo pela qualidade." },
    { id: 3, user: "Mariana Costa", date: "20 de Novembro, 2024", rating: 5, comment: "Superou todas as minhas expectativas. É meu novo amuleto diário. Recebo elogios constantes e sinto uma paz incrível." }
  ];

  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-28 pb-12 animate-in fade-in duration-700">
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Breadcrumb e Retorno */}
        <div className="mb-8">
          <Link to="/" className="text-gray-400 hover:text-primary flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all group">
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Voltar para Coleções
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-24">
          
          {/* Lado Esquerdo: Galeria de Imagens - Sticky apenas em Desktop (lg) */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-32 relative">
            <div className="relative group rounded-[40px] overflow-hidden bg-white border border-soft-lilac/30 aspect-square flex items-center justify-center p-8 lg:p-12 shadow-sm hover:shadow-2xl transition-all duration-700">
              <img 
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-1000 ease-out" 
                src={product.imageUrl} 
                alt={product.name} 
              />
              
              <button className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary shadow-lg flex items-center justify-center text-white hover:bg-accent transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className={`min-w-[90px] lg:min-w-[110px] h-[90px] lg:h-[110px] rounded-3xl overflow-hidden border-2 cursor-pointer transition-all p-2 bg-white ${i === 1 ? 'border-accent shadow-md' : 'border-transparent hover:border-accent/50 opacity-60 hover:opacity-100'}`}
                >
                  <img 
                    className="w-full h-full object-contain" 
                    src={product.imageUrl} 
                    alt={`Ângulo ${i}`} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Informações e Compra */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1 bg-accent/10 rounded-full">{product.category}</span>
                {product.inStock && (
                  <span className="flex items-center gap-1.5 text-green-600 text-[10px] font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Em Estoque
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-none serif-title italic">
                {product.name}
              </h1>

              {/* Avaliações e Estrelas */}
              <div className="flex flex-wrap items-center gap-3 py-2">
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className={`material-symbols-outlined text-xl ${s <= (product.rating || 5) ? 'fill-current' : 'opacity-30'}`}>star</span>
                  ))}
                </div>
                <span className="text-sm font-black text-primary/80">{product.rating}</span>
                <span className="text-xs text-gray-400 border-l border-gray-200 pl-3 font-medium tracking-wide">({product.reviewsCount} Avaliações)</span>
              </div>

              {/* Preço */}
              <div className="flex items-center gap-5 pt-2">
                <span className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">R${product.price},00</span>
                {product.isSale && (
                  <span className="text-xl md:text-2xl line-through text-gray-300 font-light italic">R${product.originalPrice},00</span>
                )}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6">
                {[
                  { icon: 'local_shipping', title: 'Frete Grátis', desc: 'Em todo o Brasil' },
                  { icon: 'verified', title: 'Pedras Naturais', desc: 'Certificadas' },
                  { icon: 'history_edu', title: 'Feito à Mão', desc: 'Joalheria Artesanal' }
                ].map((info, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-soft-lilac shadow-sm">
                    <span className="material-symbols-outlined text-accent text-2xl">{info.icon}</span>
                    <div className="flex flex-col">
                      <h5 className="font-bold text-primary text-[9px] uppercase tracking-widest leading-tight">{info.title}</h5>
                      <p className="text-[8px] text-gray-400 font-medium leading-tight">{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Descrição Curta */}
              <div className="py-8">
                 <h3 className="text-xs font-black uppercase tracking-widest text-primary/40 mb-4">Essência Energética</h3>
                 <p className="text-gray-500 text-lg leading-relaxed font-light italic border-l-2 border-accent/30 pl-6">
                  {product.description}
                </p>
              </div>

              {/* Seletor de Opções */}
              <div className="space-y-4">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Selecione a Variação</p>
                <div className="flex flex-wrap gap-3">
                  {['30g', '60g', '80g', '100g'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 lg:px-8 py-3 rounded-2xl text-[10px] font-bold transition-all border-2 ${selectedSize === size ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105' : 'bg-white text-gray-400 border-gray-100 hover:border-accent'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantidade e Botões de Compra */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
                <div className="flex items-center justify-between w-full sm:w-auto bg-soft-lilac/30 rounded-2xl px-5 py-3 border border-soft-lilac h-[56px]">
                  <button onClick={handleDecrement} className="text-primary hover:text-accent p-1 transition-colors">
                    <span className="material-symbols-outlined text-lg">remove</span>
                  </button>
                  <span className="w-12 text-center text-sm font-black text-primary">{quantity}</span>
                  <button onClick={handleIncrement} className="text-primary hover:text-accent p-1 transition-colors">
                    <span className="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>

                <button 
                  onClick={handleMagicBuy}
                  className="w-full sm:flex-1 bg-primary text-white h-[56px] rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-deep-lilac transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  Adicionar
                </button>

                <button 
                  id="buy-btn"
                  onClick={handleMagicBuy}
                  className="magic-button w-full sm:flex-1 h-[56px]"
                >
                  Comprar Agora
                </button>
              </div>

              {/* Dados Técnicos */}
              <div className="pt-8 border-t border-soft-lilac/50 space-y-3">
                 <div className="flex justify-between text-[10px]">
                    <span className="font-bold text-gray-400 uppercase tracking-widest">SKU:</span>
                    <span className="text-primary font-bold">{product.sku}</span>
                 </div>
                 <div className="flex justify-between text-[10px]">
                    <span className="font-bold text-gray-400 uppercase tracking-widest">Tags:</span>
                    <span className="text-primary font-medium">{product.tags?.join(', ')}</span>
                 </div>
                 <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Compartilhar luz:</span>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-lg text-primary/40 cursor-pointer hover:text-accent transition-colors">share</span>
                        <span className="material-symbols-outlined text-lg text-primary/40 cursor-pointer hover:text-accent transition-colors">favorite</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco Azul-Arroxeado: Consciência Elemental */}
        <section className="mb-24">
          <div className="bg-primary rounded-[60px] lg:rounded-[80px] p-10 md:p-16 lg:p-24 sacred-geometry relative overflow-hidden shadow-2xl shadow-primary/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[120px] rounded-full"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="text-white">
                <span className="text-accent font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Manual do Elemento</span>
                <h2 className="serif-title text-4xl md:text-5xl lg:text-7xl mb-8 lg:mb-12 italic leading-tight">Consciência <br />Elemental</h2>
                <div className="space-y-8 lg:space-y-10">
                  {[
                    { title: 'Purificação do Campo', icon: 'auto_awesome', text: 'Esta peça atua como um filtro vibracional, transmutando pensamentos densos em clareza espiritual imediata.' },
                    { title: 'Conexão Telúrica', icon: 'spa', text: 'Sua estrutura mineral alinha seu chakra base com a energia da Terra, promovendo foco e realização material.' },
                    { title: 'Escudo Protetor', icon: 'self_improvement', text: 'Cria uma barreira de luz ao redor do usuário, impedindo o vampirismo energético e influências externas negativas.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 lg:gap-8 group cursor-default">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-700 shadow-xl border border-white/5">
                        <span className="material-symbols-outlined text-xl lg:text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg lg:text-xl mb-2 text-accent italic">{item.title}</h4>
                        <p className="text-white/60 text-sm lg:text-base leading-relaxed font-light">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-2xl border-[10px] lg:border-[15px] border-white/5 transition-all duration-700 group-hover:border-accent/20">
                    <img 
                    className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                    src="https://images.unsplash.com/photo-1569388330292-79cc1ec67270?auto=format&fit=crop&q=80&w=1200" 
                    alt="Ritual de Limpeza" 
                    />
                </div>
                <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-32 h-32 lg:w-40 lg:h-40 bg-accent rounded-full flex items-center justify-center text-primary animate-float shadow-2xl">
                    <span className="material-symbols-outlined text-4xl lg:text-5xl">verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Descrição Detalhada e Avaliações */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 py-16 border-t border-soft-lilac/30">
          
          <div className="lg:col-span-2 space-y-12">
            <div>
                <h2 className="serif-title text-4xl lg:text-5xl text-primary mb-8 italic">A História da Pedra</h2>
                <div className="prose prose-lg text-gray-500 font-light leading-relaxed">
                <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                    Cada exemplar de <strong>{product.name}</strong> carrega consigo milhões de anos de formação geológica. Não entregamos apenas uma semi-joia, entregamos um fragmento consciente da Terra. O processo de curadoria da Namastone envolve a sintonização rádio-estésica de cada cristal, garantindo que sua vibração original não tenha sido corrompida durante o transporte.
                </p>
                <p className="mb-8">
                    Ao usar esta peça, você estabelece um canal direto com o elemento primordial ao qual ela pertence. O banho de metais nobres (ouro ou ródio) atua como condutor térmico e energético, facilitando a troca de informações entre o cristal e o seu sistema de chakras.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-white p-8 rounded-[40px] shadow-sm border border-soft-lilac">
                        <span className="material-symbols-outlined text-accent mb-4 text-3xl">psychology</span>
                        <h4 className="font-bold text-primary mb-2 italic text-lg">Impacto Psíquico</h4>
                        <p className="text-sm">Auxilia na dissipação de névoas mentais e promove a clareza nas intenções de longo prazo.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[40px] shadow-sm border border-soft-lilac">
                        <span className="material-symbols-outlined text-accent mb-4 text-3xl">favorite</span>
                        <h4 className="font-bold text-primary mb-2 italic text-lg">Corpo Energético</h4>
                        <p className="text-sm">Fortalece a aura contra influências externas, mantendo sua frequência em estado de harmonia.</p>
                    </div>
                </div>
                </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="serif-title text-3xl lg:text-4xl text-primary mb-2 italic">Vozes de Cura</h2>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-10">Experiências Reais</p>
              
              <div className="space-y-8">
                {reviews.map((rev) => (
                    <div key={rev.id} className="bg-white p-6 lg:p-8 rounded-[35px] border border-soft-lilac shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                        <h4 className="font-bold text-primary text-base lg:text-lg leading-none mb-1">{rev.user}</h4>
                        <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">{rev.date}</p>
                        </div>
                        <div className="flex text-accent">
                        {[1, 2, 3, 4, 5].map(s => (
                            <span key={s} className={`material-symbols-outlined text-[10px] ${s <= rev.rating ? 'fill-current' : 'opacity-20'}`}>star</span>
                        ))}
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed font-light italic">
                        "{rev.comment}"
                    </p>
                    </div>
                ))}
              </div>

              <div className="pt-10 flex flex-col gap-4">
                <button className="w-full py-4 rounded-full border-2 border-primary text-primary font-black uppercase text-[10px] tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
                    Ver todas
                </button>
                <button className="w-full py-4 rounded-full bg-accent/10 text-accent font-black uppercase text-[10px] tracking-[0.2em] hover:bg-accent hover:text-white transition-all">
                    Depoimento
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ProductDetails;
