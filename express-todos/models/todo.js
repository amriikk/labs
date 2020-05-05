const todos = [
  {todo: 'Feed Dogs', done: true},
  {todo: 'Learn Express', done: false},
  {todo: 'Buy Milk', done: false}
];
  
getOne = (id) => {
  return todos[id];
}
  
getAll = () => {
  return todos;
}

create = (todo) => {
  todos.push(todo);
}

deleteOne = (id) => {
  todos.splice(id, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};