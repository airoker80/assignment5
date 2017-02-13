(function () {
    "use strict";

    angular.module('public')
    .controller('myInfoController', myInfoController);

    myInfoController.$inject = ['userData'];
    function myInfoController(userData) {
        var $ctrl = this;
        $ctrl.user = false;
        if (userData != "No User") {
            $ctrl.user = true;
            $ctrl.userData = userData.user;
            $ctrl.dishData = userData.user.favoriteDishDetails;
        }

    }

})();
