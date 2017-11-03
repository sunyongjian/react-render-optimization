import React from 'react';
import AA from '../../components/usual/AA';
import PureAA from '../../components/usual/PureAA';

export default class A extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      a: {
        b: {
          c: 1,
        },
      },
    };
  }

  handleClick = () => {
    const { b } = this.state.a;
    b.c += 1;
    this.setState({
      a: {
        b,
      },
    });
  }

  render() {
    return (
      <div className="container">
        <div className="usual-container">
          <div className="primary-btn" onClick={this.handleClick}>加1</div>
          <AA b={this.state.a.b} />
        </div>
        <div className="usual-container">
          <div className="primary-btn" onClick={this.handleClick}>加1</div>
          <PureAA b={this.state.a.b} />
        </div>
      </div>
    );
  }
}
