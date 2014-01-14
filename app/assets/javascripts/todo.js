angular.module("Todo", ["ngResource"])

function TodoController($scope, $filter, $resource) {
  Todo = $resource("/todos")
    $scope.todos = Todo.query()

  Instance = $resource("todos/:id", {id: '@id'}, {update: {method: 'PUT'}})


  $scope.getTotalTodos = function () {
      return $scope.todos.length;
  };

  $scope.clearCompleted = function () {
    updateServer($scope.todos);
    $scope.todos = $filter("filter")($scope.todos, {done:false});
  };

  function updateServer (todos) {
    for (var i = todos.length - 1; i >= 0; i--) {
      console.log({ id: todos[i].id })
      updateTodo(todos[i])
    };
  };

  function updateTodo (todo) {
    Instance.get({ id: todo.id }, function(user){
      console.log(arguments)
      user.done = todo.done
      user.$update()        
    })
  };

  $scope.addTodo = function () {
    entry = Todo.save({title:$scope.newTodo.title, importance:$scope.newTodo.importance, description:$scope.newTodo.description, done:false})
    $scope.todos.push(entry);
    $scope.newTodo.title = '';
    $scope.newTodo.importance = '';
    $scope.newTodo.description = '';
  };

}