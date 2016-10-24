angular.module('testapp')

.controller('LoginController', ['$scope', 'InstallService', function($scope, InstallService){
  $scope.installCode = 'oi'

  $scope.installApp = function(){
    InstallService.install($scope.installCode)
  }
}])
