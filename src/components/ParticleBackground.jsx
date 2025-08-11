import React from 'react'
import styled from 'styled-components'

const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
`

const ParticleBackground = () => {
  return <ParticleContainer />
}

export default ParticleBackground
