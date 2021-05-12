import React, { Component } from 'react';
import './categoryButton.css';

class CategoryButton extends Component {
  render() {
    return <button style={this.props.style} onClick = {this.props.onClick}>{this.props.label}</button>
  }
}

export default CategoryButton