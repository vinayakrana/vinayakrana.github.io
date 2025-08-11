import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ScrollIndicator from './components/ScrollIndicator'
import Home from './pages/Home'
import Publications from './pages/Publications'
import Timeline from './pages/Timeline'
import TechNuggets from './pages/TechNuggets'
import Apps from './pages/Apps'

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: var(--primary-color);
  overflow-x: hidden;
`

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`

function App() {
  return (
    <Router>
      <AppContainer>
        <ParticleBackground />
        <ScrollIndicator />
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/tech-nuggets" element={<TechNuggets />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App
