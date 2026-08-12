import React, { useState } from 'react';
import { X, Trash2, MessageCircle, Send, ShoppingBag, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STUDIO_INFO } from '../data/products';

export default function InquiryDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const formatOrderText = () => {
    let text = `*VRINDA CANDLE ORDER & INQUIRY*\n`;
    text += `------------------------------------\n\n`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n`;
      text += `   - Price: ₹${item.product.price} ${item.product.priceLabel ? `(${item.product.priceLabel})` : ''}\n`;
      text += `   - Quantity: ${item.quantity}\n`;
      if (item.product.selectedFragrance) {
        text += `   - Fragrance: ${item.product.selectedFragrance}\n`;
      }
      if (item.product.selectedColor) {
        text += `   - Colour: ${item.product.selectedColor}\n`;
      }
      text += `   - Category: ${item.product.category}\n\n`;
    });

    text += `*Estimated Subtotal:* ₹${totalAmount}\n\n`;

    if (customNote.trim()) {
      text += `*Custom Request / Note:* ${customNote.trim()}\n\n`;
    }
    text += `Hi Vrinda! I would like to check availability and place an order for these items. Thank you!`;
    return text;
  };

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const text = encodeURIComponent(formatOrderText());
    window.open(`https://api.whatsapp.com/send?phone=${STUDIO_INFO.whatsappNumber}&text=${text}`, '_blank');
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(formatOrderText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-[#EBE4DA] flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EBE4DA] flex items-center justify-between bg-[#FFFDF9]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h2 className="font-serif text-xl font-semibold text-[#2C2A29]">
                Your Order Inquiry List ({cartItems.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FAF7F2] text-[#8E8781] hover:text-[#2C2A29]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#FAF7F2] border border-[#EBE4DA] rounded-full flex items-center justify-center mx-auto text-[#C5A059]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2C2A29]">
                  Your inquiry list is empty
                </h3>
                <p className="text-xs text-[#8E8781] max-w-xs mx-auto">
                  Browse our handcrafted candle collection to select items for your inquiry.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EBE4DA] relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl border border-[#EBE4DA] shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-semibold text-[#2C2A29] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#8E8781] hover:text-rose-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="font-serif text-sm font-bold text-[#C5A059]">
                          ₹{item.product.price * item.quantity}
                        </span>
                        <span className="text-[10px] text-[#8E8781]">
                          (₹{item.product.price} each)
                        </span>
                      </div>

                      {item.product.selectedFragrance && (
                        <span className="text-[10px] text-[#9E4770] font-medium block">
                          Scent: {item.product.selectedFragrance}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-[#8E8781] font-medium">
                        Qty: {item.quantity}
                      </span>

                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#EBE4DA] rounded-lg bg-white overflow-hidden text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-[#605B56] hover:bg-[#FAF7F2]"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 font-bold text-[#2C2A29]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-[#605B56] hover:bg-[#FAF7F2]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer & Order Actions */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#EBE4DA] bg-[#FFFDF9] space-y-4">
              
              {/* Estimated Total */}
              <div className="flex items-center justify-between py-1 border-b border-[#EBE4DA]">
                <span className="text-xs uppercase font-bold text-[#605B56]">Estimated Total:</span>
                <span className="font-serif text-xl font-bold text-[#C5A059]">₹{totalAmount}</span>
              </div>

              {/* Custom Note Input */}
              <div>
                <label className="block text-[11px] font-semibold text-[#2C2A29] uppercase tracking-wider mb-1">
                  Custom Fragrance / Gift Message
                </label>
                <textarea
                  rows={2}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. Please add pink ribbon, or include gift message: 'Happy Birthday!'"
                  className="w-full text-xs p-2.5 rounded-xl border border-[#EBE4DA] bg-white focus:outline-none focus:border-[#C5A059] text-[#2C2A29] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Send Inquiry via WhatsApp ({STUDIO_INFO.phoneMasked})
                </button>

                <button
                  onClick={handleCopySummary}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#E2D1B2] bg-[#FAF7F2] text-[#605B56] hover:text-[#2C2A29] hover:bg-[#F6F1E7] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Copy Inquiry Summary</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
