import React, {Component } from 'react';
import { connect } from 'react-redux'

@connect((store) => {
    return {}
})

export default class Index extends Component {
  render() {
    return (
      <div style={{flex: 1, textAlign: "center"}}>
        <p>Index route</p>
      </div>
    )
  }
};