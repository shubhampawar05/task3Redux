// store.js
import { createStore } from 'redux';

const initialState = {
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
