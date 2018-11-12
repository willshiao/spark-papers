import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const logo = require('../assets/imgs/sparkpapers.png')

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="logo-container">
                <img src={ logo } alt="SparkPapers logo" id="sparkpapers-logo"/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="catch-phrase">Let us do the work for you.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="button-container">
                <NavLink to="/choose-two">
                  <button type="button" id="get-started" className="btn btn-primary">Get Started</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
