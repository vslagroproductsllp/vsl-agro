import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Mail } from 'lucide-react'
import wheatImg from '../assets/wheat_grain.jpg'
import wheatFlourImg from '../assets/wheat_flour.jpg'
import redChilliImg from '../assets/red_chilli.jpg'
import turmericImg from '../assets/turmeric.jpg'
import corianderImg from '../assets/coriander.jpg'
import chickpeasImg from '../assets/chickpeas.jpg'

import fallbackWheat from '../assets/cat_wheat.jpg'
import fallbackSpices from '../assets/cat_spices.jpg'
import fallbackPulses from '../assets/cat_pulses.jpg'
import fallbackOilseeds from '../assets/cat_oilseeds.jpg'
import fallbackFlours from '../assets/products.jpg'

import './Products.css'

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'wheat', label: 'Wheat & Atta' },
  { id: 'spices', label: 'Spices' },
  { id: 'pulses', label: 'Pulses & Flours' },
  { id: 'oilseeds', label: 'Oilseeds' },
  { id: 'flours', label: 'Grain Flours' },
]

const JEERA_IMG = 'https://media.istockphoto.com/id/1346906247/photo/cumin-seeds-called-jeera-in-clay-bowl-and-its-powder-in-white-bowl-on-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=4LfQOPtE0FLEjTM1BNfxOIEGp2Yzw4_YM_TMKQN-CN8='
const SESAME_IMG = 'https://images.unsplash.com/photo-1628317321557-68729bee6644?q=80&w=600&auto=format&fit=crop'
const MUSTARD_IMG = 'https://plus.unsplash.com/premium_photo-1725551070695-303d5790b287?w=600&auto=format&fit=crop&q=60'
const MULTIGRAIN_IMG = 'https://images.unsplash.com/photo-1647018763651-e32158974419?q=80&w=600&auto=format&fit=crop'
const PULSEFOUR_IMG = 'https://images.unsplash.com/photo-1586137712370-9b450509c587?q=80&w=600&auto=format&fit=crop'

const gen = (prompt) => `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=600&height=400&nologo=true`

