import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useScrollReveal from '../components/useScrollReveal'
import homeImg from '/Home.png'
import bloodTestImg from '/Blood-Test.png'
import fullBodyImg from '/full-body.png'
import homeCollectionImg from '/Home-Collection.png'
import reportImg from '/report.png'
import prescriptionImg from '/prescription.png'
import labImg from '/lab.png'
import styles from '../styles/Home.module.css'

const services = [
  {
    img: bloodTestImg,
    category: 'Accurate Diagnostics',
    title: 'Blood Tests',
    desc: 'Reliable laboratory testing with convenient booking and sample collection options.',
  },
  {
    img: fullBodyImg,
    category: 'Complete Health Packages',
    title: 'Full Body Checkup',
    desc: 'Comprehensive health packages designed to help you monitor your overall wellbeing.',
  },
  {
    img: homeCollectionImg,
    category: 'Testing at Your Doorstep',
    title: 'Home Collection',
    desc: 'Book a convenient sample collection from the comfort of your own home.',
  },
  {
    img: reportImg,
    category: 'Access Your Reports Online',
    title: 'Report Delivery',
    desc: 'View and download your diagnostic reports securely from your account, anytime.',
  },
  {
    img: prescriptionImg,
    category: 'Upload Your Prescription Easily',
    title: 'Prescription Upload',
    desc: 'Upload your prescription and our team helps identify the tests you need.',
  },
  {
    img: labImg,
    category: 'Book Your Lab Appointment',
    title: 'Lab Visit',
    desc: 'Choose a convenient laboratory visit and book your diagnostic test in advance.',
  },
]

const whyChoose = [
  {
    icon: 'health_and_safety',
    title: 'Convenient Healthcare',
    desc: 'Accessible services tailored to your schedule, wherever you are.',
  },
  {
    icon: 'home_work',
    title: 'Home Sample Collection',
    desc: 'Safe and hygienic collection by certified phlebotomists at your doorstep.',
  },
  {
    icon: 'description',
    title: 'Secure Digital Reports',
    desc: 'Access your medical history and reports anytime, anywhere.',
  },
  {
    icon: 'touch_app',
    title: 'Simple Booking',
    desc: 'User-friendly platform for hassle-free scheduling in minutes.',
  },
]

const steps = [
  { num: '01', title: 'Choose a Test', desc: 'Select from our comprehensive list of diagnostic tests and packages.' },
  { num: '02', title: 'Select Option', desc: 'Prefer home collection or a lab visit-your choice, your comfort.' },
  { num: '03', title: 'Complete Booking', desc: 'Confirm your details, select a time slot, and you are done.' },
  { num: '04', title: 'Receive Report', desc: 'Get notified the moment your digital results are ready.' },
]

export default function Home() {
  useScrollReveal()
  const navigate = useNavigate()

  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={`section-label fade-up`}>Premium Diagnostic Services</span>
            <h1 className={`${styles.heroTitle} fade-up stagger-1`}>
              Smart Diagnostics.<br />
              <span className={styles.heroAccent}>Better Care.</span>
            </h1>
            <p className={`${styles.heroDesc} fade-up stagger-2`}>
              Book diagnostic tests, schedule convenient home sample collection, visit a lab near you, upload prescriptions, and access your reports securely online.
            </p>
            <div className={`${styles.heroActions} fade-up stagger-3`}>
        <button onClick={() => navigate('/download')} className="btn-primary">
                Book a Test
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </button>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
            <div className={`${styles.heroBadges} fade-up stagger-4`}>
              <span className={styles.badge}>
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '18px', color: 'var(--primary)' }}>check_circle</span>
                NABL Accredited Labs
              </span>
              <span className={styles.badge}>
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '18px', color: 'var(--primary)' }}>check_circle</span>
                Fast Digital Reports
              </span>
            </div>
          </div>

          <div className={`${styles.heroImageWrap} fade-in stagger-2`}>
            <img src={homeImg} alt="MedsSeva diagnostic services-home sample collection and lab testing" className={styles.heroImage} />
            <div className={styles.heroImageGradient} />
            <div className={styles.heroBubble1}>
              <span className="material-symbols-outlined icon-filled" style={{ fontSize: '22px', color: 'var(--primary)' }}>home_health</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--on-surface)' }}>Home Collection</div>
                <div style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>Available today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <div className={`${styles.sectionHead} fade-up`}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Diagnostic services designed around convenience, accuracy, and better access to healthcare.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div key={s.title} className={`card ${styles.serviceCard} fade-up stagger-${Math.min(i + 1, 6)}`}>
                <div className={styles.serviceImgWrap}>
                  <img src={s.img} alt={s.title} className={styles.serviceImg} loading="lazy" />
                </div>
                <div className={styles.serviceBody}>
                  <span className={`section-label ${styles.serviceCategory}`}>{s.category}</span>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className="container">
          <div className={`${styles.sectionHead} fade-up`}>
            <span className="section-label">Why MedsSeva</span>
            <h2 className="section-title">Why Choose MedsSeva</h2>
            <p className="section-subtitle">We combine advanced technology with a patient-first approach to deliver care that fits your life.</p>
          </div>

          <div className={styles.whyGrid}>
            {whyChoose.map((item, i) => (
              <div key={item.title} className={`${styles.whyCard} fade-up stagger-${i + 1}`}>
                <div className={styles.whyIcon}>
                  <span className="material-symbols-outlined icon-filled">{item.icon}</span>
                </div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.howSection}>
        <div className="container">
          <div className={`${styles.sectionHead} fade-up`} style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">How It Works</h2>
          </div>

          <div className={styles.stepsRow}>
            {steps.map((step, i) => (
              <div key={step.num} className={`${styles.step} fade-up stagger-${i + 1}`}>
                <div className={styles.stepNum}>{step.num}</div>
                {i < steps.length - 1 && <div className={styles.stepConnector} aria-hidden="true" />}
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={`${styles.ctaCard} fade-up`}>
            <div className={styles.ctaContent}>
              <span className="section-label" style={{ color: 'var(--primary-fixed-dim)' }}>Get Started</span>
              <h2 className={styles.ctaTitle}>Ready to Take the Next Step?</h2>
              <p className={styles.ctaDesc}>
                Book your diagnostic test with MedsSeva and choose the healthcare experience that works for you.
              </p>
              <div className={styles.ctaActions}>
       <button onClick={() => navigate('/download')} className={styles.ctaBtnPrimary}>
                  Book a Test
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </button>
                <Link to="/contact" className={styles.ctaBtnOutline}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}