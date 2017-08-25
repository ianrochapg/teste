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


  $scope.addCarrinho = function(product){
        $scope.carrinho.push(product);
        $scope.somaParcelas = Number($scope.somaParcelas) + Number(product.price.installmentValue);
        $scope.somaTotal = Number($scope.somaTotal) + Number(product.price.value);
        $scope.itemCarrinho = true;
        console.log($scope.carrinho);

  };

  $scope.remCarrinho = function(id){
    for (var i = 0; i < $scope.carrinho.length; i++) {
      if($scope.carrinho[i].id == id){
        $scope.somaParcelas = Number($scope.somaParcelas) - Number($scope.carrinho[i].price.installmentValue);
        $scope.somaTotal = Number($scope.somaTotal) - Number($scope.carrinho[i].price.value);
        $scope.carrinho.splice(i, 1);
        console.log($scope.carrinho);
      }

      if($scope.carrinho == ''){
        $scope.itemCarrinho = false;
        $scope.somaParcelas = 0;
        $scope.somaTotal = 0;

      }
    }
  };

  $scope.trocarImg = function(atual, total){
    atual++;

    if(atual > total){
      return 0;
    }

    return atual;
  };

  // um for pra varrer a lista, com a id, encontrar o produto e a posição, e alterar o no vetor. Criar um vetor só com as imagens iniciais.

});
