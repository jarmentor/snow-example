import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { theme, GlobalStyle } from './styles'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if ((import.meta as any).hot) {
  ;(import.meta as any).hot.accept()
}
