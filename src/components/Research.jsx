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

const ResearchIntro = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
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
      title: 'Spatiotemporal Modeling',
      description: 'Developing neural process–based models for forecasting and interpolation of environmental data (e.g., air quality monitoring).'
    },
    {
      title: 'Active Learning & Optimization',
      description: 'Designing intelligent sampling strategies to select the most informative data points, reducing labeling costs while maximizing model performance through advanced acquisition functions.'
    },
    {
      title: 'Efficient Acquisition Functions',
      description: 'Exploring scalable methods to accelerate mutual information–based and variance-based selection within deep probabilistic models.'
    },
    {
      title: 'Language Model Applications',
      description: 'Building retrieval-augmented generation (RAG) systems for knowledge-grounded AI assistants and developing agentic systems for automation workflows, focusing on document retrieval, model efficiency, and deployment readiness.'
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
      
      <ResearchIntro
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My research lies at the intersection of machine learning, probabilistic modeling, and applied AI for societal impact. I focus on:
      </ResearchIntro>
      
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
