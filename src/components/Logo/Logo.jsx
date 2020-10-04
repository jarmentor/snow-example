import React from 'react';
import styled, { keyframes } from 'styled-components';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;

const Logo = ({ src }) => <StyledLogo src={src} alt="logo" />;

export default Logo;

