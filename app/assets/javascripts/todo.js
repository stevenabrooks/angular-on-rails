function TodoController($scope, $filter) {

  $scope.todos = [
    {text:'Learn AngularJS', importance: 5, done:false},
    {text:'Build an app', importance: 10, done:false}
  ];

  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };

  $scope.clearCompleted = function () {
    $scope.todos = $filter("filter")($scope.todos, {done:false});
};

  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, importance:$scope.formTodoImportance, done:false});
    $scope.formTodoText = '';
    $scope.formTodoImportance = '';
  };

}