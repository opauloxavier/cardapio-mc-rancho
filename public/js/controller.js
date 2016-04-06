var app = angular.module("cardapioApp",[]);


app.controller("mainController",function($http, $scope){

	$http.get("/cardapio-mc-rancho/public/produtos.json").success(function(response){
			$scope.produtos = response;
			return $scope.produtos;
	});

});