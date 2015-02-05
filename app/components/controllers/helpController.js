var module = angular.module("myapp");
module.controller("helpController", function($scope, $timeout, addressBookService) {
    $scope.subjectListOptions = {
      'bug': 'Report a Bug',
      'account': 'Account Problems',
      'mobile': 'Mobile',
      'user': 'Report a Malicious User',
      'other': 'Other'
    };
	
	$scope.submitted = false;
	$scope.message = ''

    // Form submit handler.
    $scope.submit = function(form) {

      var datas = {
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        phone: $scope.phone,
        address: $scope.address,
        notes: $scope.notes
      }
      console.log("Note: " + datas);
      addressBookService.setDatas(datas);

      $scope.submitted = true;

      // If form is invalid, return and let AngularJS show validation errors.
      if (form.$invalid) {
        return;
      }
	  
	  $scope.message = 'Your form has been sent!';
      $("sdfsdfsd").html = ""
      $timeout(function() {
        $scope.message = '';
        $('.helpForm')[0].reset();
		$scope.submitted = false;
      }, 3000);
    };
  });
