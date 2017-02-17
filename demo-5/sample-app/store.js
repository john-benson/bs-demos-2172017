const rootReducer = require('./root-reducer');
const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const thunk = require('redux-thunk').default;

module.exports = (defaultState) => {
  return createStore(rootReducer, defaultState, applyMiddleware(thunk));
};
