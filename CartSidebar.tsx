
import React from 'react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartCount }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <h2 className="serif-title text-3xl text-primary">Seu Carrinho</h2>
            <button onClick={onClose} className="p-2 hover:bg-soft-lilac rounded-full transition-all">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto">
            {cartCount === 0 ? (
              <div className="text-center py-20 flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-6xl text-soft-lilac">shopping_cart_off</span>
                <p className="text-gray-400 font-medium">Seu carrinho está vazio.</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-vibrant-purple font-bold underline"
                >
                  Continuar Comprando
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-2xl bg-soft-lilac/30 border border-soft-lilac animate-in fade-in slide-in-from-right-4">
                  <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shadow-sm">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq4tX0DGakMfHSguEDznH9gNwYjgZhyqmGYAkBahdtkKDaTY2EBfDDxVFl0fbx8S0nFtsaIUmI9fqRRxYZmee7DDmkNefzcnxVTTTLmnSp8j5ZtHlcWzW_fiWantfTdgwL29D8xDB-gubKfMUKbGCahJGSqfL9wGltYblkFNorfdQGs_lgwcm_MorFS2HBVQtqsKjS1FzgMMoULIe-eDsvhHRo2D7FkSAhcYj3rTy7bwt8V5UUb4TZYKnVFZbPlQrFdsnsap87y17G" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-primary">Ametista Imperial</h4>
                    <p className="text-sm text-gray-500">Curadoria Exclusiva</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-primary">R$ 589,00</span>
                      <div className="flex items-center gap-3">
                        <button className="text-sm border border-soft-lilac px-2 rounded">-</button>
                        <span>1</span>
                        <button className="text-sm border border-soft-lilac px-2 rounded">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-8 border-t border-soft-lilac space-y-4">
            <div className="flex items-center justify-between text-xl font-bold text-primary">
              <span>Total</span>
              <span>R$ {cartCount * 589},00</span>
            </div>
            <button className="w-full purple-gradient text-white py-5 rounded-full font-black uppercase tracking-widest hover:shadow-xl transition-all shadow-lg text-lg">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
