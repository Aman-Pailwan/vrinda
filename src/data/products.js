const baseUrl = import.meta.env.BASE_URL || './';

// Normalize base URL trailing slash
const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

export const PRODUCTS = [
  {
    id: "vrinda-01",
    name: "VRINDA Signature Wrapped Tulip Candle Bouquet",
    category: "Candle Bouquets",
    price: 1899,
    originalPrice: 2299,
    image: `${cleanBaseUrl}images/signature-tulip-bouquet.jpeg`,
    scentFamily: "Floral & Fresh",
    burnTime: "40-45 Hours",
    weight: "380g",
    dimensions: "28cm H × 14cm W",
    rating: 5.0,
    reviewsCount: 38,
    isBestseller: true,
    fragrancePyramid: {
      top: "Fresh Tulip Stems & White Tea",
      heart: "Peony Petals & Jasmine Sambac",
      base: "Sheer Musk & Warm Amber"
    },
    materials: "100% Organic Soy & Beeswax Blend, Organic Cotton Wick, Sheer Mesh Wrap, Satin Ribbon",
    vessel: "Hand-wrapped Bouquet with Vrinda Signature Gold Tag",
    occasions: ["Anniversaries", "Weddings", "Luxury Gifting", "Valentine's Day"],
    description: "An exquisite centerpiece crafted for lovers of floral art. Features hand-sculpted wax tulip stems wrapped in delicate sheer tulle mesh with gold frame accents, completed with VRINDA's luxury signature crest tag.",
    careTips: [
      "Trim wicks to 1/4 inch before lighting.",
      "Place candle stems upright in a heat-resistant tray when burning.",
      "Keep away from direct heat and sunlight when displayed as decor."
    ]
  },
  {
    id: "vrinda-02",
    name: "Lavender & Rose Bloom Candle Vase",
    category: "Vase Arrangements",
    price: 1699,
    originalPrice: 1999,
    image: `${cleanBaseUrl}images/lavender-bloom-vase.jpeg`,
    scentFamily: "Relaxing Herbal",
    burnTime: "50+ Hours",
    weight: "420g",
    dimensions: "18cm H × 12cm W",
    rating: 4.9,
    reviewsCount: 29,
    isBestseller: false,
    fragrancePyramid: {
      top: "French Lavender & Eucalyptus",
      heart: "Velvet Rose & Wild Violet",
      base: "Creamy Vanilla & Cedarwood"
    },
    materials: "Natural Botanical Soy Wax, Dried Wheat Grass, Ribbed Ceramic Vase",
    vessel: "White Ribbed Fluted Ceramic Vessel",
    occasions: ["Home Decor", "Bedside Aromatherapy", "Housewarming"],
    description: "A serene blend of soft purple rose wax blooms and ivory floral candles thoughtfully arranged inside a ribbed ceramic pot with natural dried botanical sprigs. Perfect for creating a calming sanctuary atmosphere.",
    careTips: [
      "Burn for at least 2 hours on first burn to ensure an even wax pool.",
      "Avoid placing near open windows or drafts.",
      "Clean ceramic container gently with a soft cloth."
    ]
  },
  {
    id: "vrinda-03",
    name: "Blushing Tulip Candle Vase",
    category: "Vase Arrangements",
    price: 1599,
    originalPrice: 1849,
    image: `${cleanBaseUrl}images/tulip-elegance-vase.jpeg`,
    scentFamily: "Sweet Floral & Citrus",
    burnTime: "45+ Hours",
    weight: "390g",
    dimensions: "17cm H × 11cm W",
    rating: 4.8,
    reviewsCount: 42,
    isBestseller: true,
    fragrancePyramid: {
      top: "Pink Peach & Sweet Grapefruit",
      heart: "Blushing Tulip & Gardenia",
      base: "Soft Sandalwood & Creamy Musk"
    },
    materials: "Hand-poured Soy & Coconut Wax, Natural Cotton Wick, Ribbed Porcelain Vessel",
    vessel: "Artisanal Ribbed Ceramic Pot",
    occasions: ["Birthday Gifts", "Brunch Decor", "Spring Interiors"],
    description: "Carved tulip candle blooms in vibrant rose pink and warm ivory cream, nestled into a scalloped ceramic vase with golden wheat grass accents. Infuses any room with uplifting peach and tulip nectar.",
    careTips: [
      "Trim wicks to 5mm before every burn session.",
      "Do not burn for longer than 4 hours continuously.",
      "Always keep on a flat, stable surface."
    ]
  },
  {
    id: "vrinda-04",
    name: "Classic Rose & Botanical Candle Pot",
    category: "Vase Arrangements",
    price: 1499,
    originalPrice: 1750,
    image: `${cleanBaseUrl}images/classic-rose-blossom-vase.jpeg`,
    scentFamily: "Romantic Rose & Amber",
    burnTime: "48+ Hours",
    weight: "400g",
    dimensions: "16cm H × 12cm W",
    rating: 4.9,
    reviewsCount: 51,
    isBestseller: false,
    fragrancePyramid: {
      top: "Bergamot & English Damask Rose",
      heart: "Carnation Blossom & Creamy Lily",
      base: "Golden Amber & Cashmere Wood"
    },
    materials: "100% Eco-Friendly Soy Wax, Dried Preserved Flowers, Ribbed Ceramic Pot",
    vessel: "White Ceramic Ribbed Urn",
    occasions: ["Reading Nook Decor", "Intimate Gifting", "Thank You Gift"],
    description: "A timeless floral arrangement made of individually molded rose and chrysanthemum wax candles in tones of dusty rose and champagne. Styled effortlessly atop your favorite coffee table books.",
    careTips: [
      "Always burn within sight and keep away from pets and children.",
      "Keep the wax pool free of wick trimmings and debris."
    ]
  },
  {
    id: "vrinda-05",
    name: "VRINDA Luxury Rose Bloom Gift Box",
    category: "Gift Sets",
    price: 2199,
    originalPrice: 2599,
    image: `${cleanBaseUrl}images/luxury-rose-bloom-gift-box.jpeg`,
    scentFamily: "Warm Vanilla & Rose",
    burnTime: "30+ Hours per Candle (120+ Total)",
    weight: "520g Total",
    dimensions: "Gift Box: 20cm × 20cm × 8cm",
    rating: 5.0,
    reviewsCount: 64,
    isBestseller: true,
    fragrancePyramid: {
      top: "Madagascar Vanilla & Sweet Almond",
      heart: "Rich Rose Petals & Magnolia",
      base: "Tonka Bean & Pure Honey"
    },
    materials: "Hand-carved Soy Wax Petals, Cotton Wicks, Window Gift Box, Vrinda Gold Card",
    vessel: "Window Display Gift Packaging with Shredded Kraft Bedding",
    occasions: ["Corporate Gifting", "Bridal Shower", "Festive Celebrations", "Milestones"],
    description: "VRINDA's flagship luxury gift box presenting four intricately sculpted garden rose wax candles in vibrant rose, blush pink, and ivory. Arrives ready to gift with VRINDA signature gold foil embossed greeting card.",
    careTips: [
      "Can be burned individually or placed as scented room decor.",
      "Store in a cool dry place to preserve fragrance strength."
    ]
  }
];

export const CATEGORIES = [
  "All",
  "Candle Bouquets",
  "Vase Arrangements",
  "Gift Sets"
];

export const SCENT_FAMILIES = [
  "All Scents",
  "Floral & Fresh",
  "Relaxing Herbal",
  "Sweet Floral & Citrus",
  "Romantic Rose & Amber",
  "Warm Vanilla & Rose"
];
