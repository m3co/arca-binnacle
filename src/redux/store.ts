import { ARCASocket, reducer } from 'arca-redux';
import { createStore } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const socket = new ARCASocket(store);
