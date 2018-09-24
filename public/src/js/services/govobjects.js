'use strict';

angular.module('insight.govobjects')
.factory('GovObject',
  function($resource) {
  return $resource(window.apiPrefix + '/gobject/list', {}, {
      method: 'GET',
      interceptor: {
        response: function (res) {
          return res.govobjects;
        },
        responseError: function (res) {
          if (res.status === 404) {
            return res;
          }
        }
      }
  });
})
.factory('GovObjects',
  function($resource) {
    // let possibleJson = $resource(window.apiPrefix + '/gobject/list');
    // console.log("possibleJson?", possibleJson);
    return $resource(window.apiPrefix + '/gobject/list');
})