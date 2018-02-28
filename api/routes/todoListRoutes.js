'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/accs')
    .get(todoList.list_all_acc)
    .post(todoList.create_a_acc);


  app.route('/tasks/:accId')
    .get(todoList.read_a_acc)
    .put(todoList.update_a_acc)
    .delete(todoList.delete_a_acc);
};
