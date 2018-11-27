// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

export const getTodos = (req, res) => {
  Todo.find().exec((err, todos) => {
    if(err){
      return res.json({'success': false, 'message':'Some Error'});
    }
    return res.json({'success':true, 'message': 'Todos fetched successfuly', todos});
  });
}

export const addTodo = (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err, todo) => {
    if(err){
      return res.json({'success':false, 'message':'Some error'});
    }
    return res.json({'success':true, 'message':'Todo added successfully', todo});
  })
}

export const updateTodo = (req, res) => {
  Todo.findOneAndUpdate({_id:req.body.id}, req,body, {new: true},(err, todo) => {
    if(err){
      return res.json({'success':false, 'message':'some error', 'error': err});
    }
    console.log('todo: ', todo);
    return res.json({'success':true, 'message':'Updated Successfully', todo});
  })
}

export const getTodo = (req, res) => {
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

export const deleteTodo = (req, res) => {
  Todo.findByIdAndRemove({_id:req.params.id}).exec((err, todo) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true, 'message':todo.totoText+' deleted successfully'});
  })
}