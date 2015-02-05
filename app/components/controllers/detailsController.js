var module = angular.module("myapp");
module.controller("detailsController", function($scope, addressBookService) {
	$scope.addressBook = addressBookService.getDatas();
})