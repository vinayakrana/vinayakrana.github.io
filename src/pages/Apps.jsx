import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiPlay, FiStar, FiCode, FiZap } from 'react-icons/fi'

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
`

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 4rem;
`

const AppsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const AppCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-secondary);
  }
`

const AppImage = styled.div`
  height: 250px;
  background: ${props => props.bgImage ? `url(${props.bgImage})` : 'var(--gradient-primary)'};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
`

const AppImageContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
`

const AppIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`

const AppImageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const AppImageSubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`

const AppContent = styled.div`
  padding: 2rem;
`

const AppTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`

const AppDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const AppFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`

const AppFeature = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '✓';
    color: var(--success-color);
    font-weight: bold;
  }
`

const AppStats = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
`

const StatItem = styled.div`
  text-align: center;
  flex: 1;
`

const StatNumber = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--accent-color);
`

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
`

const AppTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const AppActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.primary ? 'var(--gradient-primary)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--accent-color)'};
  border: ${props => props.primary ? 'none' : '2px solid var(--accent-color)'};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;

  &:hover {
    background: ${props => props.primary ? 'var(--accent-color)' : 'var(--accent-color)'};
    color: white;
    text-decoration: none;
    transform: translateY(-2px);
  }
`

const Apps = () => {
  const apps = [
    {
      title: 'ScholarBot',
      subtitle: 'AI-powered Academic Assistant',
      description: 'An intelligent chatbot designed to assist researchers and students with academic queries. Built using state-of-the-art language models, ScholarBot can help with literature reviews, paper summaries, research methodology guidance, and academic writing assistance.',
      image: '/images/scholarbot.png',
      icon: '🤖',
      features: [
        'Natural language processing for academic queries',
        'Literature review assistance',
        'Research methodology guidance',
        'Paper summarization and analysis',
        'Citation formatting help',
        'Multi-domain knowledge base'
      ],
      technologies: ['Python', 'Transformers', 'Hugging Face', 'Streamlit', 'BERT', 'GPT'],
      stats: {
        users: '1.2K+',
        queries: '15K+',
        uptime: '99.8%'
      },
      links: {
        live: 'https://huggingface.co/spaces/vinny4/ScholarBot',
        github: '#',
        demo: '#'
      },
      status: 'Live'
    },
    {
      title: 'AI Research Hub',
      subtitle: 'Collaborative Research Platform',
      description: 'A comprehensive platform for AI researchers to collaborate, share findings, and manage research projects. Features include paper management, collaboration tools, experiment tracking, and knowledge sharing capabilities.',
      image: null,
      icon: '🔬',
      features: [
        'Research project management',
        'Collaborative paper writing',
        'Experiment tracking and visualization',
        'Literature database integration',
        'Team collaboration tools',
        'Publication timeline management'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Python', 'Docker', 'AWS'],
      stats: {
        projects: '50+',
        researchers: '200+',
        papers: '75+'
      },
      links: {
        live: '#',
        github: '#',
        demo: '#'
      },
      status: 'In Development'
    },
    {
      title: 'EcoPredict',
      subtitle: 'Environmental Forecasting System',
      description: 'Machine learning-powered environmental monitoring and prediction system. Provides real-time analysis of environmental data and predictive insights for sustainable decision-making.',
      image: null,
      icon: '🌱',
      features: [
        'Real-time environmental monitoring',
        'Predictive analytics for climate patterns',
        'Energy consumption optimization',
        'Sustainability metrics tracking',
        'Interactive data visualizations',
        'API for third-party integrations'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
      stats: {
        sensors: '500+',
        predictions: '10K+',
        accuracy: '94%'
      },
      links: {
        live: '#',
        github: '#',
        docs: '#'
      },
      status: 'Beta'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'Live': return 'var(--success-color)'
      case 'Beta': return 'var(--warning-color)'
      case 'In Development': return 'var(--accent-color)'
      default: return 'var(--text-muted)'
    }
  }

  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Applications & Tools
      </PageTitle>
      
      <PageSubtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        AI-powered applications and tools I've built to solve real-world problems
      </PageSubtitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AppsGrid>
          {apps.map((app, index) => (
            <AppCard
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <AppImage bgImage={app.image}>
                <AppImageContent>
                  <AppIcon>{app.icon}</AppIcon>
                  <AppImageTitle>{app.title}</AppImageTitle>
                  <AppImageSubtitle>{app.subtitle}</AppImageSubtitle>
                </AppImageContent>
              </AppImage>

              <AppContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <AppTitle>{app.title}</AppTitle>
                  <span style={{ 
                    color: getStatusColor(app.status), 
                    fontSize: '0.8rem', 
                    fontWeight: '600',
                    padding: '0.3rem 0.8rem',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '15px'
                  }}>
                    {app.status}
                  </span>
                </div>

                <AppDescription>{app.description}</AppDescription>

                <AppStats>
                  {Object.entries(app.stats).map(([key, value]) => (
                    <StatItem key={key}>
                      <StatNumber>{value}</StatNumber>
                      <StatLabel>{key}</StatLabel>
                    </StatItem>
                  ))}
                </AppStats>

                <AppFeatures>
                  {app.features.slice(0, 4).map((feature, featureIndex) => (
                    <AppFeature key={featureIndex}>{feature}</AppFeature>
                  ))}
                </AppFeatures>

                <AppTech>
                  {app.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </AppTech>

                <AppActions>
                  {app.links.live && (
                    <ActionButton
                      href={app.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      primary
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiPlay />
                      Try Live
                    </ActionButton>
                  )}
                  {app.links.github && (
                    <ActionButton
                      href={app.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub />
                      Source
                    </ActionButton>
                  )}
                </AppActions>
              </AppContent>
            </AppCard>
          ))}
        </AppsGrid>
      </motion.div>
    </PageContainer>
  )
}

export default Apps
