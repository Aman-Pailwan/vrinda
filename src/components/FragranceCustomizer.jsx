import React, { useState } from 'react';
import { FRAGRANCES, AVAILABLE_COLORS, STUDIO_INFO } from '../data/products';
import { Sparkles, Palette, MessageCircle, Check, Droplets } from 'lucide-react';

export default function FragranceCustomizer() {
  const [selectedFragrance, setSelectedFragrance] = useState(FRAGRANCES[2]); // Default Rose
  const [selectedColor, setSelectedColor] = useState(AVAILABLE_COLORS[0]); // Default Blush Pink

  const handleCustomWhatsApp = () => {
    const message = `Hi Vrinda! I'm interested in a custom candle order:
- *Selected Fragrance:* ${selectedFragrance.name} (${selectedFragrance.note})
- *Preferred Color:* ${selectedColor.name}

Could you please share details on availability and how to proceed? Thank you!`;

    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="customization" className="py-16 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F6F1E7] border-t border-b border-[#EBE4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#E2D1B2] text-[#A4813C] text-xs font-semibold uppercase tracking-widest">
            <Palette className="w-3.5 h-3.5" />
            <span>Studio Customization Options</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2A29]">
            Custom Fragrances & Colour Palette
          </h2>

          <p className="text-xs sm:text-sm text-[#605B56] font-light leading-relaxed max-w-2xl mx-auto">
            Every VRINDA candle is made to order in our <strong className="font-medium text-[#2C2A29]">{STUDIO_INFO.location}</strong> studio. Choose from our 10 signature scents and custom colour palettes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 10 Signature Fragrances Grid (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#EBE4DA] shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#EBE4DA] pb-4">
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-[#9E4770]" />
                <h3 className="font-serif text-xl font-semibold text-[#2C2A29]">
                  10 Catalogue Signature Fragrances
                </h3>
              </div>
              <span className="text-xs text-[#9E4770] font-semibold bg-[#9E4770]/10 px-2.5 py-1 rounded-full">
                Hand-blended Aromas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FRAGRANCES.map((scent) => {
                const isSelected = selectedFragrance.name === scent.name;
                return (
                  <button
                    key={scent.name}
                    onClick={() => setSelectedFragrance(scent)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#C5A059] bg-[#FAF7F2] shadow-sm ring-1 ring-[#C5A059]'
                        : 'border-[#EBE4DA] hover:border-[#E2D1B2] bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-serif text-sm font-semibold ${isSelected ? 'text-[#C5A059]' : 'text-[#2C2A29]'}`}>
                        {scent.name}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-[#C5A059]" />}
                    </div>
                    <span className="text-[11px] text-[#8E8781] leading-snug">
                      {scent.note}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Custom Colours & Instant WhatsApp Order Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Custom Colours Box */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EBE4DA] shadow-sm space-y-6">
              <div className="flex items-center gap-2 border-b border-[#EBE4DA] pb-4">
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif text-xl font-semibold text-[#2C2A29]">
                  Available Colours
                </h3>
              </div>

              <p className="text-xs text-[#605B56] leading-relaxed">
                <strong className="text-[#C5A059] font-semibold">Custom colours available!</strong> We craft pastel and vibrant hues to complement your interior decor or event theme.
              </p>

              <div className="grid grid-cols-3 gap-3">
                {AVAILABLE_COLORS.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${
                        isSelected
                          ? 'border-[#9E4770] bg-[#9E4770]/5 ring-1 ring-[#9E4770]'
                          : 'border-[#EBE4DA] hover:border-[#E2D1B2]'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border border-black/10 shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-gray-700" />}
                      </div>
                      <span className="text-[11px] font-medium text-[#2C2A29] text-center leading-tight">
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Combination Summary & Action */}
            <div className="bg-[#2C2A29] text-white p-6 rounded-3xl shadow-xl space-y-4">
              <div className="text-xs space-y-1">
                <span className="text-[#C5A059] uppercase font-bold text-[10px] tracking-wider block">
                  Your Bespoke Selection
                </span>
                <p className="font-serif text-lg text-white">
                  {selectedFragrance.name} + {selectedColor.name}
                </p>
                <p className="text-[#A8A29E] text-xs font-light">
                  {selectedFragrance.note}
                </p>
              </div>

              <button
                onClick={handleCustomWhatsApp}
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Request Custom Order on WhatsApp
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
