if (typeof require.ensure !== 'function') {
  require.ensure = (d, c) => c(require)
}

module.exports = {
  path: '/',
  indexRoute: { onEnter: (nextState, replace) => replace('/hello') },
  childRoutes: [
    {
      path: 'hello',
      getComponent: (nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('../../common/hello-world'))
        })
      }
    },
    {
      path: 'about',
      getComponent: (nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('../../common/about-us'))
        })
      }
    },
    {
      path: 'counter',
      getComponent: (nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('../../common/counter/counter.container'))
        })
      }
    },
    {
      path: 'charts',
      getComponent: (nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('../../common/charts'))
        })
      }
    }
  ]
};
