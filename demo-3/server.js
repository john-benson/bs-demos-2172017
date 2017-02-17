const React = require('React');
const utils = require('../utils.js');
const renderToString = require('react-dom/server').renderToString;
  const Koa = require('koa');

  const app = new Koa();

  app.listen(3000);
const RouterContext = require('react-router').RouterContext;
const Provider = require('react-redux').Provider;
const createStore = require('../common/sample-app/store');
const fromJS = require('immutable').fromJS;
const routes = require('./routes');

app.use(async (ctx, next) => {
  try {
    const { redirectLocation, renderProps } = await utils.asyncMatch({ routes, location: ctx.url });

    const defaultState = fromJS({ counter: { count: 5 } });
    const store = createStore(defaultState);

    if (redirectLocation) {
      ctx.redirect(redirectLocation.pathname + redirectLocation.search);

    } else if (renderProps) {
      ctx.body = renderToString(<Provider store={ store }>
        <RouterContext {...renderProps} />
      </Provider>);

    } else {
      await next();
    }

  } catch (e) {
    ctx.body = e.stack;
  }
});
