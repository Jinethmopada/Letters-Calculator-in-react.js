import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {InputElement: ''}

  onSearchInput = event => {
    this.setState({InputElement: event.target.value})
  }

  render() {
    const {InputElement} = this.state
    return (
      <div className="bg-container">
        <img
          className="cal-img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
        <h1 className="heading">Calculate the Letters You Enter</h1>
        <label className="para" htmlFor="input-element-label">
          Enter the phrase
        </label>
        <input
          className="input-element"
          type="text"
          placeholder="Enter the Phrase"
          id="input-element-label"
          value={InputElement}
          onChange={this.onSearchInput}
        />
        <div>
          <button className="button" type="button">
            No.of Letters: {InputElement.length}
          </button>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
