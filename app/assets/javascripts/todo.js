app = angular.module("Todo", ["ngResource"])

function TodoController($scope, $filter, $resource) {
  Todo = $resource("/todos/:id", {id: "@id"}, {update: {method: 'PUT'}})
  $scope.todos = Todo.query()

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };

  $scope.clearCompleted = function () {
    Todo.save({done:true})
    $scope.todos = $filter("filter")($scope.todos, {done:false});
};

  $scope.addTodo = function () {
    entry = Todo.save({title:$scope.newTodo.title, importance:$scope.newTodo.importance, description:$scope.newTodo.description, done:false})
    $scope.todos.push(entry);
    $scope.newTodo.title = '';
    $scope.newTodo.importance = '';
    $scope.newTodo.description = '';
  };

}