import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiClock } from 'react-icons/fi'

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`

const Publications = () => {
  return (
    <PageContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Publications
      </Title>
      
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Badge>
          <FiClock />
          Under Review
        </Badge>
        
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
          Advanced Machine Learning Techniques for AI Research
        </h3>
        
        <p style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '1rem' }}>
          AAAI Conference on Artificial Intelligence 2026
        </p>
        
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          This paper presents novel approaches to machine learning optimization and explores cutting-edge 
          techniques in artificial intelligence. The research contributes to the field by introducing 
          innovative methodologies that advance the state-of-the-art in AI research and practical applications.
        </p>
      </Card>
    </PageContainer>
  )
}

export default Publications
