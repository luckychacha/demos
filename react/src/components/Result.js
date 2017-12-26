import React,{ PropTypes } from 'react';

export default class Result extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="result">
        { this.props.visible === 1 && ['add', 'square'].includes(this.props.type) 
          && (
                <p>{this.props.name}：<span>{this.props.currVal}</span></p>
            )
        }
        
        { this.props.visible === 1 && this.props.type === 'list'
          && (
            <span>
              {this.props.name}：
              <span>
                <ul>
                  {
                    this.props.currVal.map((value, index) => (
                        <li key={index}>{value}</li>
                      )
                    )
                  }
                </ul>
              </span>
             </span>
            )
        }
      </div>  
    );
  }
}
