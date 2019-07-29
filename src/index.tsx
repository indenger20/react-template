import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { store, history } from './stores';

import 'normalize.css';
import 'react-dropdown/style.css';
import 'react-table/react-table.css';
import 'react-tabs/style/react-tabs.css';
import './assets/scss/styles.scss';
import App from './App';

function Main() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
