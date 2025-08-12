import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiTrendingUp, FiCode, FiBookOpen, FiUsers, FiStar, FiMic, FiTarget } from 'react-icons/fi'
import { FaGraduationCap, FaGift } from 'react-icons/fa'

const Timeline = () => {
  const timelineData = [
    {
      date: 'January 2025',
      title: 'Keynote Speaker at AI Summit 2025',
      subtitle: 'Sustainable AI: Building Tomorrow\'s Solutions',
      description: 'Delivered a keynote presentation on "AI for Environmental Sustainability" at the International AI Summit, addressing 500+ researchers and industry leaders.',
      icon: FaGift,
      tags: ['Speaking', 'Keynote', 'AI Summit']
    },
    {
      date: 'December 2024',
      title: 'Best Paper Award - ICML Workshop',
      subtitle: 'Outstanding Research in Sustainable ML',
      description: 'Received Best Paper Award at the ICML Workshop on "AI for Climate" for research on energy-efficient deep learning models.',
      icon: FiStar,
      tags: ['Award', 'Best Paper', 'ICML']
    },
    {
      date: 'November 2024',
      title: 'Open Source Contribution',
      subtitle: 'EcoML Framework - 1K+ GitHub Stars',
      description: 'Released EcoML, an open-source framework for sustainable machine learning practices with global community contributions.',
      icon: FiCode,
      tags: ['Open Source', 'Community', 'Impact']
    },
    {
      date: 'March 2024',
      title: 'GATE CS 2024 - AIR 733',
      subtitle: 'All India Rank 733 among 100,000+ candidates',
      description: 'Secured top 1% rank in Graduate Aptitude Test in Engineering (Computer Science).',
      icon: FiAward,
      tags: ['Achievement', 'Top 1%', 'GATE']
    },
    {
      date: 'January 2024',
      title: 'Joined Sustainability Lab',
      subtitle: 'Research Under Prof. Nipun Batra',
      description: 'Started research work focusing on AI applications for environmental sustainability at IIT Gandhinagar.',
      icon: FiTrendingUp,
      tags: ['Research', 'Sustainability', 'IIT Gandhinagar']
    },
    {
      date: 'August 2023 - Present',
      title: 'Master of Technology',
      subtitle: 'Computer Science & Engineering - IIT Gandhinagar',
      description: 'Pursuing advanced studies in AI and ML with focus on practical applications for environmental challenges.',
      icon: FaGraduationCap,
      tags: ['Education', 'AI Research', 'IIT Gandhinagar']
    }
  ]

  const containerStyle = {
    minHeight: '100vh',
    padding: '8rem 2rem 5rem',
    maxWidth: '1200px',
    margin: '0 auto',
    color: 'white',
    background: '#0f172a'
  }

  const titleStyle = {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const subtitleStyle = {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#cbd5e1',
    marginBottom: '4rem'
  }

  const timelineContainerStyle = {
    position: 'relative',
    margin: '3rem 0'
  }

  const timelineLineStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '4px',
    height: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '2px'
  }

  const itemStyle = (index) => ({
    display: 'flex',
    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
    alignItems: 'center',
    marginBottom: '4rem',
    position: 'relative'
  })

  const iconStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.5rem',
    zIndex: 2
  }

  const contentStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '2rem',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '500px',
    width: '100%'
  }

  const dateStyle = {
    fontSize: '1rem',
    color: '#3b82f6',
    fontWeight: '600',
    marginBottom: '0.5rem'
  }

  const itemTitleStyle = {
    fontSize: '1.3rem',
    color: 'white',
    marginBottom: '0.5rem'
  }

  const itemSubtitleStyle = {
    fontSize: '1rem',
    color: '#3b82f6',
    marginBottom: '1rem'
  }

  const descriptionStyle = {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '1rem'
  }

  const tagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  }

  const tagStyle = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '500'
  }

  return (
    <div style={containerStyle}>
      <motion.h1
        style={titleStyle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Journey Timeline
      </motion.h1>
      
      <motion.p
        style={subtitleStyle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Key milestones and achievements in my AI research career
      </motion.p>

      <div style={timelineContainerStyle}>
        <div style={timelineLineStyle} />
        
        {timelineData.map((item, index) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={`timeline-${index}`}
              style={itemStyle(index)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div style={iconStyle}>
                <IconComponent />
              </div>
              
              <motion.div
                style={contentStyle}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div style={dateStyle}>{item.date}</div>
                <h3 style={itemTitleStyle}>{item.title}</h3>
                <div style={itemSubtitleStyle}>{item.subtitle}</div>
                <p style={descriptionStyle}>{item.description}</p>
                <div style={tagsStyle}>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={`tag-${index}-${tagIndex}`} style={tagStyle}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline
