'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		
		$scope.alerts=[
			{
				icon:'glyphicon-user',
				colour:'btn-success',
				total:'20,408',
				descrtiption:'TOTAL CUSTOMERS'
			},
			
			{
				icon:'glyphicon-calendar',
				colour:'btn-primary',
				total:'8,382',
				descrtiption:'UPCOMING EVENTS'
			},
			
			{
				icon:'glyphicon-edit',
				colour:'btn-success',
				total:'527',
				descrtiption:'NEW CUSTOMERS IN 24H'
			},
			
			{
				icon:'glyphicon-record',
				colour:'btn-info',
				total:'85,000',
				descrtiption:'EMAIL SENT'
			},
			
			{
				icon:'glyphicon-eye-open',
				colour:'btn-warning',
				total:'268',
				descrtiption:'FOLLOW UPS REQUIRED'
			},
			
			{
				icon:'glyphicon-flag',
				colour:'btn-danger',
				total:'348',
				descrtiption:'REFERRALS TO MODERATE'
			}
			];
	}
]);