import React from 'react';
import styled from 'styled-components';

const StyledSwatch = styled.div`
  color: red;
`;

export const Swatch = ({ color }) => {
  return <StyledSwatch>{`#${color}`}</StyledSwatch>;
};

