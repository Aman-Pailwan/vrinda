import React from 'react';
import { Flame, Scissors, ShieldAlert, Sparkles } from 'lucide-react';

export default function CandleCare() {
  const careCards = [
    {
      icon: <Scissors className="w-5 h-5 text-[#C5A059]" />,
      title: "Trim the Wick to 1/4 Inch",
      description: "Always trim cotton wicks to 5mm before every burn. This prevents excessive flame height, soot, and ensures a clean, steady burn."
    },
    {
      icon: <Flame className="w-5 h-5 text-[#9E4770]" />,
      title: "First Burn Memory Pool",
      description: "Allow the wax to melt completely to the edges of the vessel during the first burn (2-3 hours) to prevent candle tunneling."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#C5A059]" />,
      title: "Heat-Resistant Trays for Bouquets",
      description: "When burning free-standing floral bouquet candles, place stems inside a heat-resistant tray or ceramic dish to capture wax melt."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#9E4770]" />,
      title: "Preserve Decorative Blooms",
      description: "To keep unburned floral candles pristine as home decor, store away from direct sunlight and dust gently with a soft dry cloth."
    }
  ];

  return (
    <section className="py-16 bg-[#FFFDF9] border-t border-b border-[#EBE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-gold mb-3 inline-block">Artisan Guide</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2A29]">
            Candle Care & Craftsmanship
          </h2>
          <p className="text-xs sm:text-sm text-[#605B56] mt-2 font-light">
            Follow these essential tips to maximize the burn time and scent throw of your VRINDA handcrafted candles.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careCards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EBE4DA] hover:border-[#E2D1B2] transition-all hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-[#EBE4DA] flex items-center justify-center mb-4 shadow-xs">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2C2A29] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-[#605B56] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
