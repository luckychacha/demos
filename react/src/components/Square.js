import React from 'react';

import Selector from './Selector'
import Result   from './Result' 

import styles   from '../style/style.less'

export default class Square extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    	visible: 1,
    	currVal: 2,
    }
  }

  handleVisible() {
    this.setState({
      visible: this.state.visible === 1 ? 0 : 1,
    })
  }

  handleSquare() {
    this.setState({
      currVal: this.state.currVal * this.state.currVal,
    })
  }

  render() {
    return (
      <div className="module">
      	<Selector name={this.props.name} visible={this.state.visible} changeVisible={() => this.handleVisible()} />
        <button className="btn-horizontal" onClick={() => this.handleSquare()}>square</button>
        <div className="clear"></div>
        <Result visible={this.state.visible} name={this.props.name} currVal={this.state.currVal} type="square" />
      </div>
    );
  }
}
