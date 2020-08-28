import React from 'react'
import ReactDOM from 'react-dom'
import ExampleObject from './components/ExampleObject'
import TrialInterface from './components/TrialInterface'
import Header from './components/Header'
import KeyRequest from './components/KeyRequest'
import RouteOptions from './components/RouteOptions'
import ErrorReporting from './components/ErrorReporting'
// import * as serviceWorker from './serviceWorker';
// import './styles/App.css'

const centerBox = {
  margin: '3em auto',
  width: '90%'
}

const pageSpacers = {
  marginBottom: '3em'
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div style={centerBox}>
      <ExampleObject marginBottom={pageSpacers} />
      <RouteOptions marginBottom={pageSpacers} />
      <TrialInterface marginBottom={pageSpacers} />
      <KeyRequest marginBottom={pageSpacers} />
      <ErrorReporting marginBottom={pageSpacers} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
