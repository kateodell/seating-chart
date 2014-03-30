'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function ($scope, ezfb) {
    // $scope.guest_list = ['Kate', 'Gowri', 'Arjan', 'Ravi', 'Dusty'];
    ezfb.login();
    ezfb.getLoginStatus(function (res) {
      $scope.loginStatus = res;
      console.log($scope.loginStatus);
      $scope.getEventInfo();
    });


    $scope.getEventInfo = function(){
      ezfb.api('https://graph.facebook.com/630852236995897/', function (res) {
        $scope.eventInfo = res;
        console.log(res)
      });

      ezfb.api('https://graph.facebook.com/630852236995897/attending', function(res){
        $scope.attendees = res.data;
        $scope.getAttendeeInfo();
      });

      
    };

    $scope.getAttendeeInfo = function(){
      console.log('attendees: ' + $scope.attendees);
      $scope.attendees.forEach(function(guest){
        ezfb.api('https://graph.facebook.com/'+ guest.id + '?fields=picture,name,hometown', function(res){
        console.log(res);
        guest.picture = res.picture.data.url;
        guest.hometown = res.hometown;
        console.log(guest);
      });
      });
    };
  })
  .controller('MyCtrl2', [function() {

  }]);

