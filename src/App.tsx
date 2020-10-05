import React, { useState } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import { Logo, Swatch } from './components'
import { Header } from './containers'

const StyledWrapper = styled.div`
  text-align: center;
  code {
    background: #fff3;
    padding: 4px 8px;
    border-radius: 4px;
  }
  p {
    margin: 0.4rem;
  }

  a {
    color: #61dafb;
  }
`

function App() {
  const [count, setCount] = useState(0)
  setTimeout(() => setCount(count + 1), 1000)

  return (
    <StyledWrapper>
      <Header>
        <Logo src={logo} />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>

        <Swatch color="red" />
      </Header>
    </StyledWrapper>
  )
}

export default App
