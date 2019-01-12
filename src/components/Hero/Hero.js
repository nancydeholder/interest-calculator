import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Hero.css';
import Form from '../Form/Form';
import Results from '../Results/Results';

class Hero extends Component {
  render() {
    return (
      <div className="calc-hero__background">
        <div className="calc-hero__container">
          <h1 className="calc-text--white calc-text--center calc-hero__headline">Interest Savings Calculator</h1>
          <div className="calc-hero__form-background">
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Form} />
              <Route exact path="/loanamount" component={Results} />
            </div>
          </BrowserRouter>
          </div>
        </div>  
      </div>
    )
  }
}

export default Hero;