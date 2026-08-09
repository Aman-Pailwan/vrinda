import React, { useState } from 'react';
import { 
  X, Flame, Sparkles, MessageCircle, ShoppingBag, 
  Layers, Package, Info, CheckCircle2
} from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart, isAdded }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const message = `Hi Vrinda! I am interested in inquiring about your product:
*Product:* ${product.name}
*Quantity:* ${quantity}
*Category:* ${product.category}
*Burn Time:* ${product.burnTime}
*Dimensions:* ${product.dimensions}

Could you please share availability and details?`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Window */}
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#EBE4DA] my-8 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#2C2A29] shadow-md border border-[#EBE4DA] transition-transform hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Section: Image Showcase */}
        <div className="md:w-1/2 bg-[#FAF7F2] relative min-h-[300px] md:min-h-full flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-md border border-[#EBE4DA]"
          />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
            <span className="badge-rose shadow-md text-xs py-1 px-3">
              {product.scentFamily}
            </span>
            <span className="bg-white/90 backdrop-blur-md text-[#2C2A29] text-xs font-bold px-3 py-1 rounded-full shadow-md border border-[#EBE4DA]">
              {product.category}
            </span>
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh] md:max-h-none space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Handcrafted Soy & Beeswax
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2A29] leading-snug">
              {product.name}
            </h2>

            <p className="text-xs sm:text-sm text-[#605B56] leading-relaxed font-light">
              {product.description}
            </p>

            {/* Scent Pyramid Card */}
            <div className="scent-pyramid-card">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#A4813C] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Fragrance Pyramid
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-white/80 p-2.5 rounded-xl border border-[#EBE4DA]">
                  <span className="text-[10px] text-[#9E4770] font-bold block uppercase">Top Notes</span>
                  <span className="font-medium text-[#2C2A29] leading-tight block mt-1">{product.fragrancePyramid.top}</span>
                </div>

                <div className="bg-white/80 p-2.5 rounded-xl border border-[#EBE4DA]">
                  <span className="text-[10px] text-[#C5A059] font-bold block uppercase">Heart Notes</span>
                  <span className="font-medium text-[#2C2A29] leading-tight block mt-1">{product.fragrancePyramid.heart}</span>
                </div>

                <div className="bg-white/80 p-2.5 rounded-xl border border-[#EBE4DA]">
                  <span className="text-[10px] text-[#605B56] font-bold block uppercase">Base Notes</span>
                  <span className="font-medium text-[#2C2A29] leading-tight block mt-1">{product.fragrancePyramid.base}</span>
                </div>
              </div>
            </div>

            {/* Tech Specs Cards Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="spec-card">
                <Layers className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8781] block text-[10px] uppercase font-semibold">Materials</span>
                  <span className="font-medium text-[#2C2A29] leading-tight block mt-0.5">{product.materials}</span>
                </div>
              </div>

              <div className="spec-card">
                <Package className="w-4 h-4 text-[#9E4770] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8781] block text-[10px] uppercase font-semibold">Specs</span>
                  <span className="font-medium text-[#2C2A29] leading-tight block mt-0.5">{product.burnTime} • {product.weight}</span>
                </div>
              </div>
            </div>

            {/* Candle Care Tip */}
            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EBE4DA] text-xs text-[#605B56] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Trim cotton wick to 1/4 inch before lighting for a clean burn.</span>
            </div>

          </div>

          {/* Action Footer: Quantity & Direct Buttons */}
          <div className="pt-4 border-t border-[#EBE4DA] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#2C2A29]">Quantity:</span>
              <div className="flex items-center border border-[#EBE4DA] rounded-lg overflow-hidden bg-[#FAF7F2]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm font-bold text-[#605B56] hover:bg-[#EBE4DA]"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-bold text-[#2C2A29] bg-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm font-bold text-[#605B56] hover:bg-[#EBE4DA]"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleWhatsAppOrder}
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Inquire via WhatsApp
              </button>

              <button
                onClick={() => {
                  onAddToCart(product, quantity);
                  onClose();
                }}
                className={`py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#C5A059] hover:bg-[#A4813C] text-white shadow-md'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {isAdded ? 'Added to List' : 'Add to Inquiry List'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
