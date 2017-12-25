import React    from 'react';

import Selector from './Selector'
import Result   from './Result' 

import styles   from '../style/style.less'

export default class Add extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    	visible: 1,
    	currVal: 0,
    }
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
      <div className="module">
      	<Selector name={this.props.name} visible={this.state.visible} changeVisible={() => this.handleVisible()} />
        <button className="btn-horizontal" onClick={() => this.handleAdd()}>add 1</button>
        <div className="clear"></div>
        <Result visible={this.state.visible} name={this.props.name} currVal={this.state.currVal} type="add" />
      </div>
    );
  }
}
