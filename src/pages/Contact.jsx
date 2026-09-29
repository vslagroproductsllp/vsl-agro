import { useState } from 'react'
import { MapPin, Mail, Send, CheckCircle, ChevronDown } from 'lucide-react'
import './Contact.css'

const FORM_EMAIL = 'vslagroproductsllp@gmail.com'

const productList = [
  'Wheat Grains (30 KG)',
  'Wheat Flour / Atta',
  'Red Chilli / Laal Mirchi',
  'Turmeric / Haldi Powder',
  'Cumin / Jeera',
  'Coriander / Dhania',
  'Chana / Chickpeas',
  'Chana Flour / Besan',
  'Moong Dal',
  'Toor / Tuvar Dal',
  'Masoor Dal',
  'Urad Dal',
  'Groundnut / Peanuts',
  'Castor Seeds',
  'Sesame / Til',
  'Mustard / Rai',
  'Bajri / Pearl Millet Flour',
  'Jowar / Sorghum Flour',
  'Multi-Grain Flour',
  'Pulse-Based Flours',
  'Other / Custom Inquiry',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  })

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch(`https://formsubmit.co/${FORM_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `Product Inquiry from ${formData.name} – VSL Agro Website`,
          _template: 'box',
          _captcha: 'false',
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // fallback: submit naturally
      e.target.submit()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      {/* ── Header ── */}
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <div className="section-badge"><span className="dot" />Get In Touch</div>
          <h1 className="contact-hero__title">
            Inquire About Our <span>Products</span>
          </h1>
          <p className="contact-hero__sub">
            Looking for bulk orders, custom packaging, or a specific product? Fill in the
            form below and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="contact-main">
        <div className="container contact-main__inner">
          {/* Left: info */}
          <div className="contact-info">
            <div className="contact-info__card">
              <div className="contact-info__icon">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="contact-info__title">Our Location</h3>
                <p className="contact-info__detail">
                  Balad, Taluka Kheralu,<br />Mehsana, Gujarat, India
                </p>
              </div>
            </div>

            <div className="contact-info__card">
              <div className="contact-info__icon">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="contact-info__title">Email Us</h3>
                <a href="mailto:vslagroproductsllp@gmail.com" className="contact-info__detail contact-info__link">
                  vslagroproductsllp@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info__note">
              <div className="contact-info__note-icon">💡</div>
              <p>
                We typically respond within <strong>1–2 business days</strong>.
                For bulk orders or urgent inquiries, please mention details in the message.
              </p>
            </div>

            {/* Products we offer quick list */}
            <div className="contact-info__products">
              <h4 className="contact-info__products-title">We Supply</h4>
              <ul className="contact-info__products-list">
                {['Wheat & Atta (30 KG)', 'Red Chilli / Kashmiri', 'Turmeric Powder', 'Cumin & Coriander', 'All Pulses & Dals', 'Oilseeds', 'Bajri & Jowar Flour'].map(p => (
                  <li key={p}><span className="check">✓</span> {p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" aria-live="polite">
                <div className="contact-success__icon">
                  <CheckCircle size={40} />
                </div>
                <h2 className="contact-success__title">Inquiry Sent!</h2>
                <p className="contact-success__sub">
                  Thank you for reaching out. We've received your inquiry and will get back to you
                  at <strong>{formData.email}</strong> within 1–2 business days.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => { setSubmitted(false); setFormData({ name:'',email:'',phone:'',company:'',product:'',quantity:'',message:'' }) }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                action={`https://formsubmit.co/${FORM_EMAIL}`}
                method="POST"
                aria-label="Product inquiry form"
              >
                <input type="hidden" name="_subject" value="Product Inquiry from VSL Agro Website" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="contact-form__header">
                  <h2 className="contact-form__title">Product Inquiry Form</h2>
                  <p className="contact-form__sub">No prices shown — we'll discuss everything personally.</p>
                </div>

                {/* Row 1: Name + Email */}
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name" className="form-label">Full Name <span className="required">*</span></label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email" className="form-label">Email Address <span className="required">*</span></label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company" className="form-label">Company / Business Name</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 3: Product + Quantity */}
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="product" className="form-label">Product of Interest <span className="required">*</span></label>
                    <div className="form-select-wrap">
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="" disabled>Select a product</option>
                        {productList.map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="form-select-arrow" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="quantity" className="form-label">Approximate Quantity</label>
                    <input
                      id="quantity"
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 100 KG, 5 bags, etc."
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="form-field">
                  <label htmlFor="message" className="form-label">Message / Additional Details <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your specific requirements, packaging preferences, delivery location, or any other details..."
                    className="form-textarea"
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  className="btn-primary contact-form__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry <Send size={16} />
                    </>
                  )}
                </button>

                <p className="contact-form__note">
                  ✓ No spam, ever. Your details are only used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
