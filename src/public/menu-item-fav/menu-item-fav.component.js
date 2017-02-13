(function () {
"use strict";

angular.module('public')
.component('menuItemFav', {
  templateUrl: 'src/public/menu-item-fav/menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemFavController
});


MenuItemFavController.$inject = ['ApiPath'];
function MenuItemFavController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
