import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import About from './pages/About'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Contact from './pages/Contact'
import BuildDownload from './pages/BuildDownload'
import Copyright from './pages/Copyright'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [stage, setStage] = useState('enter-active')
  const prevLocation = useRef(location)

  useEffect(() => {
    if (location.pathname !== prevLocation.current.pathname) {
      setStage('enter')
      const t1 = setTimeout(() => {
        setDisplayLocation(location)
        setStage('enter-active')
        prevLocation.current = location
        window.scrollTo({ top: 0, behavior: 'instant' })
      }, 120)
      return () => clearTimeout(t1)
    }
  }, [location])

  return (
    <div
      style={{
        opacity: stage === 'enter' ? 0 : 1,
        transform: stage === 'enter' ? 'translateY(12px)' : 'translateY(0)',
        transition: 'opacity 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
     <Route path="/contact" element={<Contact />} />
      <Route path="/download" element={<BuildDownload />} />
        <Route path="/copyright" element={<Copyright />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <ScrollProgress />
        <Navbar />
        <main className="page-main">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}