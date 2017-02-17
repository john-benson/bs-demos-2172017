const React = require('React');
const utils = require('../utils.js');
const renderToString = require('react-dom/server').renderToString;
const Koa = require('koa');
const app = new Koa();
app.listen(3000);
const RouterContext = require('react-router').RouterContext;
const HelloWorld = require('../common/hello-world');
const AboutUs = require('../common/about-us');

const routes = {
  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/hello') },
  childRoutes: [
    { path: 'hello', component: HelloWorld },
    { path: 'about', component: AboutUs }
  ]
};

app.use( async (ctx, next) => {
  try {
    const { redirectLocation, renderProps } = await utils.asyncMatch({
      routes, location: ctx.url
    });

    if (redirectLocation) {
      ctx.redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      ctx.body = renderToString(<RouterContext {...renderProps} />);
    } else {
      await next()
    }

  } catch (e) {
    ctx.body = e.stack;
  }
});
