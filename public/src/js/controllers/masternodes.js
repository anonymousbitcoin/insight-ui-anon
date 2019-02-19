'use strict';

angular.module('insight.masternodes').controller('MasternodesController',
  function($scope, $rootScope, $routeParams, $location, Global, Masternode, Masternodes) {
  $scope.global = Global;
  $scope.loading = false;

  $scope.list = function() {
    $scope.loading = true;

    // if ($routeParams.blockDate) {
    //   $scope.detail = 'On ' + $routeParams.blockDate;
    // }

    // if ($routeParams.startTimestamp) {
    //   var d=new Date($routeParams.startTimestamp*1000);
    //   var m=d.getMinutes();
    //   if (m<10) m = '0' + m;
    //   $scope.before = ' before ' + d.getHours() + ':' + m;
    // }

    // $rootScope.titleDetail = $scope.detail;

    Masternodes.get(function(res) {
      $scope.loading = false;
      $scope.masternodes = res.masternodes;
      $scope.pagination = res.pagination;
    });
  };


  $scope.params = $routeParams;

});
