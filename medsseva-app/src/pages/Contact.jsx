import { useState } from 'react'
import useScrollReveal from '../components/useScrollReveal'
import styles from '../styles/Contact.module.css'

const enquiryTypes = [
  { value: '', label: 'Select an option' },
  { value: 'booking', label: 'Test Booking' },
  { value: 'collection', label: 'Home Sample Collection' },
  { value: 'report', label: 'Report Assistance' },
  { value: 'pharmacy', label: 'Pharmacy Services' },
  { value: 'general', label: 'General Enquiry' },
]

const contactDetails = [
  {
    icon: 'support_agent',
    label: 'Customer Support',
    value: 'Bookings, Sample Collection, Reports',
    isText: true,
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'medssevagroup@gmail.com',
    href: 'mailto:medssevagroup@gmail.com',
  },
  {
    icon: 'call',
    label: 'Phone',
    value: '+91 8448030936',
    href: 'tel:+918448030936',
  },
  {
    icon: 'person',
    label: 'Contact Person',
    value: 'Aman Deep Pal',
    isText: true,
  },
  {
    icon: 'location_on',
    label: 'Office Address',
    value: 'G-130, Basement Office No. 01, Noida, Gautam Buddha Nagar, UP – 201301',
    isText: true,
  },
]

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    enquiryType: '',
    subject: '',
    message: '',
  })
const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required'
    if (!form.enquiryType) e.enquiryType = 'Please select an enquiry type'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    try {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Something went wrong')
      setSubmitted(true)
    } catch (err) {
      setErrors({ submit: err.message })
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className="section-label fade-up">Reach Out</span>
            <h1 className={`${styles.heroTitle} fade-up stagger-1`}>
              Let's Talk About<br />
              <span className={styles.heroAccent}>Your Health</span>
            </h1>
            <p className={`${styles.heroDesc} fade-up stagger-2`}>
              We are committed to providing precise diagnostic tests and convenient home sample collection. Our team is ready to assist you with any inquiries regarding our healthcare services.
            </p>
          </div>

          <div className={`${styles.contactCard} fade-up stagger-2`}>
            <h2 className={styles.contactCardTitle}>Contact MedsSeva</h2>
            <div className={styles.contactList}>
              {contactDetails.map((item) => (
                <div key={item.label} className={styles.contactItem}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <p className={styles.contactLabel}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className={styles.contactValue} style={{ color: 'var(--primary)' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={styles.contactValue}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={`${styles.formHead} fade-up`}>
            <span className="section-label">Send a Message</span>
            <h2 className="section-title">How Can We Help?</h2>
            <p className="section-subtitle">
              Have a question about our diagnostic services? Send us a message and our team will get back to you shortly.
            </p>
          </div>

          {submitted ? (
            <div className={`${styles.successCard} fade-up`}>
              <span className="material-symbols-outlined icon-filled" style={{ fontSize: '56px', color: 'var(--primary)' }}>check_circle</span>
              <h3 className={styles.successTitle}>Enquiry Submitted!</h3>
              <p className={styles.successDesc}>
                Thank you for reaching out to MedsSeva. Our team will get back to you as soon as possible at the contact details you provided.
              </p>
              <button
                className="btn-primary"
                onClick={() => { setSubmitted(false); setForm({ fullName: '', mobile: '', email: '', enquiryType: '', subject: '', message: '' }) }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className={`${styles.form} fade-up`} onSubmit={handleSubmit} noValidate>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.fullName && <span className={styles.errorMsg}>{errors.fullName}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="mobile">Mobile Number *</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    className={`${styles.input} ${errors.mobile ? styles.inputError : ''}`}
                    placeholder="Enter your mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                  {errors.mobile && <span className={styles.errorMsg}>{errors.mobile}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="enquiryType">Enquiry Type *</label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    className={`${styles.input} ${styles.select} ${errors.enquiryType ? styles.inputError : ''}`}
                    value={form.enquiryType}
                    onChange={handleChange}
                  >
                    {enquiryTypes.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.enquiryType && <span className={styles.errorMsg}>{errors.enquiryType}</span>}
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={styles.input}
                    placeholder="Brief subject of your enquiry"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label} htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="How can we help you today?"
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>
              </div>

              <div className={styles.formSubmit}>
             <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Submit Enquiry'}
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{loading ? 'hourglass_empty' : 'send'}</span>
                </button>
                <p className={styles.formNote}>Fields marked with * are required.</p>
                {errors.submit && <span className={styles.errorMsg}>{errors.submit}</span>}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}