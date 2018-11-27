const mongoose = require('mongoose');

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  fullName: String,
  todoText: String
});

module.exports = mongoose.model('Todo', Schema);
