export default function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    console.log(state);
    listeners.forEach((listener) => listener());
  };
  dispatch({});
  return { subscribe, getState, dispatch };
}
