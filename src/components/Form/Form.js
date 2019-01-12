import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Form.css';

class Form extends Component {

  state = {
    interestRate: {
      value: ''
    },
    loanLength: {
      value:''
    },
    loanAmount: {
      value: '',
       typed: false
    },
    finalAmount: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: {
        value: e.target.value,
        typed: true
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var interest = this.state.interestRate.value / 100;
    var termInterest = interest * this.state.loanLength.value + 1;
    var finalAmount = this.state.loanAmount.value * termInterest;

    this.setState({
      finalAmount: finalAmount
    })
  }

  render() {
    const typed = this.state.loanAmount.typed;

    if (this.state.finalAmount) {
      return <Redirect to={{
        pathname: '/loanamount',
        state: this.state.finalAmount
      }} />
    }

    return (
      <form className="calc-form__container" onSubmit={this.handleSubmit}>
        <div className="calc-form__input-container">
        <p className={`calc-form__input-icon--left ${typed ? '' : 'calc-form__input-icon--hide'}`}>$</p>
        <input
          type="text"
          name="loanAmount"
          className={`calc-form__input ${typed ? 'calc-form__input--left' : ''}`}
          placeholder="Original Loan Amount"
          onChange={this.handleChange}
          value={this.state.loanAmount.value}
          data-lpignore="true"
        />
        </div>
        <div className="calc-form__input-container">
          <input
            type="text"
            name="interestRate"
            className="calc-form__input"
            placeholder="Interest Rate"
            onChange={this.handleChange}
            value={this.state.interestRate.value}
            data-lpignore="true"
          />
          <p className="calc-form__input-icon--right">%</p>
        </div>
        <div className="calc-form__input-container">
        <input
          type="text"
          name="loanLength"
          className="calc-form__input"
          placeholder="Length of Loan"
          onChange={this.handleChange}
          value={this.state.loanLength.value}
          data-lpignore="true"
        />
        <p className="calc-form__input-icon--right">years</p>
        </div>
        <input 
        type="submit"
        className="calc-form__button"
        value="Submit"
        />
      </form>
    )
  }
}

export default Form;