const express = require('express')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const app = express()

const adapter = new FileSync('db.json')
const db = low(adapter)

db
  .defaults({
    todos: [
      {
        title: 'Learn React',
      },
    ],
  })
  .write()

const start = async ({ port }) => {
  app.get('/api/todos', (req, res) => {
    console.log('hello')
    res.json(db.get('todos'))
  })
  app.post('/api/todos', (req, res) => {
    const todo = req.body
    db
      .get('todos')
      .push(todo)
      .write()
  })
  app.listen(port, () => {
    console.log('App listening on port', port)
  })
  return await app
}

module.exports = start
