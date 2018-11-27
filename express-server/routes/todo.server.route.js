// ./express-server/routes/todo.server.route.js
const express = require('express');

const todoController = require('../controllers/todo.server.controller');

const router = express.Router();

router.route('/')
  .get(todoController.getTodos)
  .post(todoController.addTodo)
  .put(todoController.updateTodo);

router.route('/:id')
  .get(todoController.getTodo)
  .delete(todoController.deleteTodo);

module.exports = router;