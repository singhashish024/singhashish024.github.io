/// <reference path="../_all.ts" />
var contactManager;
(function (contactManager) {
    var addUserDialogControllerClass = (function () {
        function addUserDialogControllerClass($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
        }
        addUserDialogControllerClass.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        addUserDialogControllerClass.prototype.save = function () {
            this.$mdDialog.hide(this.user);
        };
        return addUserDialogControllerClass;
    }());
    addUserDialogControllerClass.$inject = ['$mdDialog'];
    contactManager.addUserDialogControllerClass = addUserDialogControllerClass;
})(contactManager || (contactManager = {}));
//# sourceMappingURL=addUserDialogController.js.map