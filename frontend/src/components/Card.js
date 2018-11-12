import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="container-fluid">
          <div className="paper-card">
            { this.props.paper.name && <h2 className="paper-title">{ this.props.paper.name }</h2> }
            { this.props.paper.author && <p className="paper-info">Author(s): { this.props.paper.author }</p> }
            { this.props.paper.abstract && <p className="paper-info">{ this.props.paper.abstract }</p> }
            { this.props.paper.url && <p className="paper-info">{ this.props.paper.url }</p> }
          </div>
        </div>
      </div>
    )
  }
}
