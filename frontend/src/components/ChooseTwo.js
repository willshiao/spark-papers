import React, { Component } from 'react';
import './ChooseTwo.css';
import { connect } from 'react-redux';
import { setPapers } from '../actions/setPapers';
import { removePaper } from '../actions/removePaper';
import { addPaper } from '../actions/addPaper';
import Card from './Card';
import axios from 'axios';
import '../style.css';

const data = [
  {name: "Research 1", author: "George", abstract: "This is a sample abstract for Research 1", url: "fake url 1"},
  {name: "Research 2", author: "Thomas", abstract: "This is a sample abstract for Research 2", url: "fake url 2"}
]

class ChooseTwo extends Component {

  componentDidMount = () => {

    let fakeData = [
      {name: "Research 1", author: "George", abstract: "This is a sample abstract for Research 1", url: "fake url 1"},
      {name: "Research 2", author: "Thomas", abstract: "This is a sample abstract for Research 2", url: "fake url 2"}
    ]
      
    // axios.get("/papers?count=2").then(res => {
    //   console.log(res);
    //   // use setPapers dispatch to set papers in store
    // })
      
    this.props.setPapers(fakeData);
  }

  clickOne = () => {
    this.props.removePaper();
    console.log(this.props.papers);
    let paper = {name: "Research 1", author: "George", abstract: "This is a sample abstract for Research 1", url: "fake url 1"}
    this.props.addPaper(paper);
  }

  clickTwo = () => {
    console.log("Clicked 2")
  }

  clickThree = () => {
    console.log("Clicked 3")
  }

  render() {
    return (
      <div className="choosetwo-container">
        <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-md-5">
                { this.props.papers[0] && <Card paper={ this.props.papers[0] } /> }
              </div>
              <div className="col-md-2">
                <div class="button-container">
                  <button type="button" onClick={ this.clickOne } class="btn btn-primary choose-button">1</button>
                </div>
              </div>
              <div className="col-md-2">
                <div class="button-container">
                  <button type="button" onClick={ this.clickOne } class="btn btn-primary choose-button">2</button>
                </div>
              </div>
              <div className="col-md-2">
                <div class="button-container">
                  <button type="button" onClick={ this.clickOne } class="btn btn-primary choose-button">3</button>
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
    setPapers: papers => { dispatch(setPapers(papers)) },
    removePaper: () => { dispatch(removePaper()) },
    addPaper: paper => { dispatch(addPaper(paper)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTwo);
