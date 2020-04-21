// Load express
// Require modules
const express = require('express');
const path = require('path');

// Require the To Do "database"
const todoDb = require('./data/todo-db');

// Require the Students "database"
const studentDb = require('./data/students-db');

// Create the Express app
const app = express();
 	
// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 	
 	
// Mount middleware (app.use)
 	
 	
// Mount routes
app.get('/', (req, res) => {
    res.redirect('/home');
});

// Map a home route
app.get('/home', (req, res) => {
    res.render('home');
});

// Map a students route
app.get('/students', (req, res) => {
    res.render('students');
});

// Map a To Do route
app.get('/todos', (req, res) => {
    res.render('todos/index', {
        todos: todoDb.getAll()
    });
});

// Tell the app to listen on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
});