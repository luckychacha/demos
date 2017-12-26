import React from 'react'

import Add      from './Components/Add'
import Square   from './Components/Square'
import List     from './Components/List'

import styles   from './style/style.less'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
      	<Add name="加法" />
      	<Square name="平方" />
      	<List name="列表" />
      </div>
    );
  }
}
