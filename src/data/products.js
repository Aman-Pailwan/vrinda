export const STUDIO_INFO = {
  name: "VRINDA",
  tagline: "Botanical Candle Studio",
  about: "At Vrinda, we create handcrafted candles that bring together fragrance, artistry and thoughtful gifting. From delicate floral candles to elegant arrangements, every piece is thoughtfully made to add warmth to your space and meaning to your moments.",
  instagram: "vrinda.candle.studio",
  instagramUrl: "https://www.instagram.com/vrinda.candle.studio",
  phone: "9049290907",
  phoneMasked: "+91 90492 *****",
  whatsappNumber: "919049290907",
  location: "Kolhapur, Maharashtra",
  colorsNote: "Custom colours available",
  logoImage: "./images/vrinda-logo.jpeg"
};

export const FRAGRANCES = [
  { name: "Saffron", note: "Warm Spice & Golden Exotic Bloom", family: "Exotic Spice" },
  { name: "Vanilla", note: "Creamy Madagascar Bean & Warm Sugar", family: "Warm Sweet" },
  { name: "Rose", note: "Damask Rose Petals & Morning Dew", family: "Classic Floral" },
  { name: "Sandalwood", note: "Mystic Wood, Amber & Earthy Bark", family: "Woody & Earthy" },
  { name: "Jasmine", note: "Night-Blooming Jasmine & Fresh Stems", family: "Fresh Floral" },
  { name: "Jovan Musk", note: "Sensual Soft Velvet Musk", family: "Sensual Musk" },
  { name: "Musk Wild", note: "Earthy Wild Botanicals & Sheer Musk", family: "Wild & Sheer" },
  { name: "Orchid", note: "Exotic Blossom Nectar & Citrus Bloom", family: "Exotic Floral" },
  { name: "Lemongrass", note: "Crisp Zesty Citrus & Uplifting Leaf", family: "Citrus & Herbal" },
  { name: "Rose Musk", note: "Romantic Velvet Rose & Warm Musk", family: "Romantic Musk" }
];

export const AVAILABLE_COLORS = [
  { name: "Blush Pink", hex: "#F4C2C2" },
  { name: "Cream Ivory", hex: "#FFFDD0" },
  { name: "Soft Mauve", hex: "#E0B0FF" },
  { name: "Dusty Rose", hex: "#DCAE96" },
  { name: "Sage Green", hex: "#9CAF88" },
  { name: "Champagne Gold", hex: "#F7E7CE" }
];

