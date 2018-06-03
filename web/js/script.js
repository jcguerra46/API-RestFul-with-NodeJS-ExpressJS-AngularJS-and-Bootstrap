var myApp = angular
                .module('inclusionTest', [])
                .controller("inclusionController", function($scope, $http) {

                    $http({
                            method:'GET',
                            url:"http://localhost:3000/api/clientes"})
                        .then(function(response) {
                            $scope.clientes = response.data.clientes;
                        })
                    
                    $scope.filtrarColumna = "ID";
                    $scope.reverseFiltrado = false;

                    $scope.filtrarData = function (columna) {
                        $scope.reverseFiltrado = ($scope.filtrarColumna == columna) ? !$scope.reverseFiltrado : false;
                        $scope.filtrarColumna = columna;
                    }

                    $scope.getFiltradoClass = function (columna) {
                        if($scope.filtrarColumna == columna) {
                            return $scope.reverseFiltrado ? 'fa fa-arrow-up' : 'fa fa-arrow-down';
                        }
                        return '';
                    }

                });

// Bootstrap 4.1                
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})