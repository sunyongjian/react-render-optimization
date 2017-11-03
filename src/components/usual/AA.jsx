import React from 'react';

export default class PureAA extends React.Component {
  render() {
    const { b: { c } } = this.props;
    return <div>Component： {c}</div>;
  }
}
