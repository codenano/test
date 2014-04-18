angular.module('task.controller', [])
  .controller('Inic', function() {
    console.log('Inic View');
  })

  .controller('ListTask',['$scope',function($scope){

	  $scope.todos = JSON.parse(localStorage.getItem('todos')) || []

    $scope.addTodo=function(){
        $scope.newDone=false;
        $scope.newEstatus="Act";
        $scope.todos.push({
          'title':$scope.newTitulo,
          'descrip':$scope.newDescrip,
          'estatus':$scope.newEstatus,
          'done':$scope.newDoneu
        })
        $scope.newTodo=''
    }
    
    $scope.changeEstatus =function(){
        $scope.todos = $scope.todos.filter(function(item){
            
          if(item.done==true)
            item.estatus="Fin";
          else
            item.estatus="Act";
           
          return item.descrip;
        })
    }

    $scope.$watch('todos',function(newValue,oldValue){
      if(newValue!=oldValue){
        localStorage.setItem('todos',JSON.stringify(newValue))
    	}
    },true)

}]);