import { createStore } from 'redux';

const reducerFunc = (state = 0) => {
  return state;
};

export const store = createStore(reducerFunc);
