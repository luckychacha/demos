import React from 'react';

import Selector from './Selector'
import styles from '../style/style.less'

export default class Add extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    	visible: 1,
    	currVal: 0,
    }
    //this.handleVisible = this.handleVisible.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }


  handleVisible() {
    this.setState({
      visible: this.state.visible === 1 ? 0 : 1,
    })
  }

  handleAdd() {
    this.setState({
      currVal: this.state.currVal + 1,
    })
  }

  render() {
    return (
      <div className="line">
      	<Selector name={this.props.name} visible={this.state.visible} changeVisible={() => this.handleVisible()} />
        <button className="horizontal" onClick={() => this.handleAdd()}>add 1</button>
      	{
      		this.state.visible == 1 && 
      		(
      			<p>
      				{this.props.name}：{this.state.currVal}
  				  </p>
          )
      	}
      </div>
    );
  }
}
