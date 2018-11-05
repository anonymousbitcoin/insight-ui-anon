'use strict';

angular.module('insight.masternodes')
  .factory('Masternode',
    function($resource) {
    return $resource(window.apiPrefix + '/masternodes/listbyrank',{
      get: {
        method: 'GET',
        interceptor: {
          response: function (res) {
            return res.data;
          },
          responseError: function (res) {
            if (res.status === 404) {
              return res;
            }
          }
        }
      }
    });
  })
  .factory('Masternodes',
    function($resource) {
      return $resource(window.apiPrefix + '/masternodes/listbyrank');
  })
  .factory('MasternodesByRank',
    function($resource) {
      return $resource(window.apiPrefix + '/masternodes/listbyrank');
  });
