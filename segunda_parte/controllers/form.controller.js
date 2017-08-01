(function() {
    'use strict';

    angular
        .module('Teste')
        .controller('FormController', formController)

    /** @ngInject */
    formController.$inject = ['$scope'];

    function formController($scope) {
        var vm = this;
        vm.pessoa = { nome: "", email: "", telefone: "" };
        vm.message = "";
        vm.formulario = $scope.cadastroForm

        vm.validaFormulario = function() {
            console.log();
            if ($scope.cadastroForm.$invalid) {
                alert("Existem dados incorretos");
                return;
            }
            alert("Formulário recebido com sucesso");
        }
    }

}());