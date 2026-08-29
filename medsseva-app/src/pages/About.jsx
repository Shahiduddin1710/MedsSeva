import { Link } from 'react-router-dom'
import useScrollReveal from '../components/useScrollReveal'
import aboutImg from '/About.png'
import styles from '../styles/About.module.css'

const whatWeDo = [
  {
    icon: 'science',
    title: 'Diagnostic Testing',
    desc: 'A wide spectrum of pathology and clinical tests ensuring accurate and timely results for informed health decisions.',
  },
  {
    icon: 'home_health',
    title: 'Home Collection',
    desc: 'Professional phlebotomists collect samples from the comfort and safety of your home, saving you time and hassle.',
  },
  {
    icon: 'biotech',
    title: 'Laboratory Services',
    desc: 'State-of-the-art facilities equipped with advanced technology for precise sample processing and analysis.',
  },
  {
    icon: 'smartphone',
    title: 'Digital Reports',
    desc: 'Secure, easy-to-understand digital health reports accessible anytime, anywhere via our seamless platform.',
  },
]

const values = [
  {
    icon: 'favorite',
    title: 'Patient First',
    desc: 'Every process is designed around your comfort and health outcomes, ensuring a stress-free experience from start to finish.',
  },
  {
    icon: 'verified_user',
    title: 'Transparency',
    desc: 'Clear pricing, traceable sample tracking, and straightforward reports with no hidden complexities.',
  },
  {
    icon: 'schedule',
    title: 'Convenience',
    desc: 'From doorstep sample collection to digital delivery of results, we integrate into your busy life.',
  },
  {
    icon: 'devices',
    title: 'Technology Driven',
    desc: 'Leveraging modern lab technology and digital platforms for faster turnarounds and higher accuracy.',
  },
]

export default function About() {
  useScrollReveal()

  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className="section-label fade-up">Welcome to MedsSeva</span>
            <h1 className={`${styles.heroTitle} fade-up stagger-1`}>
              Healthcare Made Simple.<br />
              <span className={styles.heroAccent}>Diagnostics Made Reliable.</span>
            </h1>
            <p className={`${styles.heroDesc} fade-up stagger-2`}>
              At MedsSeva, we believe that accessing reliable diagnostics should be as simple as ordering a meal. We are committed to providing accessible, convenient, and technology-driven healthcare solutions straight to your door or at our state-of-the-art labs.
            </p>
            <div className={`${styles.heroActions} fade-up stagger-3`}>
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
            </div>
          </div>

          <div className={`${styles.heroImageWrap} fade-in stagger-2`}>
            <img src={aboutImg} alt="MedsSeva diagnostics team and lab services" className={styles.heroImage} />
            <div className={styles.heroGradient} />
          </div>
        </div>
        <div className={styles.heroBg} aria-hidden="true" />
      </section>

      <section className={styles.mission}>
        <div className="container">
          <div className={`${styles.missionCard} fade-up`}>
            <span className="material-symbols-outlined icon-filled" style={{ fontSize: '48px', color: 'var(--primary)' }}>flag</span>
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionText}>
              To democratize access to high-quality diagnostics by prioritizing patient convenience, leveraging cutting-edge technology, and delivering precision medical testing with a human touch. Whether through home collection or our clinical facilities, your health is our paramount service.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.whatWeDo}>
        <div className="container">
          <div className={`${styles.sectionHead} fade-up`}>
            <span className="section-label">Our Offerings</span>
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">Comprehensive diagnostic solutions tailored for your lifestyle.</p>
          </div>

          <div className={styles.whatGrid}>
            {whatWeDo.map((item, i) => (
              <div key={item.title} className={`${styles.whatCard} fade-up stagger-${i + 1}`}>
                <div className={styles.whatIcon}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h3 className={styles.whatTitle}>{item.title}</h3>
                  <p className={styles.whatDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <div className={`${styles.sectionHead} fade-up`}>
            <span className="section-label">Our Values</span>
            <h2 className="section-title">Why Choose MedsSeva</h2>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={v.title} className={`${styles.valueCard} fade-up stagger-${i + 1}`}>
                <span className="material-symbols-outlined icon-filled" style={{ fontSize: '32px', color: 'var(--primary)', flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className="container">
          <div className={`${styles.storyCard} fade-up`}>
            <div className={styles.storyBadge}>Our Story</div>
            <h2 className={styles.storyTitle}>From Observation to Innovation</h2>
            <div className={styles.storyText}>
              <p>
                MedsSeva was born from a simple observation: accessing essential diagnostic tests was often too difficult, time-consuming, and stressful for patients. The traditional model required taking time off work, traveling to crowded centers, and waiting days for paper reports.
              </p>
              <p>
                We set out to build a system that respects the patient's time and well-being. By integrating seamless online booking, professional home sample collection, and rapid digital reporting, we transformed the diagnostic journey. Today, we bridge the gap between clinical excellence and patient convenience, ensuring that reliable healthcare data is always within reach.
              </p>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  )
}