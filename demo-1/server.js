const React = require('React');
const utils = require('../utils.js');
const renderToString = require('react-dom/server').renderToString;
const Koa = require('koa');
const app = new Koa();
app.listen(3000);
const HelloWorld = require('../common/hello-world');

app.use(ctx => {
  ctx.body = renderToString(<HelloWorld msg={ ctx.request.query.name || 'Mystery Man'} />);
});
