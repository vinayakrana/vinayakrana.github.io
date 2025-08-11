import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiAward } from 'react-icons/fi'

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

const ContactContainer = styled.div`
  background: var(--gradient-accent);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: white;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ContactCard = styled(motion.a)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const ContactIcon = styled.div`
  font-size: 2rem;
`

const ContactLabel = styled.div`
  font-weight: 600;
`

const Contact = () => {
  const contactMethods = [
    { icon: FiMail, label: 'Email', href: 'mailto:vinayak.rana@iitgn.ac.in' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinayak-rana-a841bb243/' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/vinayakrana' },
    { icon: FiAward, label: 'Kaggle', href: 'https://www.kaggle.com/vinayak4444' }
  ]

  return (
    <Section id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </SectionTitle>
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Ready to collaborate on exciting AI projects?
          </h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            I'm always interested in discussing research opportunities and innovative projects.
          </p>
        </motion.div>
        
        <ContactGrid>
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <ContactCard
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <ContactIcon>
                  <Icon />
                </ContactIcon>
                <ContactLabel>{method.label}</ContactLabel>
              </ContactCard>
            )
          })}
        </ContactGrid>
      </ContactContainer>
    </Section>
  )
}

export default Contact
