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
      title: 'Programming & Tools',
      skills: ['Python (NumPy, Pandas, PyTorch, TensorFlow, Scikit-learn)', 'C++', 'SQL', 'MongoDB', 'Bash', 'Git', 'LaTeX']
    },
    {
      title: 'Machine Learning & AI',
      skills: ['Supervised/Unsupervised Learning', 'Deep Learning (CNNs, RNNs, Transformers, GNNs)', 'Probabilistic Modeling (Neural Processes, Gaussian Processes)', 'Spatiotemporal Modeling', 'Active Learning (variance, mutual information, gradient-based)', 'Model Optimization (LoRA, quantization, fine-tuning LLMs)']
    },
    {
      title: 'NLP & RAG',
      skills: ['Text Preprocessing', 'Hugging Face', 'LLM Fine-tuning', 'Retrieval-Augmented Generation (RAG)', 'LangChain/LangGraph', 'Vector Databases (FAISS, Pinecone, Weaviate, Chroma)', 'Agentic systems']
    },
    {
      title: 'Cloud & MLOps',
      skills: ['Docker', 'FastAPI/Flask', 'MLflow', 'CI/CD (GitHub Actions)', 'Azure']
    },
    {
      title: 'Academic & Research',
      skills: ['Academic Writing (AAAI submission experience)', 'Statistics', 'Probability', 'Linear Algebra']
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
