import React from 'react';
import styled from 'styled-components';

const StyledSwatch = styled.div`
  color: red;
`;

const Swatch = ({ color }) => {
  return <StyledSwatch>{`#${color}`}</StyledSwatch>;
};

export default Swatch;

