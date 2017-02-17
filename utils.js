const match = require('react-router').match;

exports.asyncMatch = (location) => {
  return new Promise((resolve, reject) => {
    match(location, (error, redirectLocation, renderProps) => {
      if (error) {
        return reject(error)
      }
      resolve({redirectLocation, renderProps})
    })
  })
}
