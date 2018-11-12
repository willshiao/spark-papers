import React, { Component } from 'react';
import './Choose.css';
import Heading from './Heading';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPapers } from '../actions/setPapers';

class Choose extends Component {

  state = {
    fileName: undefined
  }

  handleURLSubmit = async e => {
    e.preventDefault();
    
    let pdfURL = e.target.elements.pdfURL.value;
    console.log(pdfURL);

    axios.post("/papers", {
      url: pdfURL
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  handleFileSubmit = async e => {
    e.preventDefault();

    let formData = new FormData();
    let pdfFile = e.target.elements.pdfFile.files[0];
    let fileName = pdfFile.name;

    this.setState({ fileName });

    formData.append("file", pdfFile);
    console.log(formData);

    axios.post("/papers/upload", formData)
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="choose-container">
        <Heading/>
        <div className="container-fluid">
          <div class="subtitle-container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div class="subtitle-container">
                  <p className="subtitle">Let's start by providing a PDF URL of the paper or uploading the PDF file.</p>
                </div>
              </div>
            </div>
          </div>
            <div className="form-container">
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <form onSubmit={ this.handleURLSubmit }>
                    <p className="option-caption">Submit a URL of the PDF.</p>
                    <div className="pdf-url-container">
                      <input className="form-control url-input" type="text" placeholder="PDF url" name="pdfURL"/>
                    </div>
                    <div className="pdf-url-submit-container">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                <div class="col-md-4">
                  <form onSubmit={ this.handleFileSubmit }>
                    <div className="upload-container">
                      <p className="option-caption">Upload a PDF.</p>
                      <div class="upload-button-container">
                        <label htmlFor="upload-button">Upload</label>
                        <input type="file" id="upload-button" name="pdfFile"/>

                      </div>
                      <div className="pdf-url-submit-container">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </form>
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
    papers: state.papers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPapers: papers => { dispatch(setPapers(papers)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choose);