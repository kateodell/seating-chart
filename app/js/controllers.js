'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {
    $scope.guest_list = ['Kate', 'Gowri', 'Arjan', 'Ravi', 'Dusty'];
  }])
  .controller('MyCtrl2', [function() {

  }]);