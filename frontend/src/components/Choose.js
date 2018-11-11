import React, { Component } from 'react';
import './Choose.css';
import axios from 'axios';

export default class Choose extends Component {

  handleSubmit = e => {
    e.preventDefault();
    
    let pdfURL = e.target.elements.pdfURL.value;

    axios.post("/papers", {
      url: pdfURL
    }).then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="choose-container">
        <div className="container-fluid">
          <div className="form-container">
            <form onSubmit={ this.handleSubmit }>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="pdf-url-container">
                    <input className="form-control" type="text" placeholder="PDF url" name="pdfURL"/>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <div className="pdf-url-submit-container">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
