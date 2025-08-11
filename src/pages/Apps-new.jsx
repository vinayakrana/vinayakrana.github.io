import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSmartphone } from 'react-icons/fi'

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

const AppCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const IconWrapper = styled.div`
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--gradient-primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

const Apps = () => {
  const apps = [
    {
      icon: <FiSmartphone />,
      title: 'AI Assistant App',
      description: 'A mobile application that leverages artificial intelligence to provide personalized assistance and recommendations.',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      icon: <FiSmartphone />,
      title: 'ML Data Analyzer',
      description: 'A web application for analyzing complex datasets using machine learning algorithms and visualization tools.',
      demoUrl: '#',
      codeUrl: '#'
    }
  ]

  return (
    <PageContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Apps
      </Title>
      
      <Grid>
        {apps.map((app, index) => (
          <AppCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <IconWrapper>
              {app.icon}
            </IconWrapper>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
              {app.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              {app.description}
            </p>
            <ButtonGroup>
              <Button href={app.demoUrl}>
                <FiExternalLink />
                Demo
              </Button>
              <Button href={app.codeUrl}>
                <FiGithub />
                Code
              </Button>
            </ButtonGroup>
          </AppCard>
        ))}
      </Grid>
    </PageContainer>
  )
}

export default Apps
