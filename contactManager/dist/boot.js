/// <reference path="_all.ts" />
var contactManager;
(function (contactManager) {
    angular.module("contactManager", ['ngMaterial', 'ngMdIcons', 'ngMessages'])
        .service("userService", contactManager.userService)
        .controller("addUserDialogController", contactManager.addUserDialogControllerClass)
        .controller("controlPanelController", contactManager.controlPanelControllerClass)
        .controller("mainController", contactManager.mainControllerClass)
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .defaultIconSet('../assets/svg/avatars.svg', '128')
            .icon('menu', '../assets/svg/menu.svg', '24')
            .icon('google_plus', '../assets/svg/google_plus.svg', '512')
            .icon('mail', '../assets/svg/mail.svg', '512')
            .icon('phone', '../assets/svg/phone.svg', '512')
            .icon('twitter', '../assets/svg/twitter.svg', '512')
            .icon('hangouts', '../assets/svg/hangouts.svg', '512');
        $mdThemingProvider.theme('default').dark(); /*
            .primaryPalette('blue')
            .accentPalette('red');
            */
    });
})(contactManager || (contactManager = {}));
//# sourceMappingURL=boot.js.map