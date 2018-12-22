import React, { Component } from 'react';
import './Heading.css';
import { NavLink } from 'react-router-dom';
const reportIcon = require('../assets/imgs/report-2.png');

export default class Heading extends Component {
  render() {
    return (
      <div className="heading-container">
        <div className="container-fluid">
          <div className="report-icon-container">
            <NavLink to="/">
              <img src={ reportIcon } alt="Report Icon" id="report-icon"/>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}
