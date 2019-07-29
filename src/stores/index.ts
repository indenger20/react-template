import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers';

const currentWindow: any = window;

const composeEnhancers =
  typeof currentWindow === 'object' &&
    currentWindow['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
    ? currentWindow['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
    : compose;

export const history = createBrowserHistory();
const reduxRouterMiddleware = routerMiddleware(history);
const enhancer = composeEnhancers(applyMiddleware(thunk, reduxRouterMiddleware));
export const store = createStore((rootReducer(history)), enhancer);
