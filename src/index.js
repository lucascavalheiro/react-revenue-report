import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { getStore, makeStore } from './store/configure-store';

makeStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
