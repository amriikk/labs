const Todo = require('../models/todo');


index = (req, res) => {
    res.render('todos/index', {
        todos: Todo.getAll(),
        time: req.time
    });
}

show = (req, res) => {
    res.render('todos/show', {
      todo: Todo.getOne(req.params.id),
      todoNum: parseInt(req.params.id) + 1
    });
}

newTodo = (req, res) => {
    res.render('todos/new');
}

create = (req, res) => {
    console.log(req.body);
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/todos');
}

deleteTodo = (req, res) => {
    Todo.deleteOne(req.params.id);
    res.redirect('/todos');
}

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo
};