export const PRODUCTS = [
  {
    id: "vrinda-cat-01",
    name: "Tulip duet",
    category: "Candle Bouquets",
    price: 149,
    originalPrice: 199,
    image: "./images/tulip-duet-bouquet.jpeg",
    scentFamily: "Classic Floral",
    defaultScent: "Rose",
    burnTime: "30-35 Hours",
    dimensions: "24cm H × 12cm W",
    rating: 5.0,
    reviewsCount: 48,
    isCatalogueOfficial: true,
    isBestseller: true,
    fragrancePyramid: {
      top: "Fresh Tulip Stems & Dewy Rose",
      heart: "Pink Tulip Petals & Jasmine",
      base: "Sheer Musk & Warm Amber"
    },
    materials: "100% Handcrafted Botanical Soy & Beeswax Blend, Organic Wick, Sheer Net Wrap, Satin Bow",
    vessel: "Hand-wrapped Bouquet with VRINDA Signature Tag",
    occasions: ["Anniversaries", "Thoughtful Gifting", "Decor", "Return Gifts"],
    description: "Two elegant tulip candles, thoughtfully crafted for beautiful décor and meaningful gifting.",
    careTips: [
      "Place upright in a heat-resistant tray when burning.",
      "Trim wicks to 5mm before every burn session.",
      "Keep out of direct sunlight when displayed as home decor."
    ]
  },
  {
    id: "vrinda-cat-02",
    name: "Peony bloom",
    category: "Individual Blooms",
    price: 120,
    priceLabel: "₹120 each",
    originalPrice: 150,
    image: "./images/peony-bloom.jpeg",
    scentFamily: "Warm Sweet",
    defaultScent: "Vanilla",
    burnTime: "18-22 Hours",
    dimensions: "8cm H × 8cm W",
    rating: 4.9,
    reviewsCount: 62,
    isCatalogueOfficial: true,
    isBestseller: true,
    fragrancePyramid: {
      top: "Peony Petals & Saffron Bloom",
      heart: "Velvet Rose & Vanilla",
      base: "Creamy Tonka & Sheer Amber"
    },
    materials: "Pure Soy & Beeswax Molded Wax, Cotton Wick, Window Gift Box Packaging",
    vessel: "Free-standing Molded Floral Candle",
    occasions: ["Party Favors", "Bridal Shower", "Bedside Decor", "Gifting"],
    description: "A delicate peony-shaped candle, crafted to add a graceful floral accent to your home or gifting moments.",
    careTips: [
      "Always burn on a flat, heat-safe dish.",
      "Keep away from direct drafts and breezy windows."
    ]
  },
  {
    id: "vrinda-cat-03",
    name: "Blush Bloom jar",
    category: "Vase & Jar Arrangements",
    price: 349,
    originalPrice: 420,
    image: "./images/blush-bloom-jar.jpeg",
    scentFamily: "Romantic Musk",
    defaultScent: "Rose Musk",
    burnTime: "45+ Hours",
    dimensions: "16cm H × 11cm W",
    rating: 5.0,
    reviewsCount: 54,
    isCatalogueOfficial: true,
    isBestseller: true,
    fragrancePyramid: {
      top: "Rose Musk & Orchid Nectar",
      heart: "Garden Peony & White Tea",
      base: "Sandalwood & Soft Vanilla"
    },
    materials: "Hand-poured Botanical Soy Wax, Dried Wheat Grass Sprigs, Ribbed Ceramic Jar",
    vessel: "White Ribbed Fluted Ceramic Jar",
    occasions: ["Home Interiors", "Centerpieces", "Housewarming", "Luxury Gifting"],
    description: "A charming arrangement of handcrafted floral candles, beautifully styled in a ribbed jar for an elegant touch of décor and gifting.",
    careTips: [
      "Burn for 2 hours on first lit session for an even wax pool.",
      "Trim wick to 1/4 inch before relighting."
    ]
  },
  {
    id: "vrinda-cat-04",
    name: "Signature tulip",
    category: "Vase & Jar Arrangements",
    price: 499,
    originalPrice: 599,
    image: "./images/signature-tulip-arrangement.jpeg",
    scentFamily: "Fresh Floral",
    defaultScent: "Jasmine",
    burnTime: "55+ Hours",
    dimensions: "18cm H × 13cm W",
    rating: 5.0,
    reviewsCount: 81,
    isCatalogueOfficial: true,
    isBestseller: true,
    fragrancePyramid: {
      top: "Fresh Jasmine & Lemongrass",
      heart: "Blushing Tulip & Rose Petals",
      base: "Earthy Sandalwood & Jovan Musk"
    },
    materials: "Artisanal Sculpted Tulip Wax Stems, Dried Botanical Accents, Fluted Ceramic Pot",
    vessel: "Artisanal White Ribbed Ceramic Pot",
    occasions: ["Luxury Gifting", "Dining Decor", "Weddings", "Special Occasions"],
    description: "An elegant tulip candle arrangement designed to bring a soft floral touch to your space or make a thoughtful gift.",
    careTips: [
      "Keep wax pool clean of match heads or wick debris.",
      "Dust gently with a soft dry brush when used for decor."
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Candle Bouquets",
  "Individual Blooms",
  "Vase & Jar Arrangements"
];

export const SCENT_FAMILIES = [
  "All Scents",
  "Classic Floral",
  "Warm Sweet",
  "Romantic Musk",
  "Fresh Floral"
];
