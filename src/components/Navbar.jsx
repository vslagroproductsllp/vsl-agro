import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    // Reset scroll state on route change
    setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Transparent only on the homepage when the user is at the very top
  const isTransparent = isHome && !scrolled

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${isTransparent ? 'navbar--transparent' : 'navbar--solid'}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={handleNavClick}>
          <img src="/vsl-agro-logo.png" alt="VSL Agro Products LLP" className="navbar__logo-img" />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}>
            About Us
          </NavLink>
          <NavLink to="/contact" className="btn-primary navbar__cta">
            Inquire Now
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <NavLink to="/" end className="navbar__mobile-link" onClick={handleNavClick}>Home</NavLink>
        <NavLink to="/products" className="navbar__mobile-link" onClick={handleNavClick}>Products</NavLink>
        <NavLink to="/about" className="navbar__mobile-link" onClick={handleNavClick}>About Us</NavLink>
        <NavLink to="/contact" className="navbar__mobile-cta" onClick={handleNavClick}>Inquire Now</NavLink>
      </div>
    </header>
  )
}
