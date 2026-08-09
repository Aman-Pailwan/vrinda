import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import logoSvg from '../assets/vrinda-logo.svg';

export default function Footer() {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Hi Vrinda! I am interested in your handcrafted floral wax candles.");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#2C2A29] text-[#FAF7F2] pt-14 pb-10 border-t border-[#403C3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#403C3A]">
          
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src={logoSvg} alt="VRINDA Logo" className="w-10 h-10 object-contain invert brightness-200" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.18em] font-semibold text-white uppercase">
                  VRINDA
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-medium -mt-1">
                  Botanical Candle Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8A29E] max-w-sm leading-relaxed font-light">
              Crafting timeless floral wax candles, sculpted botanical bouquets, and luxury candle arrangements.
            </p>
          </div>

          {/* Quick WhatsApp Contact Button */}
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <span className="text-xs text-[#A8A29E]">Have questions or custom order requests?</span>
            <button
              onClick={handleWhatsAppDirect}
              className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center gap-2 shadow-md hover:bg-[#128C7E] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A29E] gap-4">
          <p>© {new Date().getFullYear()} VRINDA Botanical Candles. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#9E4770] text-[#9E4770]" />
            <span>for botanical lovers.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
