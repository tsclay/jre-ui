import React from 'react'
import ReactDOM from 'react-dom'
import ExampleObject from './components/ExampleObject'
import TryInterface from './components/TryInterface'
import Header from './components/Header'
import KeyRequest from './components/KeyRequest'
import RouteOptions from './components/Usage'
import TechStack from './components/TechStack'
import ErrorReporting from './components/ErrorReporting'
import Footer from './components/Footer'
// import * as serviceWorker from './serviceWorker';
// import './styles/App.css'

const centerBox = {
  margin: '5rem auto',
  width: '70%'
}

const pageSpacers = {
  marginBottom: '3rem'
}

const typographySpacer = {
  marginBottom: '1.25rem'
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div style={centerBox}>
      <ExampleObject
        marginBottom={pageSpacers}
        typographySpacer={typographySpacer}
      />
      <RouteOptions
        marginBottom={pageSpacers}
        typographySpacer={typographySpacer}
      />
      <TryInterface
        marginBottom={pageSpacers}
        typographySpacer={typographySpacer}
      />
      <KeyRequest
        marginBottom={pageSpacers}
        typographySpacer={typographySpacer}
      />
      <TechStack
        marginBottom={pageSpacers}
        typographySpacer={typographySpacer}
      />
      <ErrorReporting
        marginBottom={pageSpacers}
        typographySpacer={typographySpacer}
      />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
