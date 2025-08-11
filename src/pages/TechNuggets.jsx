import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiGitBranch, FiLayers, FiZap } from 'react-icons/fi'

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
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const IntroSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 4rem;
  text-align: center;
`

const IntroTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`

const IntroText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const PostCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

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

const PostIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`

const PostTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
`

const PostDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const PostDate = styled.span`
  color: var(--text-muted);
  font-size: 0.9rem;
`

const PostCategory = styled.span`
  background: var(--accent-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const PostTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const ReadMoreButton = styled(motion.button)`
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    color: white;
  }
`

const TechNuggets = () => {
  const posts = [
    {
      icon: FiZap,
      title: 'Fast Dictionary Key Lookups in Python',
      description: 'Deep dive into Python\'s dictionary implementation and optimization techniques for faster key lookups in performance-critical applications.',
      date: 'Dec 2024',
      category: 'Performance',
      tags: ['Python', 'Optimization', 'Data Structures'],
      content: 'Exploring hash table internals...'
    },
    {
      icon: FiCpu,
      title: 'Understanding Gumbel Softmax Trick',
      description: 'Mathematical explanation of the Gumbel-Softmax trick and its applications in differentiable discrete sampling for neural networks.',
      date: 'Nov 2024',
      category: 'Machine Learning',
      tags: ['Deep Learning', 'Mathematics', 'PyTorch'],
      content: 'The Gumbel distribution provides...'
    },
    {
      icon: FiDatabase,
      title: 'Memory-Efficient Batch Processing',
      description: 'Techniques for processing large datasets with limited memory using generator functions and lazy evaluation in Python.',
      date: 'Oct 2024',
      category: 'Data Engineering',
      tags: ['Python', 'Memory Management', 'Big Data'],
      content: 'When dealing with large datasets...'
    },
    {
      icon: FiLayers,
      title: 'Dynamic Computation Graphs in PyTorch',
      description: 'How PyTorch builds and manages dynamic computation graphs for automatic differentiation and gradient computation.',
      date: 'Sep 2024',
      category: 'Deep Learning',
      tags: ['PyTorch', 'Autograd', 'Neural Networks'],
      content: 'PyTorch\'s dynamic nature allows...'
    },
    {
      icon: FiGitBranch,
      title: 'Git Workflow Optimization',
      description: 'Advanced Git strategies for managing complex ML projects with large models, datasets, and collaborative development.',
      date: 'Aug 2024',
      category: 'DevOps',
      tags: ['Git', 'MLOps', 'Collaboration'],
      content: 'Managing ML projects requires...'
    },
    {
      icon: FiCode,
      title: 'Vectorization vs Loops in NumPy',
      description: 'Performance comparison and best practices for vectorized operations vs traditional loops in numerical computing.',
      date: 'Jul 2024',
      category: 'Scientific Computing',
      tags: ['NumPy', 'Performance', 'Scientific Computing'],
      content: 'Vectorization is a key concept...'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Nuggets
      </PageTitle>
      
      <PageSubtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A curated collection of short, high-signal technical posts focused on micro-optimizations and deep system understanding
      </PageSubtitle>

      <IntroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <IntroTitle>Why It Matters</IntroTitle>
        <IntroText>
          Understanding the "why" behind system behavior is a core skill in software and ML engineering. 
          These posts demonstrate a habit of going deep into how things work, whether that's a faster 
          dictionary lookup, how PyTorch builds a dynamic computation graph, or what causes a memory 
          spike in Docker containers.
        </IntroText>
      </IntroSection>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <PostsGrid>
          {posts.map((post, index) => {
            const IconComponent = post.icon
            return (
              <PostCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <PostIcon>
                  <IconComponent />
                </PostIcon>
                
                <PostMeta>
                  <PostDate>{post.date}</PostDate>
                  <PostCategory>{post.category}</PostCategory>
                </PostMeta>
                
                <PostTitle>{post.title}</PostTitle>
                <PostDescription>{post.description}</PostDescription>
                
                <PostTags>
                  {post.tags.map((tag, tagIndex) => (
                    <PostTag key={tagIndex}>{tag}</PostTag>
                  ))}
                </PostTags>
                
                <ReadMoreButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </ReadMoreButton>
              </PostCard>
            )
          })}
        </PostsGrid>
      </motion.div>
    </PageContainer>
  )
}

export default TechNuggets