const products = [
  // ── Wheat & Atta ──
  {
    id: 1, category: 'wheat',
    image: wheatImg, fallback: fallbackWheat,
    name: 'Wheat Grains',
    subtext: '30 KG bags',
    description: 'Premium quality wheat grains — wide range of varieties, carefully cleaned, sorted, and packed for freshness.',
    tags: ['Clean & Sorted', 'Wide Range', '30 KG Bags'],
    highlights: ['Premium varieties', 'Machine cleaned', 'Hygienically sorted'],
  },
  {
    id: 2, category: 'wheat',
    image: wheatFlourImg, fallback: fallbackWheat,
    name: 'Wheat Flour / Atta',
    subtext: '1 KG · 5 KG · 10 KG · 30 KG',
    description: 'Soft and fine wheat flour milled from the best quality wheat. Available in multiple pack sizes to suit every need.',
    tags: ['Multiple Sizes', 'Fine Milling', 'Clean'],
    highlights: ['1 KG, 5 KG, 10 KG, 30 KG', 'Fine & soft texture', 'Uniform grind'],
  },
  // ── Spices ──
  {
    id: 3, category: 'spices',
    image: redChilliImg, fallback: fallbackSpices,
    name: 'Red Chilli / Laal Mirchi',
    subtext: 'Kashmiri & Premium Varieties',
    description: 'Vibrant Kashmiri red chilli and premium varieties — known for their deep colour, rich aroma, and consistent heat.',
    tags: ['Kashmiri', 'Deep Colour', 'Aromatic'],
    highlights: ['Kashmiri variety', 'Natural bright colour', 'Rich aroma'],
  },
  {
    id: 4, category: 'spices',
    image: turmericImg, fallback: fallbackSpices,
    name: 'Turmeric / Haldi Powder',
    subtext: 'Premium Ground Turmeric',
    description: 'Pure turmeric powder with high curcumin content — bright golden colour, earthy aroma, and consistent quality.',
    tags: ['High Curcumin', 'Golden Colour', 'Pure'],
    highlights: ['Bright golden hue', 'High curcumin', 'No additives'],
  },
  {
    id: 5, category: 'spices',
    image: JEERA_IMG, fallback: fallbackSpices,
    name: 'Cumin / Jeera',
    subtext: 'Seeds & Powder',
    description: 'Aromatic cumin seeds and powder — carefully sourced and cleaned to deliver consistent flavour every time.',
    tags: ['Aromatic', 'Clean', 'Premium'],
    highlights: ['Highly aromatic', 'Machine cleaned', 'Seeds & powder form'],
  },
  {
    id: 6, category: 'spices',
    image: corianderImg, fallback: fallbackSpices,
    name: 'Coriander / Dhania',
    subtext: 'Seeds & Powder',
    description: 'Fresh and fragrant coriander — sourced from quality farms and processed with care to retain natural oils.',
    tags: ['Fragrant', 'Fresh', 'Quality Farms'],
    highlights: ['Natural oils retained', 'Fragrant & fresh', 'Seeds & powder'],
  },
  // ── Pulses & Flours ──
  {
    id: 7, category: 'pulses',
    image: chickpeasImg, fallback: fallbackPulses,
    name: 'Chana / Chickpeas',
    subtext: 'Whole & Dal',
    description: 'Premium whole chana and chana dal — clean, bold, and sorted for uniform size and quality.',
    tags: ['Whole & Dal', 'Uniform Size', 'Clean'],
    highlights: ['Whole & split variety', 'Sorted for size', 'Premium grade'],
  },
  {
    id: 8, category: 'pulses',
    image: gen('yellow chickpea flour in a wooden bowl professional food photography'), fallback: fallbackPulses,
    name: 'Chana Flour / Besan',
    subtext: 'Fine Ground Chickpea Flour',
    description: 'Finely milled chickpea flour with smooth texture — ideal for cooking and food manufacturing.',
    tags: ['Fine Texture', 'Versatile', 'Premium'],
    highlights: ['Smooth fine grind', 'Golden yellow colour', 'Versatile use'],
  },
  {
    id: 9, category: 'pulses',
    image: gen('split yellow moong dal lentils in a bowl professional food photography'), fallback: fallbackPulses,
    name: 'Moong Dal',
    subtext: 'Split Green Gram',
    description: 'Tender, clean moong dal — sourced from quality farms and sorted for uniform colour and size.',
    tags: ['Split', 'Clean', 'Tender'],
    highlights: ['Uniform colour', 'Quick cooking', 'Premium quality'],
  },
  {
    id: 10, category: 'pulses',
    image: gen('split pigeon peas toor dal in a bowl professional food photography'), fallback: fallbackPulses,
    name: 'Toor / Tuvar Dal',
    subtext: 'Split Pigeon Pea',
    description: 'Classic toor dal with a rich, earthy flavour — clean, sorted, and ready for your kitchen.',
    tags: ['Clean & Sorted', 'Rich Flavour', 'Classic'],
    highlights: ['Rich earthy flavour', 'Machine sorted', 'Uniform split'],
  },
  {
    id: 11, category: 'pulses',
    image: gen('red lentils in a bowl professional food photography'), fallback: fallbackPulses,
    name: 'Masoor Dal',
    subtext: 'Red Lentils',
    description: 'Tender red lentils with vibrant colour and quick-cook properties — a household essential.',
    tags: ['Red Lentils', 'Quick Cook', 'Vibrant'],
    highlights: ['Vibrant red colour', 'Fast cooking', 'Nutritious'],
  },
  {
    id: 12, category: 'pulses',
    image: gen('split black gram urad dal in a bowl professional food photography'), fallback: fallbackPulses,
    name: 'Urad Dal',
    subtext: 'Black Gram Split',
    description: 'Premium urad dal — sorted, cleaned, and packed for freshness. Ideal for dals, batters, and traditional recipes.',
    tags: ['Split', 'Cleaned', 'Premium'],
    highlights: ['Creamy texture', 'Ideal for batter', 'Sorted & clean'],
  },
  // ── Oilseeds ──
  {
    id: 13, category: 'oilseeds',
    image: gen('raw peanuts groundnuts in a rustic bowl professional food photography'), fallback: fallbackOilseeds,
    name: 'Groundnut / Peanuts',
    subtext: 'Raw & Cleaned',
    description: 'Quality groundnuts — cleaned and sorted for uniform size. Ideal for oil extraction and direct consumption.',
    tags: ['Cleaned', 'Uniform', 'Quality'],
    highlights: ['Oil extraction grade', 'Uniform size', 'Sorted clean'],
  },
  {
    id: 14, category: 'oilseeds',
    image: gen('castor seeds in a bowl professional food photography'), fallback: fallbackOilseeds,
    name: 'Castor Seeds',
    subtext: 'Industrial & Export Grade',
    description: 'High-quality castor seeds for oil extraction — sourced from reliable farms across Gujarat.',
    tags: ['High Oil Content', 'Export Grade', 'Consistent'],
    highlights: ['High oil yield', 'Gujarat sourced', 'Export quality'],
  },
  {
    id: 15, category: 'oilseeds',
    image: SESAME_IMG, fallback: fallbackOilseeds,
    name: 'Sesame / Til',
    subtext: 'White & Brown Varieties',
    description: 'Clean sesame seeds — available in white and natural varieties. Rich in oil and natural nutrients.',
    tags: ['White Variety', 'Clean', 'Oil Rich'],
    highlights: ['White & brown types', 'High oil content', 'Clean sorted'],
  },
  {
    id: 16, category: 'oilseeds',
    image: MUSTARD_IMG, fallback: fallbackOilseeds,
    name: 'Mustard / Rai',
    subtext: 'Yellow & Black Varieties',
    description: 'Pungent and aromatic mustard seeds — clean, sorted, and packed for use in cooking and oil pressing.',
    tags: ['Yellow & Black', 'Aromatic', 'Clean'],
    highlights: ['Two varieties', 'Pungent aroma', 'Sorted & clean'],
  },
  // ── Grain Flours ──
  {
    id: 17, category: 'flours',
    image: gen('pearl millet bajri flour in a bowl professional food photography'), fallback: fallbackFlours,
    name: 'Bajri / Pearl Millet Flour',
    subtext: 'Stone Ground',
    description: 'Nutritious bajra flour milled from premium pearl millet — great for rotis and traditional recipes.',
    tags: ['Stone Ground', 'Nutritious', 'Traditional'],
    highlights: ['Traditional stone mill', 'Nutty flavour', 'Rich in iron'],
  },
  {
    id: 18, category: 'flours',
    image: gen('sorghum jowar flour in a bowl professional food photography'), fallback: fallbackFlours,
    name: 'Jowar / Sorghum Flour',
    subtext: 'Gluten-Free Millet Flour',
    description: 'Pure jowar flour — a healthy, gluten-free grain flour perfect for flatbreads and traditional cooking.',
    tags: ['Gluten-Free', 'Traditional', 'Healthy'],
    highlights: ['Gluten-free grain', 'High fibre', 'Traditional taste'],
  },
  {
    id: 19, category: 'flours',
    image: MULTIGRAIN_IMG, fallback: fallbackFlours,
    name: 'Multi-Grain Flour',
    subtext: 'Blend of Selected Cereals',
    description: 'A wholesome blend of multiple grains — crafted for nutrition, flavour, and everyday use.',
    tags: ['Multi-Grain', 'Nutritious', 'Wholesome'],
    highlights: ['Multiple grains', 'Balanced nutrition', 'Everyday use'],
  },
  {
    id: 20, category: 'flours',
    image: PULSEFOUR_IMG, fallback: fallbackFlours,
    name: 'Pulse-Based Flours',
    subtext: 'Assorted Pulse Flours',
    description: 'Flour milled from selected pulses — for cooking, baking, and manufacturing use. Custom blends available.',
    tags: ['Custom Blends', 'Multiple Pulses', 'Versatile'],
    highlights: ['Pulse-based', 'Custom blends', 'Multiple varieties'],
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="products-page">
      {/* Page header */}
      <section className="products-hero">
        <div className="container products-hero__inner">
          <div className="section-badge"><span className="dot" />Our Products</div>
          <h1 className="products-hero__title">Quality in <span>Every Grain</span></h1>
          <p className="products-hero__sub">
            A complete range of premium agricultural commodities and processed food products —
            all cleaned, sorted, and packed with care from Mehsana, Gujarat.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="products-controls">
        <div className="container products-controls__inner">
          <div className="products-search">
            <Search size={16} className="products-search__icon" />
            <input
              id="product-search"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="products-search__input"
              aria-label="Search products"
            />
          </div>
          <div className="products-tabs" role="tablist" aria-label="Product categories">
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`products-tab ${activeCategory === cat.id ? 'products-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="products-grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="products-empty">
              <span className="products-empty__emoji">🔍</span>
              <h3>No products found</h3>
              <p>Try a different search or category</p>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map(product => (
                <div className="product-detail-card" key={product.id}>
                  <div className="product-detail-card__image-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-detail-card__image"
                      onError={(e) => { e.target.src = product.fallback; e.target.onerror = null; }}
                    />
                  </div>
                  <div className="product-detail-card__content">
                    <div className="product-detail-card__meta">
                      <h2 className="product-detail-card__name">{product.name}</h2>
                      <span className="product-detail-card__subtext">{product.subtext}</span>
                    </div>
                    <p className="product-detail-card__desc">{product.description}</p>
                    <ul className="product-detail-card__highlights">
                      {product.highlights.map(h => (
                        <li key={h}><span className="check">✓</span> {h}</li>
                      ))}
                    </ul>
                    <div className="product-detail-card__tags">
                      {product.tags.map(t => (
                        <span className="product-tag" key={t}>{t}</span>
                      ))}
                    </div>
                    
                    <div className="product-detail-card__actions">
                      <a
                        href={`https://wa.me/919427601112?text=Hello%20VSL%20Agro,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-detail-card__cta product-detail-card__cta--wa"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:vslagroproductsllp@gmail.com?subject=Inquiry:%20${encodeURIComponent(product.name)}&body=Hello%20VSL%20Agro,%0D%0A%0D%0AI%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20details%20and%20pricing.`}
                        className="product-detail-card__cta product-detail-card__cta--mail"
                      >
                        <Mail size={15} />
                        Email
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
          {filtered.length > 0 && (
            <p className="products-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>
          )}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="products-inquiry-strip">
        <div className="container products-inquiry-strip__inner">
          <div>
            <h3 className="products-inquiry-strip__title">Don't see what you need?</h3>
            <p className="products-inquiry-strip__sub">We handle a wide range of agro commodities. Get in touch and we'll help you.</p>
          </div>
          <Link to="/contact" className="btn-primary">
            Send an Inquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
