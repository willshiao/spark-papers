import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Choose from './components/Choose';

class App extends Component {
  render() {
    return (
      <div className="App app-container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/choose" component={ Choose }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
