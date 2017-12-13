const path = require('path')
const express = require('express')

const start = require('./../api')

const port = process.env.PORT

start({ port })
  .then(app => {
    app.use(express.static(path.join(__dirname, '../webapp/build')))
    app.get('/', (req, res) =>
      res.sendFile(path.join(__dirname, '../webapp/build/index.html')),
    )
  })
  .catch(e => console.error('Error on start:', e))
