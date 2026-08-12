import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Instagram, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/products';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  selectedCategory, 
  setSelectedCategory,
  categories 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hi Vrinda! I would like to inquire about your handcrafted candles.`);
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-[#EBE4DA]">
      
      {/* Top Notification Bar with Location & Masked Phone for Privacy */}
      <div className="bg-[#2C2A29] text-white text-[11px] py-1.5 px-4 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#C5A059] font-medium">
              <MapPin className="w-3 h-3" /> {STUDIO_INFO.location}
            </span>
            <span className="hidden sm:inline text-[#A8A29E]">|</span>
            <span className="hidden sm:inline text-[#A8A29E]">Handcrafted Botanical Candle Studio</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#A8A29E] hover:text-[#C5A059] transition-colors"
            >
              <Instagram className="w-3 h-3 text-[#9E4770]" />
              <span>@{STUDIO_INFO.instagram}</span>
            </a>
            <span className="text-[#A8A29E]">|</span>
            <button
              onClick={handleWhatsAppDirect}
              className="text-[#25D366] hover:underline font-medium flex items-center gap-1"
              title="Click to chat directly on WhatsApp"
            >
              <span>{STUDIO_INFO.phoneMasked}</span>
              <span className="text-[10px] text-[#A8A29E]">(Click to Chat)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#EBE4DA] shadow-xs group-hover:border-[#C5A059] transition-all duration-300 group-hover:scale-105 bg-[#FAF7F2]">
              <img 
                src={STUDIO_INFO.logoImage} 
                alt="VRINDA Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.18em] font-semibold text-[#2C2A29] uppercase group-hover:text-[#C5A059] transition-colors">
                {STUDIO_INFO.name}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#9E4770] uppercase font-medium -mt-1">
                {STUDIO_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Categories */}
          <nav className="hidden md:flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs tracking-wider uppercase font-semibold transition-all py-1 border-b-2 ${
                  selectedCategory === cat
                    ? 'border-[#C5A059] text-[#C5A059]'
                    : 'border-transparent text-[#605B56] hover:text-[#2C2A29]'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Action Tools: Direct WhatsApp, Inquiry Cart */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Direct WhatsApp Contact Button */}
            <button
              onClick={handleWhatsAppDirect}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
              <span>WhatsApp Inquiry</span>
            </button>

            {/* Inquiry Cart Counter Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#C5A059]/10 text-[#A4813C] hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-sm"
              title="View Inquiry List"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#9E4770] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#605B56] hover:text-[#2C2A29]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#EBE4DA] flex flex-col gap-3 animate-fade-in">
            <div className="flex flex-col gap-2 px-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-xs uppercase font-semibold tracking-wider py-2.5 px-3 rounded-xl ${
                    selectedCategory === cat
                      ? 'bg-[#C5A059]/15 text-[#A4813C]'
                      : 'text-[#605B56] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#EBE4DA] px-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-[#25D366] text-white shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Chat on WhatsApp ({STUDIO_INFO.phoneMasked})
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
