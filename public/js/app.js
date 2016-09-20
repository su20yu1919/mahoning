/**
 * Created by billsu on 9/19/16.
 */
var app = angular.module('GIS', []);
app.controller('GISCtrl', function($scope, $http) {

    $http.get('/properties?' + property_number).success(function(response){
        $scope.property_number = response
    }).error(function(){
        console.log("error in querying")
    });

});