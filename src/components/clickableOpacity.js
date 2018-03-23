import React, { Component } from 'react';

export default class ClickableOpacity extends Component {

    constructor(props){
        super(props)
        this.state = {
            isClicked: false
        }
    }

    handleClick(e){
        if (typeof this.props.onClick === "function" && !this.props.disabled){
            this.props.onClick(e)
        }
    }

  render() {
    let divStyle = {
        opacity: this.state.isClicked || this.props.disabled ? 0.5 : 1,
    }

    let className = ""
    if (!this.props.selectable){
        className += " noselect"
    }

    return (
      <div className={className} style={{...this.props.style, ...divStyle}} onMouseLeave={e => this.setState({isClicked: false})} onMouseUp={e => this.setState({isClicked: false})} onMouseDown={e => this.setState({isClicked: true})} onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </div>
    )
  }
};
