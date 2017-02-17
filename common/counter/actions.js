const createActions = require('redux-actions').createActions;

const INCREMENT_START = 'INCREMENT_START';
const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';

const { incrementStart, incrementSuccess, incrementFailed } = createActions(INCREMENT_START, INCREMENT_SUCCESS);

const incrementCounter = (amnt = 1) => {
  return (dispatch) => {
    dispatch(incrementStart());

    setTimeout(() => {
      const rnd = Math.floor(Math.random() * 5);

      return dispatch(incrementSuccess(amnt));
    }, 300);
  }
}

module.exports = {
  INCREMENT_START, INCREMENT_SUCCESS,
  incrementStart, incrementSuccess,
  incrementCounter
}
