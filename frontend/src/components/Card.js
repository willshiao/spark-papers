import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="container-fluid">
          <div className="paper-card">
            { this.props.paper.name && <h2 className="paper-title">{ this.props.paper.name }</h2> }
            { this.props.paper.authors && <p className="paper-info"><span class="bold-me">Author(s): </span>{ this.props.paper.authors.join(", ") }</p> }
            { this.props.paper.abstract && <p className="paper-info"><span className="bold-me">Abstract: </span>{ this.props.paper.abstract }</p> }
            { this.props.paper.conference && <p className="paper-info"><span className="bold-me">Conference: </span>{ this.props.paper.conference }</p> }
            { this.props.paper.url && <p className="paper-info"><span className="bold-me">URL: </span>{ this.props.paper.url }</p> }
          </div>
        </div>
      </div>
    )
  }
}
