import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
  render() {
    return (
      <div className="calc-results__container">
        <h3>This loan will cost you</h3>
        <h2>{this.props.location.state}</h2>
      </div>
    )
  }
}

export default Results;