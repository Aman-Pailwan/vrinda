import React from 'react';
import { Eye, Plus, Flame, Sparkles, Check } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart, isAdded }) {
  return (
    <div className="product-card group flex flex-col justify-between h-full bg-white rounded-3xl border border-[#EBE4DA] overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* Top Badges Overlay */}
      <div className="relative">
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <div className="flex flex-col gap-1">
            {product.isCatalogueOfficial && (
              <span className="bg-[#C5A059] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Catalogue Pick
              </span>
            )}
            {/* Burn time badge removed per request */}
          </div>

          <span className="bg-white/95 backdrop-blur-md text-[#2C2A29] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#EBE4DA] shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Image Container with Hover Zoom & Quick View Button */}
        <div className="product-image-wrap cursor-pointer h-64 sm:h-72 overflow-hidden relative" onClick={() => onQuickView(product)}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Hover Quick View Overlay Button */}
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="px-4 py-2.5 rounded-full bg-white/95 text-[#2C2A29] text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-[#C5A059] hover:text-white transition-all transform -translate-y-2 group-hover:translate-y-0 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" /> View Details
            </button>
          </div>
        </div>
      </div>

      {/* Structured Card Content */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
        
        {/* Category & Scent Tag */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-[11px] font-semibold text-[#9E4770] bg-[#9E4770]/10 px-2.5 py-0.5 rounded-full">
            {product.scentFamily}
          </span>
          <span className="text-[11px] text-[#C5A059] font-medium">
            Handcrafted
          </span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="font-serif text-lg font-semibold text-[#2C2A29] hover:text-[#C5A059] cursor-pointer transition-colors line-clamp-2 min-h-[3rem] leading-snug"
        >
          {product.name}
        </h3>

        {/* Description snippet */}
        <p className="text-xs text-[#605B56] line-clamp-2 font-light leading-relaxed">
          {product.description}
        </p>

        {/* Pricing Display */}
        <div className="pt-2 border-t border-[#EBE4DA] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#8E8781] block text-[10px] uppercase font-semibold">Catalogue Price</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold text-[#C5A059]">
                ₹{product.price}
                {product.priceLabel && <span className="text-xs font-normal text-[#605B56]"> ({product.priceLabel.replace(product.price.toString(), '').replace('₹', '').trim()})</span>}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#8E8781] line-through font-light">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickView(product)}
              className="p-2 rounded-xl border border-[#E2D1B2] text-xs font-semibold text-[#605B56] hover:text-[#2C2A29] hover:bg-[#F6F1E7] transition-all"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => onAddToCart(product)}
              className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#C5A059] text-white hover:bg-[#A4813C]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Inquire</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
