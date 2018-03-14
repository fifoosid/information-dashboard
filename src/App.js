import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './common-objects/home-page'
class AppWrapper extends Component {
  render() {
    return(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ HomePage } />
      </Switch>
    );
  }
}

class Boilerplate extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default AppWrapper;
