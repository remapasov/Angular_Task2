    var myapp = angular.module('myapp', ["ui.router"])
	
    myapp.config(function($stateProvider, $urlRouterProvider){
	
    $stateProvider
        .state('form', {
            url: "/form",
            views: {
				"mainview": {
                    templateUrl: 'app/shared/form.html',
				    controller: "helpController"
                }
            }
        })
        .state('details', {
            url: "/details",
            views: {
                "mainview": {
                    templateUrl: 'app/shared/details.html',
					controller: function($scope){
						$scope.msg = 'Hurrraaa!';
					}
                },
			},
        })
    })
