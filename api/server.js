const start = require('./index.js')

const port = process.env.PORT
start({ port })
  .then(app => {})
  .catch(err => console.error(err))
