import React from 'react';

import Selector from './Selector'
import Result   from './Result' 

import styles   from '../style/style.less'

export default class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    	visible: 1,
    	currVal: [],
    }
  }

  handleVisible() {
    this.setState({
      visible: this.state.visible === 1 ? 0 : 1,
    })
  }

  handleAddTodo() {
  	let todoStr = `todo${this.state.currVal.length}`;
    this.setState({
      currVal: [...this.state.currVal, todoStr],
    })
  }

  handleRemoveTodo() {
  	this.state.currVal.pop()
    this.setState({
      currVal: [...this.state.currVal]
    })
  }

  render() {
    return (
      <div className="module">
      	<Selector name={this.props.name} visible={this.state.visible} changeVisible={() => this.handleVisible()} />
      	{
      		this.state.currVal.length <= 5
        		&& <button className="btn-horizontal" onClick={() => this.handleAddTodo()}>add todo</button>
      	}
      	{
        	this.state.currVal.length > 0
        		&& <button className="btn-horizontal" onClick={() => this.handleRemoveTodo()}>remove todo</button>
      	}
        <div className="clear"></div>
        <Result visible={this.state.visible} name={this.props.name} currVal={this.state.currVal} type="list" />
      </div>
    );
  }
}
