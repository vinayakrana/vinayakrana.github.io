import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`

const ResearchCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`

const CardNumber = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  background: var(--gradient-primary);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`

const CardDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`

const Research = () => {
  const researchAreas = [
    {
      title: 'Deep Learning Architectures',
      description: 'Exploring novel neural network designs and optimization techniques.'
    },
    {
      title: 'Computer Vision Systems',
      description: 'Building robust vision systems for real-world applications.'
    },
    {
      title: 'Natural Language Processing',
      description: 'Creating intelligent systems that understand human language.'
    }
  ]

  return (
    <Section id="research">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Research Focus
      </SectionTitle>
      <ResearchGrid>
        {researchAreas.map((area, index) => (
          <ResearchCard
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardNumber>{index + 1}</CardNumber>
            <CardTitle>{area.title}</CardTitle>
            <CardDescription>{area.description}</CardDescription>
          </ResearchCard>
        ))}
      </ResearchGrid>
    </Section>
  )
}

export default Research
