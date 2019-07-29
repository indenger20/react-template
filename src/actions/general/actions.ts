import GeneralTypes from './actionTypes';
import { store, history } from '../../stores';

export function startPreload() {
  return {
    type: GeneralTypes.START_PRELOAD,
  };
}

export function stopPreload() {
  return {
    type: GeneralTypes.STOP_PRELOAD,
  };
}
