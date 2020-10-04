import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Swatch, Logo } from './components';
import { Header } from './containers';
function App() {
  const [count, setCount] = useState(0);
  setTimeout(() => setCount(count + 1), 1000);

  return (
    <div className="App">
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
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>

        <Swatch color="red" />
      </Header>
    </div>
  );
}

export default App;

