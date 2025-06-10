import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import TermsPrivacyPage from './pages/TermsPrivacyPage'
import { motion, AnimatePresence } from "framer-motion"

function App() {

  const api = import.meta.env.VITE_APP_API_URL

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* <main className="flex-grow"> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/terms-privacy" element={<TermsPrivacyPage />} />
              {/* <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>

  )
}

export default App
