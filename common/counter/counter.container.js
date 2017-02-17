const connect = require('react-redux').connect;
const actions = require('./actions');
const Counter = require('./counter.presentation');

const mapProps = (state, props) => ({
  count: state.getIn(['counter', 'count']),
  lastAmount: state.getIn(['counter', 'lastAmount'])
});

const mapDispatch = {
  onClick: actions.incrementCounter
};

module.exports = connect(mapProps, mapDispatch)(Counter);
