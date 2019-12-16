import React from 'react'
import { Provider } from 'react-redux'

import logo from '../logo.svg'
import '../styles/App.css'

const App = (props) => {
  return (
    <Provider store={props.store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  )
}

export default App
