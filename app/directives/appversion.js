angular.module('app.version', [])

.factory('version', function() {
    return "0.0.1";
})

.directive('appVersion', function(version) {
  return {
    template: version
  };
});