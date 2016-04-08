var app = angular.module("cardapioApp",[]);

app.controller("mainController",function($http, $scope,$rootScope){

	$http.get("/cardapio-mc-rancho/public/produtos.json").success(function(response){
			$scope.produtos = response;
			return $scope.produtos;
	});

 $rootScope.showAll = function(){
    $scope.showHamburguer= true; //
    $scope.showHotDog = true; //
    $scope.showPizzaSalgada = true; //
    $scope.showPizzaDoce = true; //
    $scope.showPorcao = true; //
    $scope.showBebida = true; //
    $scope.showVitamina = true;//
    $scope.showSuco = true; //
    $scope.showCombo = true; //
     
    $scope.isActiveHamburguer=true; //
    $scope.isActiveBebida=true; //
    $scope.isActiveCombo=true;  //
    $scope.isActivePorcao=true; //
    $scope.isActiveHotDog = true; //
    $scope.isActivePizzaSalgada = true; // 
    $scope.isActivePizzaDoce = true; //
    $scope.isActiveVitamina = true; //
    $scope.isActiveSuco = true; //
     
 }
 
  $scope.activeButtonBebida = function() {
    $scope.isActiveBebida = !$scope.isActiveBebida;
      $scope.showBebida=!$scope.showBebida;
  }
  
$scope.activeButtonHamburguer = function() {
    $scope.isActiveHamburguer = !$scope.isActiveHamburguer;
      $scope.showHamburguer=!$scope.showHamburguer;
  }

  $scope.activeButtonHotDog = function() {
    $scope.isActiveHotDog = !$scope.isActiveHotDog;
      $scope.showHotDog=!$scope.showHotDog;
  }

$scope.activeButtonCombo = function() {
    $scope.isActiveCombo = !$scope.isActiveCombo;
      $scope.showCombo=!$scope.showCombo;
  }

$scope.activeButtonSuco = function() {
    $scope.isActiveSuco = !$scope.isActiveSuco;
      $scope.showSuco=!$scope.showSuco;
  }

$scope.activeButtonVitamina = function() {
    $scope.isActiveVitamina = !$scope.isActiveVitamina;
      $scope.showVitamina=!$scope.showVitamina;
  }

$scope.activeButtonPorcao = function() {
    $scope.isActivePorcao = !$scope.isActivePorcao;
      $scope.showPorcao=!$scope.showPorcao;
  }

$scope.activeButtonFamilia = function() {
    $scope.isActiveFamilia = !$scope.isActiveFamilia;
      $scope.showFamilia=!$scope.showFamilia;
  }

$scope.activeButtonPizzaDoce = function() {
    $scope.isActivePizzaDoce = !$scope.isActivePizzaDoce;
      $scope.showPizzaDoce=!$scope.showPizzaDoce;
  }

$scope.activeButtonPizzaSalgada = function() {
    $scope.isActivePizzaSalgada = !$scope.isActivePizzaSalgada;
      $scope.showPizzaSalgada=!$scope.showPizzaSalgada;
  }

});