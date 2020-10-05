import * as React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  backgroundColor?: string
}

const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  ...props
}) => {
  return <header {...props}>{children}</header>
}

const StyledHeader = styled(Header)<HeaderProps>`
  background-color: ${(props) => props.backgroundColor || '#282c34'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default StyledHeader
