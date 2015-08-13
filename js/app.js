(function () {
    angular.module('app', [])
        .run(function ($rootScope) {
            $rootScope.message = 'To Do Project';
        });
})();
