import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  console.log('state: ',state, ' action: ', action);
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'increase') {
    console.log('inside increase reducer');
    return {
      counter: state.counter + action.value,
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
