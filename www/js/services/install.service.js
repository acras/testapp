angular.module('testapp')

.service('InstallService', function($http){
  var url = 'http://localhost:3000/api/mobile/install/'

  return {
    install: function(codigoInstalacao) {
      return  $http.get(url + codigoInstalacao).then(
        function(response){
          return response.data
        })
    }
  }
})
