import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Simple test components
const TestPublications = () => (
  <div style={{ color: 'white', padding: '80px 20px 20px', background: '#0f172a', minHeight: '100vh' }}>
    <h1>Publications</h1>
    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
      <span style={{ background: '#3b82f6', padding: '5px 10px', borderRadius: '15px', fontSize: '14px' }}>
        🕒 Under Review
      </span>
      <h3 style={{ margin: '15px 0 10px' }}>
        <a 
          href="https://aaai.org/conference/aaai/aaai-26/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#3b82f6', textDecoration: 'none' }}
          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
        >
          AAAI Conference on Artificial Intelligence 2026
        </a>
      </h3>
      <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
        Currently have a research paper under review for the AAAI 2026 conference.
      </p>
    </div>
  </div>
)

const TestTimeline = () => (
  <div style={{ color: 'white', padding: '80px 20px 20px', background: '#0f172a', minHeight: '100vh' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Timeline</h1>
    
    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
      {/* Timeline Line */}
      <div style={{ 
        position: 'absolute', 
        left: '30px', 
        top: '0', 
        bottom: '0', 
        width: '2px', 
        background: 'linear-gradient(180deg, #3b82f6, #8b5cf6)', 
        zIndex: 1 
      }}></div>
      
      {/* Timeline Items */}
      <div style={{ paddingLeft: '80px' }}>
        
        {/* November 2024 - Sustainability Lab */}
        <div style={{ marginBottom: '3rem', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            left: '-65px', 
            top: '10px', 
            width: '16px', 
            height: '16px', 
            background: '#10b981', 
            borderRadius: '50%', 
            border: '3px solid #0f172a',
            zIndex: 2 
          }}></div>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <div style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>November 2024</div>
            <h3 style={{ color: '#f8fafc', marginBottom: '1rem', fontSize: '1.3rem' }}>Joined Sustainability Lab</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
              Joined the <a href="https://sustainability-lab.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Sustainability Lab</a> at IIT Gandhinagar, 
              led by <a href="https://nipunbatra.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>Prof. Nipun Batra</a>.
            </p>
          </div>
        </div>

        {/* July 2024 - IIT Gandhinagar Admission */}
        <div style={{ marginBottom: '3rem', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            left: '-65px', 
            top: '10px', 
            width: '16px', 
            height: '16px', 
            background: '#8b5cf6', 
            borderRadius: '50%', 
            border: '3px solid #0f172a',
            zIndex: 2 
          }}></div>
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
            <div style={{ color: '#8b5cf6', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>July 2024</div>
            <h3 style={{ color: '#f8fafc', marginBottom: '1rem', fontSize: '1.3rem' }}>Admission to IIT Gandhinagar</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              Got admission to IIT Gandhinagar for Master's program in Computer Science and Engineering.
            </p>
          </div>
        </div>

        {/* June 2024 - Bachelor's Completion */}
        <div style={{ marginBottom: '3rem', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            left: '-65px', 
            top: '10px', 
            width: '16px', 
            height: '16px', 
            background: '#3b82f6', 
            borderRadius: '50%', 
            border: '3px solid #0f172a',
            zIndex: 2 
          }}></div>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
            <div style={{ color: '#3b82f6', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>June 2024</div>
            <h3 style={{ color: '#f8fafc', marginBottom: '1rem', fontSize: '1.3rem' }}>Bachelor's Degree Completed</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              Completed Bachelor's in Computer Science Engineering at Punjab Technical University (PTU).
            </p>
          </div>
        </div>

        {/* January 2024 - GATE */}
        <div style={{ marginBottom: '3rem', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            left: '-65px', 
            top: '10px', 
            width: '16px', 
            height: '16px', 
            background: '#f59e0b', 
            borderRadius: '50%', 
            border: '3px solid #0f172a',
            zIndex: 2 
          }}></div>
          <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <div style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>January 2024</div>
            <h3 style={{ color: '#f8fafc', marginBottom: '1rem', fontSize: '1.3rem' }}>GATE 2024 Achievement</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              Cleared GATE 2024 exam in Computer Science and Engineering with an All India Rank (AIR) of <span style={{ color: '#f59e0b', fontWeight: '600' }}>733</span>.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
)

const TestTechNuggets = () => (
  <div style={{ color: 'white', padding: '80px 20px 20px', background: '#0f172a', minHeight: '100vh' }}>
    <h1>Tech Nuggets</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '10px' }}>🤖</div>
        <h3>Machine Learning</h3>
        <p style={{ color: '#cbd5e1' }}>Advanced ML algorithms and implementations</p>
      </div>
    </div>
  </div>
)

const TestApps = () => (
  <div style={{ color: 'white', padding: '80px 20px 20px', background: '#0f172a', minHeight: '100vh' }}>
    <h1>Apps</h1>
    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
      <h3>AI Assistant App</h3>
      <p style={{ color: '#cbd5e1' }}>A mobile application leveraging AI for personalized assistance.</p>
      <div style={{ marginTop: '15px' }}>
        <button style={{ background: '#3b82f6', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', marginRight: '10px' }}>
          Demo
        </button>
        <button style={{ background: '#1e293b', color: 'white', padding: '8px 15px', border: '1px solid #3b82f6', borderRadius: '5px' }}>
          Code
        </button>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div style={{ background: '#0f172a', minHeight: '100vh' }}>
        {/* Simple Navigation */}
        <nav style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          background: 'rgba(15, 23, 42, 0.95)', 
          padding: '15px 30px', 
          zIndex: 1000,
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
              <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                VR
              </span>
            </div>
            <div style={{ display: 'flex', gap: '30px' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="/publications" style={{ color: 'white', textDecoration: 'none' }}>Publications</a>
              <a href="/timeline" style={{ color: 'white', textDecoration: 'none' }}>Timeline</a>
              <a href="/tech-nuggets" style={{ color: 'white', textDecoration: 'none' }}>Tech Nuggets</a>
              <a href="/apps" style={{ color: 'white', textDecoration: 'none' }}>Apps</a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<TestPublications />} />
          <Route path="/timeline" element={<TestTimeline />} />
          <Route path="/tech-nuggets" element={<TestTechNuggets />} />
          <Route path="/apps" element={<TestApps />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
