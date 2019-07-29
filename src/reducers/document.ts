import GeneralTypes from '../actions/general/actionTypes';
import { IDocumentState } from '../interfaces';

const documentInitialState: IDocumentState = {
  isLoading: false,
};

export default (state: IDocumentState = documentInitialState, action: any) => {
  switch (action.type) {
    case GeneralTypes.START_PRELOAD:
      return { ...state, isLoading: true };
    case GeneralTypes.STOP_PRELOAD:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
