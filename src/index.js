import React from 'react';
import ReactDOM from 'react-dom';
import ExampleObject from './components/DataDisplays/ExampleObject.jsx';
import TrialInterface from './components/DataDisplays/TrialInterface.jsx';
import Header from './components/Header.jsx'
// import * as serviceWorker from './serviceWorker';
// import './styles/App.css'

const centerBox = {
  margin: "3em auto",
  width: '90%'
}

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <div style={centerBox}>
      <ExampleObject />
      <TrialInterface />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
