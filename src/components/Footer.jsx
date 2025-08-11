import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: var(--secondary-color);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const FooterText = styled.p`
  color: var(--text-secondary);
  margin: 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2025 Vinayak Rana. Built with React & Framer Motion.
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
