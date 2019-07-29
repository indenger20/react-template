import UserTypes from '../actions/user/actionTypes';
import { IUserState } from '../interfaces';

const userInitialState: IUserState = {
  email: '',
};

export default (state: IUserState = userInitialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
