import React, { Component } from 'react';
import './Result.css';
import Heading from './Heading';
import { connect } from 'react-redux';

class Result extends Component {
  render() {
    return (
      <div className="result-container">
        <Heading/>
        <div className="container-fluid">
          <div className="summary-container">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <p className="summary-caption">Here's our summary of the paper.</p>
                <div class="summary-box">
                  <p className="summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    summary: state.summary
  }
}

export default connect(mapStateToProps)(Result);