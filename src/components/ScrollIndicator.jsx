import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ScrollContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1001;
`

const ScrollProgress = styled(motion.div)`
  height: 100%;
  background: var(--gradient-primary);
  transform-origin: 0%;
`

const ScrollIndicator = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollYProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <ScrollContainer>
      <ScrollProgress
        style={{ scaleX: scrollYProgress }}
        transition={{ duration: 0.1 }}
      />
    </ScrollContainer>
  )
}

export default ScrollIndicator
