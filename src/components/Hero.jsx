import React from 'react';
import { Sparkles, Flower2, Gift, Flame } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const featureCards = [
    {
      icon: <Flower2 className="w-6 h-6 text-[#9E4770]" />,
      title: "Handcrafted Floral Art",
      description: "Individually sculpted wax roses, tulips & botanicals crafted by master artisans."
    },
    {
      icon: <Flame className="w-6 h-6 text-[#C5A059]" />,
      title: "100% Organic Soy Wax",
      description: "Non-toxic, clean & long burn times with lead-free natural cotton wicks."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#9E4770]" />,
      title: "Artisanal Fragrances",
      description: "Multi-layered scent pyramids blending French lavender, damask rose & peach nectar."
    },
    {
      icon: <Gift className="w-6 h-6 text-[#C5A059]" />,
      title: "Luxury Gift Packaging",
      description: "Arrives with sheer tulle wrapping, gold foil crest tags, and customized note cards."
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F6F1E7] py-12 md:py-20 border-b border-[#EBE4DA]">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#9E4770]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Heading & Tagline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#E2D1B2] text-[#A4813C] text-xs font-semibold uppercase tracking-widest animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Botanical Candle Studio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#2C2A29] leading-tight">
            Sculpted Floral Wax & <br className="hidden sm:inline" />
            <span className="font-semibold italic text-[#C5A059]">Scented Candle Bouquets</span>
          </h1>

          <p className="text-base sm:text-lg text-[#605B56] max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to <strong className="font-semibold text-[#2C2A29]">VRINDA</strong>. We craft everlasting botanical arrangements and carved floral wax candles that illuminate your space with delicate luxury and intoxicating fragrances.
          </p>

          <div className="pt-4 flex items-center justify-center">
            <button
              onClick={onExploreClick}
              className="px-8 py-3.5 rounded-full bg-[#C5A059] text-white font-medium text-sm tracking-wider uppercase hover:bg-[#A4813C] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explore Products
            </button>
          </div>
        </div>

        {/* Feature Highlights Card Grid Structure */}
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
