# VRINDA - Handcrafted Botanical Candle Catalog & GitHub Pages Site 

Welcome to the official product catalog web application for **VRINDA** (Artisanal Handcrafted Botanical & Floral Wax Candles).

This project is built using **React**, **Vite**, and **Vanilla CSS** with relative path resolution (`base: './'`) making it 100% compatible with **GitHub Pages** static hosting out of the box.

---

## 🌟 Key Features

1. **Card-Based Product Showcase**:
   - Structured luxury cards for each of Vrinda's handcrafted products (tulip bouquets, vase arrangements, rose gift boxes).
   - High-resolution image view with smooth hover zoom & quick preview modal triggers.
   - Scent family tags, burn time badges, weight, dimensions, and rating stars.

2. **Interactive Product Quick View Modal**:
   - **Scent Pyramid Card**: Visual breakdown of Top, Heart, and Base fragrance notes.
   - **Technical Specifications Card**: Materials (100% Organic Soy Wax, Lead-Free Cotton Wick), dimensions, weight, vessel type.
   - **Candle Care Guide**: Instructions for wick trimming and melt pool care.
   - **Direct WhatsApp Inquiry Action**: Instant pre-filled inquiry text generator.

3. **Inquiry Cart Drawer**:
   - Customers can add products to their inquiry list.
   - Custom note input (for custom ribbons or gift messages).
   - Itemized order total calculation and 1-click **Send Inquiry via WhatsApp** with confetti celebration!

4. **Bespoke & Custom Orders Section**:
   - Interactive consultation form for wedding favors, corporate gifting, and custom color/scent requests.

---

## 🚀 How to Host on GitHub Pages

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. Create a new repository on GitHub (e.g. `vrinda-catalog`).
2. Push your code to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Vrinda Product Catalog"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to your repository **Settings** -> **Pages**:
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site at `https://<your-username>.github.io/<repo-name>/` whenever you push changes!

---

### Method 2: Manual Build & gh-pages Branch

If you prefer building locally and deploying the static output:

1. Run the build command:
   ```bash
   npm run build
   ```
2. The compiled static website files will be generated in the `dist/` directory.
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## 💻 Local Development

To run the application locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Vite development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

---

## 🎨 Product Catalog Data

All product data, fragrance notes, burn times, and image paths are maintained in [`src/data/products.js`](file:///Users/amann/Documents/Vrinda/src/data/products.js). To add or edit products in the future, simply update that file!
# vrinda
