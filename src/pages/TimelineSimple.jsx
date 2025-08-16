import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiTrendingUp, FiCode, FiBookOpen, FiUsers, FiStar, FiMic, FiTarget } from 'react-icons/fi'
import { FaGraduationCap, FaGift } from 'react-icons/fa'

const Timeline = () => {
  const timelineData = [
    {
      date: 'December 2024',
      title: 'Joined Sustainability Lab',
      subtitle: 'Research Under Prof. Nipun Batra',
      description: 'Started research work focusing on AI applications for environmental sustainability, energy optimization, and smart systems under the guidance of Prof. Nipun Batra at IIT Gandhinagar.',
      icon: FiTrendingUp,
      tags: ['Research', 'Sustainability', 'AI'],
      links: [
        { text: 'Sustainability Lab', url: 'https://sustainability-lab.github.io/' },
        { text: 'Prof. Nipun Batra', url: 'https://nipunbatra.github.io/' }
      ]
    },
    {
      date: 'August 2024',
      title: 'Started M.Tech in AI',
      subtitle: 'IIT Gandhinagar - Computer Science & Engineering',
      description: 'Began pursuing Master of Technology in Artificial Intelligence at IIT Gandhinagar, focusing on advanced AI and machine learning research with applications in sustainability.',
      icon: FaGraduationCap,
      tags: ['Education', 'AI', 'IIT Gandhinagar']
    },
    {
      date: 'June 2024',
      title: 'Completed B.Tech in CSE',
      subtitle: 'Punjab Technical University (PTU)',
      description: 'Successfully completed Bachelor of Technology in Computer Science Engineering from Punjab Technical University, building a strong foundation in computer science fundamentals.',
      icon: FaGraduationCap,
      tags: ['Education', 'B.Tech', 'Computer Science']
    },
    {
      date: 'January 2024',
      title: 'GATE CS 2024 - AIR 733',
      subtitle: 'All India Rank 733 among 100,000+ candidates',
      description: 'Cleared Graduate Aptitude Test in Engineering (Computer Science) with All India Rank 733 and 99.4 percentile, securing admission to premier institutes. Achieved top 0.6% rank demonstrating exceptional technical fundamentals.',
      icon: FiAward,
      tags: ['Achievement', 'GATE', 'Top 0.6%']
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
                
                {item.links && (
                  <div style={{ marginBottom: '1rem' }}>
                    {item.links.map((link, linkIndex) => (
                      <a 
                        key={`link-${index}-${linkIndex}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#3b82f6',
                          textDecoration: 'none',
                          marginRight: '1rem',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          display: 'inline-block',
                          marginBottom: '0.5rem'
                        }}
                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                      >
                        🔗 {link.text}
                      </a>
                    ))}
                  </div>
                )}
                
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
