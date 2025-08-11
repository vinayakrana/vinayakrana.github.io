import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiBrain } from 'react-icons/fi'

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`

const IconWrapper = styled.div`
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`

const TechNuggets = () => {
  const nuggets = [
    {
      icon: <FiCode />,
      title: 'Machine Learning Algorithms',
      description: 'Deep dive into advanced ML algorithms and their practical implementations in real-world scenarios.'
    },
    {
      icon: <FiDatabase />,
      title: 'Data Science Techniques',
      description: 'Exploring data preprocessing, feature engineering, and statistical analysis methods.'
    },
    {
      icon: <FiBrain />,
      title: 'AI Research Insights',
      description: 'Latest findings and breakthroughs in artificial intelligence research and development.'
    }
  ]

  return (
    <PageContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Nuggets
      </Title>
      
      <Grid>
        {nuggets.map((nugget, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <IconWrapper>
              {nugget.icon}
            </IconWrapper>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
              {nugget.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {nugget.description}
            </p>
          </Card>
        ))}
      </Grid>
    </PageContainer>
  )
}

export default TechNuggets
