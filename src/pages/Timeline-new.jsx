import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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

const TimelineItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
`

const Timeline = () => {
  const timelineData = [
    {
      year: '2024',
      title: 'AI Research & Development',
      description: 'Currently pursuing advanced research in artificial intelligence and machine learning, focusing on innovative approaches to solve complex problems.'
    },
    {
      year: '2023',
      title: 'Machine Learning Engineer',
      description: 'Developed and deployed machine learning models for real-world applications, contributing to cutting-edge AI solutions.'
    },
    {
      year: '2022',
      title: 'Academic Excellence',
      description: 'Achieved significant milestones in academic research and contributed to the advancement of AI technologies.'
    }
  ]

  return (
    <PageContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Timeline
      </Title>
      
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <h3 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            {item.year}
          </h3>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
            {item.title}
          </h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {item.description}
          </p>
        </TimelineItem>
      ))}
    </PageContainer>
  )
}

export default Timeline
