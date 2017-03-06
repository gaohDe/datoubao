/**
 * Created by gaohuan on 2017/3/5.
 */
App.controller('loginCtrl',['$scope','$state',function($scope,$state){
    $scope.submit = function(){
        $state.go('app.singleview');
    };
}]);