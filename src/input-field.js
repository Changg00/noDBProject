import React, { Component } from 'react';
import './inputField.css';

class InputField extends Component {
  constructor(props) {
    super(props)
    this.state = {
        joke : '',
    }
  }

  handleSubmit(e) {
        e.preventDefault();
        this.props.addJoke(this.state.joke)
  }

  render() {
    return ( 
            <form onSubmit={e => this.handleSubmit(e)}>
                <input value = {this.state.joke}
                       onChange = {e => this.setState( {joke: e.target.value})}
                       type = "text"
                       placeholder = "Is it funny?"
                />
                <button type="submit">Send it!</button>
            </form>
          )
  }
}

export default InputField