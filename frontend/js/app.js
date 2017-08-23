// definindo e iniciando o módulo do angular
var app = angular.module("buscape", []);

// Controller da página
app.controller('ItemsCtrl', function($scope, $http) {

  $scope.resposta = [];

  $http.get("http://localhost:3000/data.json").then(function(response) {
    $scope.total = response.data;
    $scope.resposta = $scope.total.items;
  });

  $scope.carrinho = [];
  $scope.somaParcelas = 0;
  $scope.itemCarrinho = false;
  $scope.somaTotal = 0;
  $scope.imgSelecionada = 0;


  $scope.AddCarrinho = function(id){
    for (var i = 0; i < $scope.resposta.length; i++) {
      if($scope.resposta[i].product.id == id){
        $scope.carrinho.push($scope.resposta[i]);
        $scope.somaParcelas = Number($scope.somaParcelas) + Number($scope.carrinho[i].product.price.installmentValue);
        $scope.somaTotal = Number($scope.somaTotal) + Number($scope.carrinho[i].product.price.value);
        $scope.itemCarrinho = true;
        console.log($scope.carrinho);
      }
    };
  };

  $scope.RemCarrinho = function(id){
    for (var i = 0; i < $scope.carrinho.length; i++) {
      if($scope.carrinho[i].product.id == id){
        $scope.somaParcelas = Number($scope.somaParcelas) - Number($scope.carrinho[i].product.price.installmentValue);
        $scope.somaTotal = Number($scope.somaTotal) - Number($scope.carrinho[i].product.price.value);
        $scope.carrinho.splice(i, 1);
        console.log($scope.carrinho);
      }

      if($scope.carrinho == ''){
        $scope.itemCarrinho = false;
      }
    }
  };

  $scope.trocarImg = function(num){
    $scope.imgSelecionada = num;
  }

});
