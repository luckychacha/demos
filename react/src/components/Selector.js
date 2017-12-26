import React from 'react';

import styles from '../style/style.less'

export default class Selector extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="horizontal">
        是否显示{this.props.name}：
      	<select onChange={this.props.changeVisible}>
		  <option value="1">是</option>
		  <option value="0">否</option>
		</select>
      </div>
    );
  }
}
