import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import TermsPrivacyPage from './pages/TermsPrivacyPage'


function App() {

  return (

    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/terms-privacy" element={<TermsPrivacyPage />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App
