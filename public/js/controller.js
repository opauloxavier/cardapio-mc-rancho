var app = angular.module("cardapioApp",[]);

app.controller("mainController",function($http, $scope,$rootScope){

	$http.get("/cardapio-mc-rancho/public/produtos.json").success(function(response){
			$scope.produtos = response;
			return $scope.produtos;
	});

 $rootScope.showAll = function(){
    $scope.showHamburguer=true;
    $scope.showHotDog = true;
    $scope.showPizzaSalgada = true;
    $scope.showPizzaDoce = true;
    $scope.showFamilia = true;
    $scope.showPorcao = true;
    $scope.showBebida =true;
    $scope.showVitamina = true;
    $scope.showSuco = true; 
    $scope.showCombo=true;
     
     
    $scope.isActiveHamburguer=true;
    $scope.isActiveBebidas=true;
    $scope.isActiveCombo=true;
    $scope.isActivePorcao=true;
 }
 
  $scope.activeButtonBebida = function() {
    $scope.isActiveBebida = !$scope.isActiveBebida;
      $scope.showBebida=!$scope.showBebida;
  }
  
$scope.activeButtonHamburguer = function() {
    $scope.isActiveHamburguer = !$scope.isActiveHamburguer;
      $scope.showHamburguer=!$scope.showHamburguer;
  }

$scope.activeButtonCombo = function() {
    $scope.isActiveCombo = !$scope.isActiveCombo;
      $scope.showCombo=!$scope.showCombo;
  }

});