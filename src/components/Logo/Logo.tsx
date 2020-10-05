import React from 'react'
import styled, { keyframes } from 'styled-components'

interface LogoSrc {
  src: string
}

const Logo: React.FunctionComponent<LogoSrc> = ({ src }) => (
  <img src={src} alt="logo" />
)

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const StyledLogo = styled(Logo)`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`

export default StyledLogo
