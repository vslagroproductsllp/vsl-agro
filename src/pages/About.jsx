import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Target, Eye, Heart } from 'lucide-react'
import productsImg from '../assets/products.jpg'
import heroImg from '../assets/hero.jpg'
import './About.css'

const values = [
  {
    icon: <Target size={22} />,
    title: 'Quality First',
    desc: 'We start with the finest raw materials and process them under strict hygiene and quality standards.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Customer Commitment',
    desc: 'We build long-term relationships through reliable supply, consistent quality, and honest business.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Transparency',
    desc: 'Clean processing, honest sourcing, and clear communication — nothing hidden.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Gujarat Roots',
    desc: 'Proudly based in Mehsana, Gujarat — a region known for its agricultural richness and heritage.',
  },
]

export default function About() {
  return (
    <div className="about-page">
      {/* ── Header ── */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src={heroImg} alt="Wheat field background" />
          <div className="about-hero__overlay" />
        </div>
        <div className="container about-hero__content">
          <div className="section-badge about-hero__badge"><span className="dot" />Our Story</div>
          <h1 className="about-hero__title">
            About VSL Agro<br /><span>Products LLP</span>
          </h1>
          <p className="about-hero__sub">
            Quality You Can Trust. Purity You Can See.
          </p>
        </div>
      </section>

      {/* ── Story section ── */}
      <section className="about-story">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <div className="section-badge"><span className="dot" />Who We Are</div>
            <h2 className="section-title">An Agro Brand <span>Built on Trust</span></h2>
            <p>
              VSL Agro Products LLP is an agro-processing and food products company based in
              <strong> Balad, Taluka Kheralu, Mehsana, Gujarat</strong>, dedicated to providing quality
              agricultural and food products with a strong focus on purity, consistency, hygiene,
              and customer satisfaction.
            </p>
            <p>
              The company was started by <strong>Shri Savjibhai Lavjibhai Chaudhari</strong> with a
              vision of building a trusted name in the agro and food-processing industry. Today, VSL
              Agro Products LLP works with a diverse range of agricultural commodities and processed
              food products, serving the needs of customers and businesses with reliable quality.
            </p>
            <p>
              From carefully selected wheat and spices to pulses, oilseeds, and grain flours — every
              product we offer goes through a thorough process of cleaning, sorting, and hygienic
              packaging before reaching our customers.
            </p>

            <div className="about-story__quote">
              <span className="about-story__quote-mark">"</span>
              Quality in Every Grain, Purity in Every Product.
              <span className="about-story__quote-mark">"</span>
              <div className="about-story__quote-author">— Shri Savjibhai Lavjibhai Chaudhari, Founder</div>
            </div>
          </div>

          <div className="about-story__visual">
            <div className="about-story__img-wrap">
              <img src={productsImg} alt="VSL Agro Products assortment" />
            </div>
            <div className="about-story__info-card">
              <div className="info-stat">
                <span className="info-stat__num">30+</span>
                <span className="info-stat__label">Products</span>
              </div>
              <div className="info-stat__divider" />
              <div className="info-stat">
                <span className="info-stat__num">5+</span>
                <span className="info-stat__label">Categories</span>
              </div>
              <div className="info-stat__divider" />
              <div className="info-stat">
                <span className="info-stat__num">Gujarat</span>
                <span className="info-stat__label">Origin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values">
        <div className="container">
          <div className="about-values__header">
            <div className="section-badge"><span className="dot" />Our Values</div>
            <h2 className="section-title">What We <span>Stand For</span></h2>
            <p className="section-subtitle">
              Our commitment to quality is reflected in everything we do — from sourcing to packaging.
            </p>
          </div>
          <div className="about-values__grid">
            {values.map(v => (
              <div className="value-card" key={v.title}>
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitment ── */}
      <section className="about-commitment">
        <div className="container about-commitment__inner">
          <div className="about-commitment__content">
            <div className="section-badge"><span className="dot" />Our Commitment</div>
            <h2 className="section-title">Quality Starts at <span>the Source</span></h2>
            <p>
              At VSL Agro Products LLP, we believe that quality begins with the selection of the right
              agricultural produce. We focus on careful processing, cleanliness, consistency, and
              proper packaging to ensure that our products meet the expectations of our customers.
            </p>
            <p>
              Our goal is to build long-term relationships by providing quality products, dependable
              supply, and consistent service.
            </p>

            <div className="about-commitment__list">
              {[
                'Careful selection of raw materials',
                'Clean and hygienic processing',
                'Consistent quality across all batches',
                'Proper and airtight packaging',
                'Timely and dependable supply',
              ].map(item => (
                <div className="about-commitment__item" key={item}>
                  <span className="about-commitment__check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-commitment__vision">
            <div className="vision-card">
              <div className="vision-card__icon">
                <Eye size={28} />
              </div>
              <h3 className="vision-card__title">Our Vision</h3>
              <p className="vision-card__text">
                We aim to establish VSL Agro Products LLP as a trusted and recognized name in the
                agro-processing and food-products industry, connecting quality agricultural commodities
                with customers through responsible processing and reliable products.
              </p>
              <div className="vision-card__address">
                <MapPin size={14} />
                Balad, Taluka Kheralu, Mehsana, Gujarat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2 className="about-cta__title">Ready to Do Business With Us?</h2>
          <p className="about-cta__sub">
            Send us an inquiry and let's talk about how VSL Agro can serve your needs.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
