import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Choose from './components/Choose';
import ChooseTwo from './components/ChooseTwo';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App app-container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/choose" component={ Choose }/>
            <Route path="/choose-two" component={ ChooseTwo }/>
            <Route path="/list" component={ List }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
