import React from 'react';
import { Eye, Plus, Flame, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart, isAdded }) {
  return (
    <div className="product-card group">
      
      {/* Top Badges Overlay */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1">
          {product.isBestseller && (
            <span className="badge-rose shadow-sm flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
          <span className="badge-gold shadow-sm flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#C5A059]" /> {product.burnTime}
          </span>
        </div>

        <span className="bg-white/90 backdrop-blur-md text-[#2C2A29] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#EBE4DA] shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Image Container with Hover Zoom & Quick View Button */}
      <div className="product-image-wrap cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        
        {/* Hover Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
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

      {/* Structured Card Content */}
      <div className="card-info-content">
        
        {/* Scent Family Tag */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-[11px] font-semibold text-[#9E4770] bg-[#9E4770]/10 px-2 py-0.5 rounded">
            {product.scentFamily}
          </span>
          <span className="text-[11px] text-[#8E8781]">
            {product.weight}
          </span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="font-serif text-lg font-semibold text-[#2C2A29] hover:text-[#C5A059] cursor-pointer transition-colors line-clamp-2 min-h-[3.25rem] leading-snug"
        >
          {product.name}
        </h3>

        {/* Fragrance Preview Pill */}
        <div className="bg-[#FAF7F2] border border-[#EBE4DA] rounded-lg p-2 text-xs text-[#605B56]">
          <span className="font-semibold text-[#C5A059] block text-[10px] uppercase tracking-wider">Top Scent Note</span>
          <span className="truncate block font-medium">{product.fragrancePyramid.top}</span>
        </div>

        {/* Card Actions Footer */}
        <div className="pt-2 border-t border-[#EBE4DA] flex items-center gap-2 mt-auto">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 py-2 px-3 rounded-lg border border-[#E2D1B2] text-xs font-semibold text-[#605B56] hover:text-[#2C2A29] hover:bg-[#F6F1E7] transition-all text-center"
          >
            View Details
          </button>
          
          <button
            onClick={() => onAddToCart(product)}
            className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#C5A059] text-white hover:bg-[#A4813C] shadow-sm'
            }`}
          >
            {isAdded ? (
              <span>Added ✓</span>
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
  );
}
