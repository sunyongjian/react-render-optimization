import React from 'react';
import { render } from 'react-dom';
import A from './containers/usual/A';
import './index.less';

const App = () => (
  <div>
    <img src={require('./logo.svg')} alt="logo" />
    <A />
  </div>
);

if (module.hot) { // hmr necessary
  module.hot.accept();
}

render(<App />, document.getElementById('root'));
