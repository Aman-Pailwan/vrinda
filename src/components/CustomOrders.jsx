import React from 'react';
import { Gift, Sparkles, MessageCircle, Instagram } from 'lucide-react';
import { STUDIO_INFO } from '../data/products';

export default function CustomOrders() {
  const handleConsultWhatsApp = () => {
    const text = encodeURIComponent(`Hi Vrinda! I would like to inquire about custom candle bouquets & event favors.`);
    window.open(`https://api.whatsapp.com/send?phone=${STUDIO_INFO.whatsappNumber}&text=${text}`, '_blank');
  };

  return (
    <section id="custom-orders" className="py-16 bg-gradient-to-b from-[#FAF7F2] to-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#E2D1B2] shadow-xl text-center max-w-3xl mx-auto space-y-6">
          <span className="badge-rose inline-block">Bespoke Studio Services</span>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2A29] leading-tight">
            Custom Candle Bouquets & <br />
            <span className="italic text-[#9E4770]">Wedding & Event Favors</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#605B56] leading-relaxed font-light max-w-xl mx-auto">
            Planning a wedding, corporate event, or milestone celebration? <strong className="font-medium text-[#2C2A29]">VRINDA</strong> creates custom-scented floral wax arrangements in <strong className="font-medium text-[#2C2A29]">{STUDIO_INFO.location}</strong> tailored to your event's theme, color palette, and personalized gift tags.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left pt-2">
            <div className="p-4 rounded-2xl bg-white border border-[#EBE4DA] flex items-center gap-3">
              <Gift className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div className="text-xs">
                <h4 className="font-serif font-semibold text-[#2C2A29]">Personalized Packaging</h4>
                <p className="text-[#8E8781]">Monogrammed ribbons & custom message cards.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#EBE4DA] flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#9E4770] shrink-0" />
              <div className="text-xs">
                <h4 className="font-serif font-semibold text-[#2C2A29]">10 Scents & Custom Hues</h4>
                <p className="text-[#8E8781]">Choose from 10 aromas & custom color palettes.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleConsultWhatsApp}
              className="px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Direct WhatsApp Consultation ({STUDIO_INFO.phoneMasked})
            </button>

            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white text-[#9E4770] border border-[#9E4770]/30 hover:bg-[#9E4770]/10 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all"
            >
              <Instagram className="w-4 h-4" />
              Follow @{STUDIO_INFO.instagram}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
