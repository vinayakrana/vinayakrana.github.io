import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiAward, FiDownload } from 'react-icons/fi'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const TextContent = styled.div`
  z-index: 2;
`

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: var(--accent-color);
  font-weight: 500;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 100px;
`

const StatNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }
`

const SecondaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--accent-color);
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
  }
`

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: var(--accent-color);
    color: white;
    transform: translateY(-3px);
  }
`

const ImageContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: var(--gradient-primary);
  padding: 5px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: var(--secondary-color);
`

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`

const FloatingIcon = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = "AI Researcher & ML Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/vinayakrana', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/vinayak-rana-a841bb243/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:vinayak.rana@iitgn.ac.in', label: 'Email' },
    { icon: FiAward, href: 'https://www.kaggle.com/vinayak4444', label: 'Kaggle' }
  ]

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    // Add CV download logic here
    console.log('Downloading CV...')
  }

  return (
    <HeroSection id="home">
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TextContent>
            <Greeting variants={itemVariants}>
              👋 Hello, I'm
            </Greeting>

            <Name variants={itemVariants}>
              Vinayak Rana
            </Name>

            <Title variants={itemVariants}>
              {typedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </Title>

            <Description variants={itemVariants}>
              Master's student at IIT Gandhinagar, passionate about building intelligent systems 
              that bridge cutting-edge research with real-world impact. Specializing in AI, ML, 
              and sustainable technology solutions.
            </Description>

            <StatsContainer variants={itemVariants}>
              <StatItem
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <StatNumber>733</StatNumber>
                <StatLabel>GATE Rank</StatLabel>
              </StatItem>
              <StatItem
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <StatNumber>5+</StatNumber>
                <StatLabel>Projects</StatLabel>
              </StatItem>
              <StatItem
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <StatNumber>1</StatNumber>
                <StatLabel>Publications</StatLabel>
              </StatItem>
            </StatsContainer>

            <ButtonGroup variants={itemVariants}>
              <PrimaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
              >
                <FiMail />
                Get In Touch
              </PrimaryButton>
              
              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
              >
                <FiDownload />
                Download CV
              </SecondaryButton>
            </ButtonGroup>

            <SocialLinks variants={itemVariants}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <SocialLink
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <Icon />
                  </SocialLink>
                )
              })}
            </SocialLinks>
          </TextContent>
        </motion.div>

        <ImageContent>
          <ProfileImageContainer
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProfileImage 
              src="/images/vinayak.png" 
              alt="Vinayak Rana"
              onError={(e) => {
                e.target.style.background = 'var(--gradient-primary)'
              }}
            />
          </ProfileImageContainer>

          <FloatingElements>
            {/* Removed floating emojis - keeping for potential future use */}
          </FloatingElements>
        </ImageContent>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
