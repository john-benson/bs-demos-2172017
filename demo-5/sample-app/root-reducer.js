const counterReducer = require('../../common/counter/reducer');
const combineReducers = require('redux-immutable').combineReducers;

const rootReducer = combineReducers({
  counter: counterReducer
});

module.exports = rootReducer;
