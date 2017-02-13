(function () {
    "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', '$q'];
    function SignUpController(MenuService, $q) {
        var signUp = this;
        signUp.success = false;
        signUp.error = false;

        signUp.submit = function () {
            signUp.completed = true;
            MenuService.getDishItem(signUp.user.favoriteDish)
            .then(function (res) {
                console.log(res);
                if (res != "Error") {
                    signUp.user.favoriteDishDetails = res;
                    signUp.error = false;
                    signUp.success = true;
                    MenuService.user = signUp.user;
                } else {
                    signUp.error = true;
                    signUp.success = false;
                }
            })
            .catch(function (res) {
                signUp.error = true;
                signUp.success = false;
            });
            //console.log(menu_item);
        };
    }

})();
