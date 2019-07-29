import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { IApplicationState } from '../interfaces';
import { History } from 'history';

import user from './user';
import document from './document';

const rootReducer = (history: History) =>
  combineReducers<IApplicationState>({
    user,
    document,
    router: connectRouter(history),
  });

export default rootReducer;
