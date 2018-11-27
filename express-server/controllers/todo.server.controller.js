// ./express-server/controllers/todo.server.controller.js
const mongoose = require('mongoose');

const Todo = require('../models/todo.server.model');

const getTodos = (req, res) => {
  Todo.find().exec((err, todos) => {
    if(err){
      return res.json({'success': false, 'message':'Some Error'});
    }
    return res.json({'success':true, 'message': 'Todos fetched successfuly', todos});
  });
}

const addTodo = (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err, todo) => {
    if(err){
      return res.json({'success':false, 'message':'Some error'});
    }
    return res.json({'success':true, 'message':'Todo added successfully', todo});
  })
}

const updateTodo = (req, res) => {
  Todo.findOneAndUpdate({_id:req.body.id}, req,body, {new: true},(err, todo) => {
    if(err){
      return res.json({'success':false, 'message':'some error', 'error': err});
    }
    console.log('todo: ', todo);
    return res.json({'success':true, 'message':'Updated Successfully', todo});
  })
}

const getTodo = (req, res) => {
  Todo.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
      return res.json({'success': false, 'message': 'some error'});
    }
    if(todo.length){
      return res.json({'success':true, 'message':'Todo fetched sucessfully', todo});
    } else {
      return res.json({'success':false, 'message':'Todo with the given id not found'});
    }
  })
}

const deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id, (err, todo) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true, 'message':todo.todoText+' deleted successfully'});
  })
}

module.exports.getTodos = getTodos;
module.exports.addTodo = addTodo;
module.exports.updateTodo = updateTodo;
module.exports.getTodo = getTodo;
module.exports.deleteTodo = deleteTodo;

