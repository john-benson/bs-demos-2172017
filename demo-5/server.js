require('ignore-styles');

const React = require('React');
const utils = require('../utils.js');
const renderToString = require('react-dom/server').renderToString;
const Koa = require('koa');
const app = new Koa();
app.listen(3000);
const RouterContext = require('react-router').RouterContext;
const Provider = require('react-redux').Provider;
const fromJS = require('immutable').fromJS;
const routes = require('./sample-app/routes');
const createStore = require('./sample-app/store');
const serve = require('koa-static');

const renderFullPage = (state, html) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Demo App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for Security isues with this approach:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(state.toJS())}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `;
}

const renderApp = (store, renderProps) => {
  return renderToString(<Provider store={ store }>
    <RouterContext {...renderProps} />
  </Provider>);
}

app.use(serve('static'));

app.use(async (ctx, next) => {
  try {
    const defaultState = fromJS({ counter: { count: Math.floor(Math.random() * 40) } });
    const store = createStore(defaultState);

    const { redirectLocation, renderProps } = await utils.asyncMatch({ routes, location: ctx.url });

    if (redirectLocation) {
      ctx.redirect(redirectLocation.pathname + redirectLocation.search);

    } else if (renderProps) {
      const html = renderApp(store, renderProps);

      ctx.body = renderFullPage(defaultState, html);

    } else {
      await next();
    }

  } catch (e) {
    ctx.body = e.stack;
  }
});
