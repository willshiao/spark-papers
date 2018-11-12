import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Choose from './components/Choose';
import ChooseTwo from './components/ChooseTwo';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <div className="App app-container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/choose" component={ Choose }/>
            <Route path="/choose-two" component={ ChooseTwo }/>
            <Route path="/result" component={ Result }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
