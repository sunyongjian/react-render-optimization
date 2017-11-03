import React from 'react';

export default class AA extends React.PureComponent {
  render() {
    const { b: { c } } = this.props;
    return <div>PureComponent： {c}</div>;
  }
}
