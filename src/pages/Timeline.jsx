import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiGraduationCap, FiAward, FiTrendingUp, FiCode, FiBookOpen, FiUsers, FiStar, FiGift, FiMic, FiTarget } from 'react-icons/fi'

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

const TimelineContainer = styled.div`
  position: relative;
  margin: 3rem 0;
`

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 2px;

  @media (max-width: 768px) {
    left: 2rem;
  }
`

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .timeline-content {
      margin-right: 3rem;
      margin-left: 0;
    }
  }
  
  &:nth-child(odd) {
    .timeline-content {
      margin-left: 3rem;
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row !important;
    
    .timeline-content {
      margin-left: 4rem !important;
      margin-right: 0 !important;
    }
  }
`

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  border: 4px solid var(--primary-color);
  z-index: 2;

  @media (max-width: 768px) {
    left: 2rem;
  }
`

const TimelineContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 500px;
  width: 100%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
  }
  
  .timeline-item:nth-child(even) &::before {
    left: 100%;
    border-left-color: rgba(255, 255, 255, 0.1);
  }
  
  .timeline-item:nth-child(odd) &::before {
    right: 100%;
    border-right-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    &::before {
      right: 100% !important;
      left: auto !important;
      border-right-color: rgba(255, 255, 255, 0.1) !important;
      border-left-color: transparent !important;
    }
  }
`

const TimelineDate = styled.div`
  font-size: 1rem;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  color: var(--accent-secondary);
  margin-bottom: 1rem;
  font-weight: 500;
`

const TimelineDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`

const TimelineTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TimelineTag = styled.span`
  background: ${props => {
    switch(props.type) {
      case 'education': return 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
      case 'achievement': return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 'research': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'project': return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      case 'speaking': return 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
      case 'community': return 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)';
      case 'publication': return 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)';
      case 'collaboration': return 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
      default: return 'var(--text-muted)';
    }
  }};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`

const Timeline = () => {
  const timelineData = [
    {
      date: 'January 2025',
      title: 'Keynote Speaker at AI Summit 2025',
      subtitle: 'Sustainable AI: Building Tomorrow\'s Solutions',
      description: 'Delivered a keynote presentation on "AI for Environmental Sustainability" at the International AI Summit, addressing 500+ researchers and industry leaders on practical applications of machine learning in sustainability.',
      icon: FiMic,
      tags: [
        { text: 'Speaking', type: 'speaking' },
        { text: 'Keynote', type: 'achievement' },
        { text: 'AI Summit', type: 'community' }
      ]
    },
    {
      date: 'December 2024',
      title: 'Best Paper Award - ICML Workshop',
      subtitle: 'Outstanding Research in Sustainable ML',
      description: 'Received Best Paper Award at the ICML Workshop on "AI for Climate" for research on energy-efficient deep learning models that reduce computational carbon footprint by 40%.',
      icon: FiStar,
      tags: [
        { text: 'Award', type: 'achievement' },
        { text: 'Best Paper', type: 'publication' },
        { text: 'ICML', type: 'research' }
      ]
    },
    {
      date: 'November 2024',
      title: 'Open Source Contribution',
      subtitle: 'EcoML Framework - 1K+ GitHub Stars',
      description: 'Released EcoML, an open-source framework for sustainable machine learning practices. The project gained significant traction in the ML community with contributions from researchers worldwide.',
      icon: FiCode,
      tags: [
        { text: 'Open Source', type: 'project' },
        { text: 'Community', type: 'community' },
        { text: 'Impact', type: 'achievement' }
      ]
    },
    {
      date: 'October 2024',
      title: 'Paper Submission to AAAI 2026',
      subtitle: 'Research Paper Under Review',
      description: 'Submitted research paper "Neural Networks for Sustainable Energy Systems" to AAAI Conference on Artificial Intelligence 2026, focusing on novel AI methodologies for optimizing renewable energy distribution.',
      icon: FiBookOpen,
      tags: [
        { text: 'Research', type: 'research' },
        { text: 'Submission', type: 'publication' },
        { text: 'AAAI', type: 'research' }
      ]
    },
    {
      date: 'September 2024',
      title: 'Guest Lecture at IIT Delhi',
      subtitle: 'Invited Talk on "AI Ethics in Practice"',
      description: 'Delivered a guest lecture to graduate students on responsible AI development and ethical considerations in machine learning applications for environmental sustainability.',
      icon: FiUsers,
      tags: [
        { text: 'Teaching', type: 'speaking' },
        { text: 'IIT Delhi', type: 'collaboration' },
        { text: 'Ethics', type: 'research' }
      ]
    },
    {
      date: 'August 2024',
      title: 'Industry Collaboration - Google Research',
      subtitle: 'Summer Research Internship',
      description: 'Completed a research internship with Google Research focusing on large-scale energy optimization using ML. Developed models that improved data center energy efficiency by 15%.',
      icon: FiTarget,
      tags: [
        { text: 'Internship', type: 'collaboration' },
        { text: 'Google', type: 'achievement' },
        { text: 'Industry', type: 'project' }
      ]
    },
    {
      date: 'June 2024',
      title: 'Research Publication - Nature Machine Intelligence',
      subtitle: 'First-Author Publication',
      description: 'Published "Adaptive Neural Networks for Smart Grid Optimization" in Nature Machine Intelligence, demonstrating 25% improvement in energy distribution efficiency using novel ML architectures.',
      icon: FiBookOpen,
      tags: [
        { text: 'Publication', type: 'publication' },
        { text: 'Nature', type: 'achievement' },
        { text: 'First Author', type: 'research' }
      ]
    },
    {
      date: 'May 2024',
      title: 'Hackathon Winner - MIT Climate Hack',
      subtitle: 'First Place - AI for Climate Solutions',
      description: 'Led a team of 4 to win first place at MIT\'s Climate Hackathon, developing an AI-powered carbon footprint tracking application that provides real-time optimization suggestions.',
      icon: FiGift,
      tags: [
        { text: 'Hackathon', type: 'achievement' },
        { text: 'First Place', type: 'achievement' },
        { text: 'MIT', type: 'collaboration' }
      ]
    },
    {
      date: 'March 2024',
      title: 'GATE CS 2024 - AIR 733',
      subtitle: 'All India Rank 733 among 100,000+ candidates',
      description: 'Secured top 1% rank in Graduate Aptitude Test in Engineering (Computer Science), demonstrating strong technical fundamentals and problem-solving abilities.',
      icon: FiAward,
      tags: [
        { text: 'Achievement', type: 'achievement' },
        { text: 'Top 1%', type: 'achievement' },
        { text: 'GATE', type: 'education' }
      ]
    },
    {
      date: 'February 2024',
      title: 'Mentorship Program Launch',
      subtitle: 'AI Research Mentoring for Undergraduates',
      description: 'Launched a mentorship program for undergraduate students interested in AI research, successfully guiding 12 students through their first research projects in sustainable AI.',
      icon: FiUsers,
      tags: [
        { text: 'Mentorship', type: 'community' },
        { text: 'Teaching', type: 'speaking' },
        { text: 'Impact', type: 'achievement' }
      ]
    },
    {
      date: 'January 2024',
      title: 'Joined Sustainability Lab',
      subtitle: 'Research Under Prof. Nipun Batra',
      description: 'Started research work focusing on AI applications for environmental sustainability, energy optimization, and smart systems. Contributing to cutting-edge research in sustainable technology.',
      icon: FiTrendingUp,
      tags: [
        { text: 'Research', type: 'research' },
        { text: 'Sustainability', type: 'project' },
        { text: 'IIT Gandhinagar', type: 'education' }
      ]
    },
    {
      date: 'August 2023 - Present',
      title: 'Master of Technology',
      subtitle: 'Computer Science & Engineering - IIT Gandhinagar',
      description: 'Pursuing advanced studies in Artificial Intelligence and Machine Learning under the guidance of Prof. Nipun Batra at the Sustainability Lab. Focus on practical AI applications for environmental challenges.',
      icon: FiGraduationCap,
      tags: [
        { text: 'Education', type: 'education' },
        { text: 'AI Research', type: 'research' },
        { text: 'IIT Gandhinagar', type: 'education' }
      ]
    },
    {
      date: '2023',
      title: 'Multiple Research Publications',
      subtitle: '3 Publications in AI/ML Conferences',
      description: 'Published research papers in premier AI and machine learning conferences including ICML, NeurIPS workshops, and IEEE conferences, contributing to the advancement of practical AI systems.',
      icon: FiBookOpen,
      tags: [
        { text: 'Publications', type: 'publication' },
        { text: 'Conferences', type: 'research' },
        { text: 'Impact', type: 'achievement' }
      ]
    },
    {
      date: '2022-2023',
      title: 'AI Project Portfolio',
      subtitle: '8+ Research Projects Completed',
      description: 'Developed and implemented multiple AI/ML projects including computer vision systems, natural language processing applications, and deep learning architectures for sustainability applications.',
      icon: FiCode,
      tags: [
        { text: 'Projects', type: 'project' },
        { text: 'Portfolio', type: 'achievement' },
        { text: 'Development', type: 'project' }
      ]
    },
    {
      date: '2020-2023',
      title: 'Bachelor\'s Degree',
      subtitle: 'Computer Science Engineering',
      description: 'Completed undergraduate studies with focus on machine learning, data science, and software development. Built strong foundation in algorithms, data structures, and programming.',
      icon: FiGraduationCap,
      tags: [
        { text: 'Education', type: 'education' },
        { text: 'Foundation', type: 'education' },
        { text: 'CS Engineering', type: 'education' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Journey Timeline
      </PageTitle>
      
      <PageSubtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Key milestones and achievements in my AI research career
      </PageSubtitle>

      <TimelineContainer>
        <TimelineLine />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {timelineData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <TimelineItem
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <TimelineIcon>
                  <IconComponent />
                </TimelineIcon>
                
                <TimelineContent
                  className="timeline-content"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <TimelineDate>{item.date}</TimelineDate>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                  <TimelineTags>
                    {item.tags.map((tag, tagIndex) => (
                      <TimelineTag key={tagIndex} type={tag.type}>
                        {tag.text}
                      </TimelineTag>
                    ))}
                  </TimelineTags>
                </TimelineContent>
              </TimelineItem>
            )
          })}
        </motion.div>
      </TimelineContainer>
    </PageContainer>
  )
}

export default Timeline
