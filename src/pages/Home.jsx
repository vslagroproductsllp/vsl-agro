import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Leaf, Package, Star, ChevronRight } from 'lucide-react'
import heroImg from '../assets/hero.jpg'
import productsImg from '../assets/products.jpg'
import wheatImg from '../assets/wheat_grain.jpg'
import redChilliImg from '../assets/red_chilli.jpg'
import turmericImg from '../assets/turmeric.jpg'
import chickpeasImg from '../assets/chickpeas.jpg'
import oilseedsImg from '../assets/cat_oilseeds.jpg'
import './Home.css'

const JEERA_IMG = 'https://media.istockphoto.com/id/1346906247/photo/cumin-seeds-called-jeera-in-clay-bowl-and-its-powder-in-white-bowl-on-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=4LfQOPtE0FLEjTM1BNfxOIEGp2Yzw4_YM_TMKQN-CN8='

const features = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Quality Assured',
    desc: 'Every product is carefully selected, cleaned, and sorted to meet the highest standards.',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Natural & Pure',
    desc: 'Straight from Gujarat\'s farmlands — no additives, no shortcuts, just pure goodness.',
  },
  {
    icon: <Package size={22} />,
    title: 'Hygienic Packaging',
    desc: 'Packed in hygienic conditions to preserve freshness and extend shelf life.',
  },
  {
    icon: <Star size={22} />,
    title: 'Trusted by Many',
    desc: 'Built on years of experience and a commitment to consistent, reliable supply.',
  },
]

const productHighlights = [
  { 
    image: wheatImg, 
    name: 'Wheat & Atta', 
    desc: 'Premium wheat grains & flour in multiple pack sizes', 
    category: 'wheat',
  },
  { 
    image: redChilliImg, 
    name: 'Red Chilli', 
    desc: 'Kashmiri & premium varieties, vibrant colour & aroma', 
    category: 'spices',
  },
  { 
    image: turmericImg, 
    name: 'Turmeric / Haldi', 
    desc: 'Rich golden powder with high curcumin content', 
    category: 'spices',
  },
  { 
    image: chickpeasImg, 
    name: 'Pulses & Dal', 
    desc: 'Chana, Moong, Toor, Masoor, Urad & more', 
    category: 'pulses',
  },
  { 
    image: JEERA_IMG, 
    name: 'Cumin / Jeera', 
    desc: 'Aromatic and clean cumin seeds & powder', 
    category: 'spices',
  },
  { 
    image: oilseedsImg, 
    name: 'Oilseeds', 
    desc: 'Castor, Groundnut, Sesame, Mustard & more', 
    category: 'oilseeds',
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero" aria-label="Hero banner">
        <div className="hero__bg">
          <img src={heroImg} alt="Golden wheat field at sunrise" className="hero__img" />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="dot" />
              Gujarat's Trusted Agro Brand
            </div>
            <h1 className="hero__title">
              Quality You Can Trust.<br />
              <span className="hero__title-accent">Purity You Can See.</span>
            </h1>
            <p className="hero__desc">
              Premium wheat, spices, pulses and oilseeds — carefully processed
              and packed with hygiene from Mehsana, Gujarat.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn-primary hero__btn-main">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="hero__btn-ghost">
                Get a Quote <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator" aria-hidden="true">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ── Products Preview (Moved before Why Choose Us) ── */}
      <section className="products-preview" aria-label="Product highlights">
        <div className="container">
          <div className="products-preview__header">
            <div>
              <div className="section-badge"><span className="dot" />Our Range</div>
              <h2 className="section-title">Our <span>Products</span></h2>
              <p className="section-subtitle">
                A diverse portfolio of agricultural commodities and processed
                food products — all clean, sorted, and quality-checked.
              </p>
            </div>
            <Link to="/products" className="btn-secondary products-preview__see-all">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-preview__grid">
            {productHighlights.map((p) => (
              <Link to="/products" className="product-card" key={p.name}>
                <div className="product-card__image-box">
                  <img src={p.image} alt={p.name} className="product-card__img" />
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.desc}</p>
                </div>
                <div className="product-card__arrow">
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="features" aria-label="Why choose us">
        <div className="container features__inner">
          <div className="features__header">
            <div className="section-badge"><span className="dot" />Our Promise</div>
            <h2 className="section-title">Why Choose <span>VSL Agro?</span></h2>
            <p className="section-subtitle">
              We combine traditional values with modern processing to bring you
              the finest agro products from Gujarat.
            </p>
          </div>
          <div className="features__grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-card__icon">{f.icon}</div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="about-strip" aria-label="About VSL Agro">
        <div className="container about-strip__inner">
          <div className="about-strip__image-wrap">
            <img src={productsImg} alt="VSL Agro products assortment" className="about-strip__img" />
            <div className="about-strip__badge">
              <Leaf size={18} />
              Farm to Table
            </div>
          </div>
          <div className="about-strip__content">
            <div className="section-badge"><span className="dot" />Our Story</div>
            <h2 className="section-title">Founded on <span>Purity &amp; Trust</span></h2>
            <p className="about-strip__text">
              VSL Agro Products LLP was started by <strong>Shri Savjibhai Lavjibhai Chaudhari</strong> with
              a simple yet powerful vision — to build a trusted name in the agro and food-processing industry
              of Gujarat.
            </p>
            <p className="about-strip__text">
              Based in <strong>Balad, Taluka Kheralu, Mehsana</strong>, we serve customers and businesses
              with a diverse range of agricultural commodities, processed with care and packed with consistency.
            </p>
            <Link to="/about" className="btn-primary about-strip__btn">
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner" aria-label="Contact call to action">
        <div className="container cta-banner__inner">
          <div className="cta-banner__text">
            <h2 className="cta-banner__title">Ready to Place an Inquiry?</h2>
            <p className="cta-banner__sub">
              Reach out to us for product details, custom packaging, and bulk orders.
            </p>
          </div>
          <Link to="/contact" className="cta-banner__btn">
            Inquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
