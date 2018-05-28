import { createStore } from 'redux';

const initialState = {
  schedule: [
    {
      busName: '199A',
      stopName: 'Finch stn',
      frequency: '8 minutes',
      nextArrival: '10:12am'
    },
    {
      busName: '39b',
      stopName: 'Finch stn',
      frequency: '10 minutes',
      nextArrival: '11:02am'
    },
    {
      busName: '53',
      stopName: 'Finch stn',
      frequency: '1 minutes',
      nextArrival: '10:02am'
    }
  ] 
};

const reducerFunc = (state = initialState) => {
  return state;
};

export const store = createStore(reducerFunc);
