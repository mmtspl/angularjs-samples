   angular.module('myApp', []).controller('personCtrl', function($scope) {  
    $scope.firstName = "Aryan",  
    $scope.lastName = "Khanna",  
    $scope.fullName = function() {  
        return $scope.firstName + " " + $scope.lastName;  
    }  
});  