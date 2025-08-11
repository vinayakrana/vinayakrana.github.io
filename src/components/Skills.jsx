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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`

const SkillItem = styled.li`
  padding: 0.5rem 0;
  color: var(--text-secondary);
  &:before {
    content: '▶';
    color: var(--accent-color);
    margin-right: 0.5rem;
  }
`

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'C/C++', 'Java', 'MATLAB', 'R']
    },
    {
      title: 'AI & Machine Learning',
      skills: ['Deep Learning', 'NLP', 'Computer Vision', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL']
    },
    {
      title: 'Tools & Frameworks',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Jupyter']
    }
  ]

  return (
    <Section id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </SectionTitle>
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <CardTitle>{category.title}</CardTitle>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  )
}

export default Skills
