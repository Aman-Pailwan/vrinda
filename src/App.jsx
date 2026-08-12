import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import FragranceCustomizer from './components/FragranceCustomizer';
import InquiryDrawer from './components/InquiryDrawer';
import CandleCare from './components/CandleCare';
import CustomOrders from './components/CustomOrders';
import Footer from './components/Footer';

import { PRODUCTS, CATEGORIES, SCENT_FAMILIES, STUDIO_INFO } from './data/products';
import { RotateCcw, Sparkles, FileText, Download } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedScent, setSelectedScent] = useState('All Scents');
  
  const [modalProduct, setModalProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('vrinda_inquiry_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('vrinda_inquiry_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Category & Scent Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      
      const matchScent =
        selectedScent === 'All Scents' || product.scentFamily === selectedScent;

      return matchCategory && matchScent;
    });
  }, [selectedCategory, selectedScent]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedScent('All Scents');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      
      {/* Top Header Navbar */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
      />

      {/* Hero Banner Showcase */}
      <Hero
        onExploreClick={() => {
          const section = document.getElementById('catalog-section');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Product Catalog Main Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">
        
        {/* Section Header */}
        <div className="mb-8 pb-6 border-b border-[#EBE4DA] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="badge-gold mb-2 inline-block">Official Studio Catalogue</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C2A29]">
              Handcrafted Product Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#605B56] mt-1 font-light">
              Explore {filteredProducts.length} botanical candle creations handcrafted in {STUDIO_INFO.location}
            </p>
          </div>

          <a
            href="./CATALOGUE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white border border-[#EBE4DA] hover:border-[#C5A059] text-[#2C2A29] text-xs font-semibold flex items-center gap-2 shadow-xs transition-all w-fit"
          >
            <FileText className="w-4 h-4 text-[#C5A059]" />
            <span>View PDF Catalogue</span>
            <Download className="w-3.5 h-3.5 text-[#8E8781]" />
          </a>
        </div>

        {/* Filter Toolbar (Category Pills & Scent Profile Selector) */}
        <div className="bg-white p-4 rounded-2xl border border-[#EBE4DA] shadow-xs mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C5A059] text-white shadow-sm'
                    : 'bg-[#FAF7F2] text-[#605B56] hover:bg-[#F6F1E7] border border-[#EBE4DA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Scent Family Filter Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs text-[#8E8781] font-semibold whitespace-nowrap">Scent Profile:</span>
            <select
              value={selectedScent}
              onChange={(e) => setSelectedScent(e.target.value)}
              className="bg-[#FAF7F2] border border-[#EBE4DA] rounded-xl px-3 py-2 text-xs font-medium text-[#2C2A29] focus:outline-none focus:border-[#C5A059] w-full md:w-auto"
            >
              {SCENT_FAMILIES.map((scent) => (
                <option key={scent} value={scent}>{scent}</option>
              ))}
            </select>

            {(selectedCategory !== 'All' || selectedScent !== 'All Scents') && (
              <button
                onClick={resetFilters}
                className="p-2 text-[#9E4770] hover:bg-[#9E4770]/10 rounded-xl transition-colors shrink-0"
                title="Reset filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Product Grid Layout Structure */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(prod) => setModalProduct(prod)}
                onAddToCart={(prod) => handleAddToCart(prod, 1)}
                isAdded={cartItems.some((item) => item.product.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#EBE4DA] p-8 space-y-4">
            <h3 className="font-serif text-xl font-semibold text-[#2C2A29]">
              No products match this category
            </h3>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#A4813C] transition-all"
            >
              View All Products
            </button>
          </div>
        )}

      </main>

      {/* Interactive Fragrance & Colour Palette Customizer Section (Catalogue Page 8) */}
      <FragranceCustomizer />

      {/* Candle Care Guide Section */}
      <CandleCare />

      {/* Custom Bespoke & Event Orders Section */}
      <CustomOrders />

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onAddToCart={handleAddToCart}
          isAdded={cartItems.some((item) => item.product.id === modalProduct.id)}
        />
      )}

      {/* Inquiry Cart Drawer */}
      <InquiryDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

    </div>
  );
}
