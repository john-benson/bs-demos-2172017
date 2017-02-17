const React = require('react');
const render = require('react-dom').render;
const createStore = require('./store');
const Provider = require('react-redux').Provider;
const RouterContext = require('react-router').RouterContext;
const Router = require('react-router').Router;
const routes = require('./routes');
const history = require('react-router').browserHistory;
const fromJS = require('immutable').fromJS;
const asyncMatch = require('../../utils').asyncMatch;
require('./styles.css');

const defaultState = fromJS(window.__PRELOADED_STATE__ || {});

const store = createStore(defaultState);

const rootNode = document.getElementById('root');

asyncMatch({ history, routes }).then(({ renderProps }) => {
  render(
    <Provider store={ store } >
      <Router { ...renderProps } />
    </Provider>,
    rootNode
  )
});

if (!rootNode || !rootNode.firstChild || !rootNode.firstChild.attributes || !rootNode.firstChild.attributes['data-react-checksum']) {
  console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
} else {
  console.log('Huzzah! You\'ve avoided your initial render.')
}
