// . express-server/app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bb = require('express-busboy');
const SourceMapSupport = require('source-map-support');

const todoRoutes = require('./express-server/routes/todo.server.route');

const app = express();
bb.extend(app);

// cors
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested_With, Content-Type, Accept");
  next();
})

// config middlewear
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

// port
const port = process.env.PORT || 3001;

// connect to db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern-todo-app', {
  useNewUrlParser: true
  }
);

SourceMapSupport.install();

app.use('/api', todoRoutes);

app.get('/', (req,res) => {
  return res.end('Api Functioning');
});

app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>')
});

app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});







