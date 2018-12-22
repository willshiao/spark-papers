import React, { Component } from 'react';
import './List.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    return (
      <div className="list-container">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <p id="my-liked-papers">My Liked Papers</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="liked-container">
                { this.props.likedPapers && this.props.likedPapers.map(likedPaper => {
                  return (
                  <div className="liked-paper">
                    <span className="bold-me"><p className="liked-paper-name">{ likedPaper.name }</p></span>
                    <p className="liked-paper-info">{ likedPaper.authors }</p>
                    <p className="liked-paper-info">{ likedPaper.abstract }</p>
                    <p className="liked-paper-info">{ likedPaper.conference }</p>
                    <p className="liked-paper-info">{ likedPaper.url }</p>
                  </div>
                )})}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div class="back-button-container">
                <NavLink to="/choose-two">
                  <button type="button" id="get-started" className="btn btn-primary">Back</button>
                </NavLink>
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
    likedPapers: state.likedPapers
  }
}

export default connect(mapStateToProps)(List);