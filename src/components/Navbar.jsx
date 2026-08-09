import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X } from 'lucide-react';
import logoSvg from '../assets/vrinda-logo.svg';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  selectedCategory, 
  setSelectedCategory,
  categories 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Hi Vrinda! I am interested in your handcrafted floral wax candles and catalog.");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-[#EBE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-105">
              <img src={logoSvg} alt="VRINDA Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.18em] font-semibold text-[#2C2A29] uppercase group-hover:text-[#C5A059] transition-colors">
                VRINDA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#9E4770] uppercase font-medium -mt-1">
                Botanical Candle Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Categories */}
          <nav className="hidden md:flex items-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm tracking-wider uppercase font-medium transition-all py-1 border-b-2 ${
                  selectedCategory === cat
                    ? 'border-[#C5A059] text-[#C5A059] font-semibold'
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
              className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all"
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
                <span className="absolute -top-1 -right-1 bg-[#9E4770] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
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
                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg ${
                    selectedCategory === cat
                      ? 'bg-[#C5A059]/15 text-[#A4813C] font-semibold'
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
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[#25D366] text-white shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Chat directly on WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
