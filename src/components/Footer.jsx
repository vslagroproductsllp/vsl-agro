import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/vsl-agro-logo.png" alt="VSL Agro Products LLP" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              "Quality in Every Grain,<br />Purity in Every Product."
            </p>
            <div className="footer__trust-badges">
              <span className="trust-badge">✓ Clean & Sorted</span>
              <span className="trust-badge">✓ Hygiene First</span>
              <span className="trust-badge">✓ Consistent Quality</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/"><ChevronRight size={14} />Home</Link></li>
              <li><Link to="/products"><ChevronRight size={14} />Our Products</Link></li>
              <li><Link to="/about"><ChevronRight size={14} />About Us</Link></li>
              <li><Link to="/contact"><ChevronRight size={14} />Contact & Inquiry</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer__col">
            <h4 className="footer__heading">Products</h4>
            <ul className="footer__links">
              <li><Link to="/products"><ChevronRight size={14} />Wheat & Atta</Link></li>
              <li><Link to="/products"><ChevronRight size={14} />Spices</Link></li>
              <li><Link to="/products"><ChevronRight size={14} />Pulses & Flours</Link></li>
              <li><Link to="/products"><ChevronRight size={14} />Oilseeds</Link></li>
              <li><Link to="/products"><ChevronRight size={14} />Grain Flours</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Get In Touch</h4>
            <ul className="footer__contact">
              <li>
                <MapPin size={15} />
                <span>Balad, Taluka Kheralu,<br />Mehsana, Gujarat</span>
              </li>
              <li>
                <Mail size={15} />
                <a href="mailto:vslagroproductsllp@gmail.com">vslagroproductsllp@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} VSL Agro Products LLP. All rights reserved.</p>
          <p>Made with ❤️ in Gujarat, India</p>
        </div>
      </div>
    </footer>
  )
}
