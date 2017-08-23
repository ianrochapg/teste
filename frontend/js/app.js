// definindo e iniciando o módulo do angular
var app = angular.module("buscape", []);

// Controller da página
app.controller('ItemsCtrl', function($scope, $http) {
  //
  // $scope.teste = [
  //   {nome: 'Ian'},
  //   {nome: 'Cássia'},
  //   {nome: 'Ádrian'},
  //   {nome: 'Jana'},
  //   {nome: 'Mara'},
  // ];

  $scope.resposta = [];
  $http.get('http://localhost:3000/data.json',function(response){
    $scope.resposta = response;
  });
});
