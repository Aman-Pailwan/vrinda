import React from 'react';
import { Sparkles, Flower2, Gift, Flame, MapPin, Instagram } from 'lucide-react';
import { STUDIO_INFO } from '../data/products';

export default function Hero({ onExploreClick }) {
  const featureCards = [
    {
      icon: <Flower2 className="w-6 h-6 text-[#9E4770]" />,
      title: "Handcrafted Floral Artistry",
      description: "Delicate floral candles & sculpted bouquets thoughtfully made to add warmth to your space."
    },
    {
      icon: <Flame className="w-6 h-6 text-[#C5A059]" />,
      title: "10 Signature Fragrances",
      description: "Saffron, Vanilla, Rose, Sandalwood, Jasmine, Jovan Musk, Musk Wild, Orchid, Lemongrass & Rose Musk."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#9E4770]" />,
      title: "Custom Colours Available",
      description: "Tailored color palettes and custom arrangement styling for every special occasion."
    },
    {
      icon: <Gift className="w-6 h-6 text-[#C5A059]" />,
      title: "Thoughtful Gifting",
      description: "Elegantly wrapped with sheer net tulle, satin bows, and VRINDA signature gold crest tags."
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F6F1E7] py-12 md:py-20 border-b border-[#EBE4DA]">
      
      {/* Background Decorative Orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#9E4770]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Heading & Logo Display */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          
          {/* Logo Badge Overlay */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 shadow-lg bg-white p-1">
              <img 
                src={STUDIO_INFO.logoImage} 
                alt="VRINDA Logo" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#E2D1B2] text-[#A4813C] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VRINDA Candle Studio • {STUDIO_INFO.location}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#2C2A29] leading-tight">
            Handcrafted Floral Candles & <br className="hidden sm:inline" />
            <span className="font-semibold italic text-[#C5A059]">Scented Candle Arrangements</span>
          </h1>

          {/* Exact Brand Intro Quote from Catalogue Page 1 */}
          <p className="text-base sm:text-lg text-[#605B56] max-w-2xl mx-auto font-light leading-relaxed italic bg-white/70 p-4 rounded-2xl border border-[#EBE4DA] shadow-xs">
            "{STUDIO_INFO.about}"
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="px-8 py-3.5 rounded-full bg-[#C5A059] text-white font-medium text-xs tracking-widest uppercase hover:bg-[#A4813C] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explore Products
            </button>

            <a
              href="#customization"
              className="px-8 py-3.5 rounded-full bg-white text-[#2C2A29] border border-[#EBE4DA] font-medium text-xs tracking-widest uppercase hover:bg-[#FAF7F2] hover:border-[#C5A059] transition-all shadow-sm"
            >
              10 Fragrances & Colors
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-[#EBE4DA] hover:border-[#E2D1B2] transition-all duration-300 hover:shadow-md group flex flex-col items-start"
            >
              <div className="p-3 rounded-xl bg-white shadow-sm border border-[#EBE4DA] group-hover:scale-110 transition-transform mb-4">
                {card.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2C2A29] mb-1 group-hover:text-[#C5A059] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-[#605B56] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
