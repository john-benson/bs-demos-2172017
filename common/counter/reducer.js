const handleActions = require('redux-actions').handleActions;
const actions = require('./actions');
const Map = require('immutable').Map;


module.exports = handleActions({
  [actions.INCREMENT_SUCCESS]: (state, action) => state
    .set('count', state.get('count') + action.payload)
    .set('lastAmount', action.payload)
}, Map({ count: 0, lastAmount: null }));
