import React from 'react';
import { Heart, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/products';

export default function Footer() {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hi Vrinda! I would like to inquire about your handcrafted candles.`);
    window.open(`https://api.whatsapp.com/send?phone=${STUDIO_INFO.whatsappNumber}&text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#2C2A29] text-[#FAF7F2] pt-14 pb-10 border-t border-[#403C3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#403C3A]">
          
          {/* Brand Info & Logo */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#C5A059] bg-white p-0.5">
                <img 
                  src={STUDIO_INFO.logoImage} 
                  alt="VRINDA Logo" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-2xl tracking-[0.18em] font-semibold text-white uppercase">
                  {STUDIO_INFO.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-medium -mt-1">
                  {STUDIO_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8A29E] max-w-sm leading-relaxed font-light">
              Crafting handcrafted floral candles, bouquet arrangements, and bespoke scented wax creations. Made with love in <strong className="text-white font-medium">{STUDIO_INFO.location}</strong>.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-[#A8A29E]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> {STUDIO_INFO.location}
              </span>
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#9E4770] hover:underline"
              >
                <Instagram className="w-3.5 h-3.5" /> @{STUDIO_INFO.instagram}
              </a>
            </div>
          </div>

          {/* Catalogue Fragrances Summary */}
          <div className="md:col-span-4 space-y-2 text-center md:text-left">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              10 Signature Fragrances
            </h4>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Saffron • Vanilla • Rose • Sandalwood • Jasmine • Jovan Musk • Musk Wild • Orchid • Lemongrass • Rose Musk
            </p>
            <p className="text-xs text-[#C5A059] pt-1">
              Custom colours & custom scents available for all orders.
            </p>
          </div>

          {/* Direct WhatsApp Contact Button */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center gap-3 text-center md:text-right">
            <span className="text-xs text-[#A8A29E]">Have custom requests or bulk orders?</span>
            <button
              onClick={handleWhatsAppDirect}
              className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center gap-2 shadow-md hover:bg-[#128C7E] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Inquiry ({STUDIO_INFO.phoneMasked})</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A29E] gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name} Candle Studio ({STUDIO_INFO.location}). All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#9E4770] text-[#9E4770]" />
            <span>in Kolhapur.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
