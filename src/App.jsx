import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AchievementsPage from './pages/Achievements'
import ProjectsPage from './pages/Projects'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'

function App() {
  const [theme, setTheme] = useState('synthwave')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'synthwave' ? 'emerald' : 'synthwave')
  }

  return (
    <Router basename={import.meta.env.PROD ? '/myPortfolio' : undefined}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App