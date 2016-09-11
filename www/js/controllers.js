angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,toaster) {
	$scope.Stop = function(){
		toaster.pop("success","Stop Machine");
	}
	$scope.Connectivity = function(){
		toaster.pop("success","Machine Mobile Connectivity");
	}
})

.controller('Arm1Ctrl', function($scope) {})

.controller('Motor1Arm1Ctrl', function($scope,toaster) {
	
			// toaster.pop('error',"Instrusion Detected","<strong>intrusion detected in your home</strong>", 6000, 'trustedHtml');
			// console.log("clicked");
			// $cordovaToast.show("click", "short", "bottom");
			$scope.tap = function(msg){
				toaster.pop("success",msg);
			}
	
})
.controller('Motor2Arm1Ctrl', function($scope,toaster) {

			$scope.tap = function(msg){
				toaster.pop("success",msg);
			}
	
})
.controller('Motor1Arm2Ctrl', function($scope,toaster) {

			$scope.tap = function(msg){
				toaster.pop("success",msg);
			}
	
})
.controller('Motor2Arm2Ctrl', function($scope,toaster) {

			$scope.tap = function(msg){
				toaster.pop("success",msg);
			}
	
})
.controller('Motor1Arm3Ctrl', function($scope,toaster) {

			$scope.tap = function(msg){
				toaster.pop("success",msg);
			}
	
})
.controller('Motor2Arm3Ctrl', function($scope,toaster) {

			$scope.tap = function(msg){
				toaster.pop("success",msg);
			}
	
})
.controller('Motor1Arm4Ctrl', function($scope,toaster) {

			$scope.tap = function(msg){
				toaster.pop("success",msg);
			}
	
}).controller('Motor2Arm4Ctrl', function($scope,toaster) {

			$scope.tap = function(msg){
				toaster.pop("success",msg);
			}
	
})

.controller('Arm2Ctrl', function($scope) {
  
})

.controller('Arm3Ctrl', function($scope) {

})
.controller('Arm4Ctrl', function($scope) {

});
