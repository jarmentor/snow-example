import * as React from 'react'
import styled from 'styled-components'

const StyledSwatch = styled.div`
  color: red;
`

interface SwatchProp {
  color: string
}

const Swatch: React.FunctionComponent<SwatchProp> = ({ color }) => (
  <StyledSwatch>{`#${color}`}</StyledSwatch>
)

export default Swatch
