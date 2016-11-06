(function () {
    var ContactController = function ($scope, $routeParams, contactService) {
        $scope.contactForm = null;
        $scope.setContactForm = null;
        function init() {
            $scope.contactForm = contactService.getContactForm();
            $scope.setContactForm = function (cf) { alert($scope[cf].nume); };
        }
        init();
    };
    ContactController.$inject = ['$scope', '$routeParams', 'contactService'];
    angular.module('customersApp').controller('ContactController', ContactController);
}());