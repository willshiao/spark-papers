import React, { Component } from 'react';
import './ChooseTwo.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPapers } from '../actions/setPapers';
import { setUserID } from '../actions/setUserID';
import { removePaper } from '../actions/removePaper';
import { addPaper } from '../actions/addPaper';
import { addLikedPaper } from '../actions/addLikedPaper';
import Card from './Card';
import axios from 'axios';
import '../style.css';

class ChooseTwo extends Component {

  componentDidMount = () => {
    let userID = localStorage.getItem("userID");
    this.props.setUserID(userID);

    let fakeData = [
      {id: 1, name: "Research 1", authors: "George", abstract: "This is a sample abstract for Research 1", url: "fake url 1", conference: "conference 1"},
      {id: 2, name: "Research 2", author: "Thomas", abstract: "This is a sample abstract for Research 2", url: "fake url 2", conference: "conference 2"}
    ]

    axios.get('/users/get').then(res => {
      console.log(res)
      this.props.setUserID(res.id)
      return axios.get(`/papers?id=${this.props.userID}`)
      })
      .then(res => {
        console.log(res)
        this.props.setPapers(res)
        return axios.get(`/papers?id=${this.props.userID}`)
      })
      .then(res => {
        console.log(res);
        this.props.addPaper(res);
      }).catch(err => {
        console.log(err);
      })
  }

  clickOne = () => {
    let dislikedPaper = this.props.papers[0];
    let id = dislikedPaper.id;

    axios.post("/papers", {
      userId: this.props.userID,
      reportId: id,
      score: 1
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    this.props.removePaper();

    axios.get(`/papers?id=${this.props.userID}`)
      .then(res => {
        console.log(res)
        this.props.addPaper(res);
      })
  }

  clickTwo = () => {
    let likedPaper = this.props.papers[0];
    let id = likedPaper.id;

    this.props.addLikedPaper(likedPaper);
    
    axios.post("url", {
      userId: this.props.userID,
      reportId: id,
      score: 2
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    this.props.removePaper();

    axios.get(`/papers?id=${this.props.userID}`)
      .then(res => {
        console.log(res)
        this.props.addPaper(res)
      })
  }

  clickThree = () => {
    let superLikedPaper = this.props.papers[0];
    let id = superLikedPaper.id;

    this.props.addLikedPaper(superLikedPaper);
    
    axios.post("url", {
      userId: this.props.userID,
      reportId: id,
      score: 3
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    this.props.removePaper();

    axios.get(`/papers?id=${this.props.userID}`)
      .then(res => {
        console.log(res)
        this.props.addPaper(res);
      })
  }

  componentDidUpdate = () => {
    localStorage.setItem("userID", JSON.stringify(this.props.userID));
  }

  render() {
    return (
      <div className="choosetwo-container">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-5">
              { this.props.papers[0] && <Card ref="researchpaper" paper={ this.props.papers[0] }/> }
            </div>
            <div class="col-md-7">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <p class="choose-rating">
                    Select a rating below (1 = low, 3 = high) and we'll try our best to tune your likings.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center">
                <div className="col-md-4">
                  <div class="button-container">
                    <button type="button" onClick={ this.clickOne } id="one" className="btn btn-primary choose-button">1</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="button-container">
                    <button type="button" onClick={ this.clickTwo } id="two" className="btn btn-primary choose-button">2</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="button-container">
                    <button type="button" onClick={ this.clickThree } id="three" className="btn btn-primary choose-button">3</button>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div class="results-button-container">
                    <NavLink to="/list">
                      <button type="button" id="get-started" className="btn btn-primary">See My Results</button>
                    </NavLink>
                  </div>
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
    papers: state.papers,
    userID: state.userID
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPapers: papers => { dispatch(setPapers(papers)) },
    setUserID: id => { dispatch(setUserID(id)) },
    removePaper: () => { dispatch(removePaper()) },
    addPaper: paper => { dispatch(addPaper(paper)) },
    addLikedPaper: likedPaper => { dispatch(addLikedPaper(likedPaper)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTwo);
