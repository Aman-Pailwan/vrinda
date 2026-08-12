import React, { useState } from 'react';
import { 
  X, Flame, Sparkles, MessageCircle, ShoppingBag, 
  Layers, Package, CheckCircle2, Palette, Droplets
} from 'lucide-react';
import { FRAGRANCES, AVAILABLE_COLORS, STUDIO_INFO } from '../data/products';

export default function ProductModal({ product, onClose, onAddToCart, isAdded }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedFragrance, setSelectedFragrance] = useState(FRAGRANCES[2].name); // Default Rose
  const [selectedColor, setSelectedColor] = useState(AVAILABLE_COLORS[0].name); // Default Blush Pink

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const message = `Hi Vrinda! I'm interested in ordering:
*Product:* ${product.name}
*Price:* ₹${product.price} ${product.priceLabel ? `(${product.priceLabel})` : ''}
*Quantity:* ${quantity}
*Selected Fragrance:* ${selectedFragrance}
*Preferred Colour:* ${selectedColor}
*Category:* ${product.category}
*Burn Time:* ${product.burnTime}

Could you please share availability and delivery details? Thank you!`;
    
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
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
        <div className="md:w-1/2 bg-[#FAF7F2] relative min-h-[300px] md:min-h-full flex items-center justify-center p-4 sm:p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full max-h-[480px] object-cover rounded-2xl shadow-md border border-[#EBE4DA]"
          />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
            <span className="badge-rose shadow-md text-xs py-1 px-3">
              {product.scentFamily}
            </span>
            {product.isCatalogueOfficial && (
              <span className="bg-[#C5A059] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Official Catalogue Item
              </span>
            )}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh] md:max-h-none space-y-5">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                100% Handcrafted Soy & Beeswax
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C2A29] leading-snug">
              {product.name}
            </h2>

            {/* Price Tag */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-[#C5A059]">
                ₹{product.price}
                {product.priceLabel && <span className="text-xs font-normal text-[#605B56]"> ({product.priceLabel})</span>}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#8E8781] line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#605B56] leading-relaxed font-light">
              {product.description}
            </p>

            {/* Fragrance Selector from Catalogue Page 8 */}
            <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EBE4DA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#2C2A29] flex items-center gap-1.5 uppercase tracking-wider">
                  <Droplets className="w-3.5 h-3.5 text-[#9E4770]" /> Select Fragrance (10 Options)
                </span>
                <span className="text-[10px] text-[#9E4770] font-semibold">Page 8 Catalogue</span>
              </div>
              
              <select
                value={selectedFragrance}
                onChange={(e) => setSelectedFragrance(e.target.value)}
                className="w-full text-xs font-medium bg-white border border-[#EBE4DA] rounded-xl p-2 text-[#2C2A29] focus:outline-none focus:border-[#C5A059]"
              >
                {FRAGRANCES.map((f) => (
                  <option key={f.name} value={f.name}>
                    {f.name} — {f.note}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Colour Selector */}
            <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EBE4DA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#2C2A29] flex items-center gap-1.5 uppercase tracking-wider">
                  <Palette className="w-3.5 h-3.5 text-[#C5A059]" /> Preferred Colour
                </span>
                <span className="text-[10px] text-[#C5A059] font-semibold">Custom Colours Available</span>
              </div>
              
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full text-xs font-medium bg-white border border-[#EBE4DA] rounded-xl p-2 text-[#2C2A29] focus:outline-none focus:border-[#C5A059]"
              >
                {AVAILABLE_COLORS.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EBE4DA] flex items-start gap-2">
                <Layers className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8781] block text-[10px] uppercase font-semibold">Vessel / Wrap</span>
                  <span className="font-medium text-[#2C2A29] leading-tight block mt-0.5">{product.vessel}</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EBE4DA] flex items-start gap-2">
                <Package className="w-4 h-4 text-[#9E4770] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8781] block text-[10px] uppercase font-semibold">Burn Time</span>
                  <span className="font-medium text-[#2C2A29] leading-tight block mt-0.5">{product.burnTime}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Footer: Quantity & Direct WhatsApp */}
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
                className="py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Inquire on WhatsApp
              </button>

              <button
                onClick={() => {
                  onAddToCart({ ...product, selectedFragrance, selectedColor }, quantity);
                  onClose();
                }}
                className={`py-3.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#C5A059] hover:bg-[#A4813C] text-white shadow-md'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {isAdded ? 'Added to Inquiry List' : 'Add to Inquiry List'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
