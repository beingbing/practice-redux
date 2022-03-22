import { createStore } from 'redux';

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  console.log('state: ',state, ' action: ', action);
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'increase') {
    console.log('inside increase reducer');
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter : !state.showCounter
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
