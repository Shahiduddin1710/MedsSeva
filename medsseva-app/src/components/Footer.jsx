import { Link } from 'react-router-dom'
import logo from '/logo.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link to="/" aria-label="MedsSeva - Home">
            <img src={logo} alt="MedsSeva" className={styles.logo} />
          </Link>
          <p className={styles.tagline}>Because Health is Service.</p>
          <p className={styles.description}>
            Smart diagnostics for a healthier tomorrow. Delivering accuracy, convenience, and care to every doorstep.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <Link to="/about" className={styles.colLink}>About Us</Link>
          <Link to="/contact" className={styles.colLink}>Contact Us</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Legal</h4>
      <Link to="/privacy-policy" className={styles.colLink}>Privacy Policy</Link>
          <Link to="/terms-and-conditions" className={styles.colLink}>Terms of Service</Link>
          <Link to="/copyright" className={styles.colLink}>Copyright Policy</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <a href="mailto:medssevagroup@gmail.com" className={styles.contactItem}>
            <span className="material-symbols-outlined">mail</span>
            medssevagroup@gmail.com
          </a>
          <a href="tel:+918448030936" className={styles.contactItem}>
            <span className="material-symbols-outlined">call</span>
            +91 8448030936
          </a>
          <div className={styles.contactItem}>
            <span className="material-symbols-outlined">person</span>
            Aman Deep Pal
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
      <p>&copy; {new Date().getFullYear()} MedsSeva Diagnostics. All rights reserved.</p>
        <p className={styles.address}>G-130, Basement Office No. 01, Noida, Gautam Buddha Nagar, UP - 201301</p>
      </div>
    </footer>
  )
}   