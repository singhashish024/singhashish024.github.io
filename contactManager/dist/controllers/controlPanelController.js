/// <reference path="../_all.ts" />
var contactManager;
(function (contactManager) {
    var controlPanelControllerClass = (function () {
        function controlPanelControllerClass(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: "Phone", icon: "phone" },
                { name: "Twitter", icon: "twitter" },
                { name: "Google Plus", icon: "google_plus" },
                { name: "Mail", icon: "mail" },
                { name: "Hangouts", icon: "hangouts" }
            ];
            this.user = userService.selectedUser;
        }
        controlPanelControllerClass.prototype.submitContact = function (action) {
            this.$mdBottomSheet.hide(action);
        };
        return controlPanelControllerClass;
    }());
    controlPanelControllerClass.$inject = ['userService', '$mdBottomSheet'];
    contactManager.controlPanelControllerClass = controlPanelControllerClass;
})(contactManager || (contactManager = {}));
//# sourceMappingURL=controlPanelController.js.map