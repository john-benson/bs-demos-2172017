const HelloWorld = require('../common/hello-world');
const AboutUs = require('../common/about-us');
const Counter = require('../common/counter/counter.container');

module.exports = {
  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/hello') },
  childRoutes: [
    { path: 'hello', component: HelloWorld },
    { path: 'about', component: AboutUs },
    { path: 'counter', component: Counter }
  ]
};
