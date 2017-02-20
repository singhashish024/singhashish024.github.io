/// <reference path="../_all.ts" />
var contactManager;
(function (contactManager) {
    var mainControllerClass = (function () {
        function mainControllerClass(userService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.searchText = "";
            this.users = [];
            this.selected = null;
            this.tabIndex = 0;
            this.newNote = new contactManager.note('', null, null);
            var self = this;
            this.userService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                self.selected = users[0];
                self.userService.selectedUser = self.selected;
                console.log(self.users);
            });
        }
        mainControllerClass.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        mainControllerClass.prototype.selectUser = function (userPassed) {
            this.selected = userPassed;
            var sideNav = this.$mdSidenav('left');
            if (sideNav.isOpen()) {
                sideNav.close();
            }
            this.tabIndex = 0;
        };
        mainControllerClass.prototype.setFormScope = function (scope) {
            this.formScope = scope;
        };
        mainControllerClass.prototype.addNote = function () {
            this.selected.notes.push(this.newNote);
            //reset the form
            this.formScope.noteForm.$setUntouched();
            this.formScope.noteForm.$setPristine();
            this.newNote = new contactManager.note('', null, null);
            this.openToast('Note Added');
        };
        mainControllerClass.prototype.deleteNote = function (note) {
            var foundIndex = this.selected.notes.indexOf(note);
            this.selected.notes.splice(foundIndex, 1);
            this.openToast("Removed note");
        };
        mainControllerClass.prototype.openToast = function (message) {
            this.$mdToast.show(this.$mdToast.simple()
                .content(message)
                .position('top right')
                .hideDelay(3000));
        };
        mainControllerClass.prototype.clearNotes = function ($event) {
            var _this = this;
            var confirm = this.$mdDialog.confirm()
                .title('Are you sure you want delete all the notes?')
                .content('All the notes for this User will be deleted, this action can\'t be undone')
                .ok('Yes')
                .cancel('No');
            var self = this;
            this.$mdDialog.show(confirm).then(function () {
                _this.selected.notes = [];
                _this.openToast('Notes Deleted');
            });
        };
        mainControllerClass.prototype.addUser = function ($event) {
            var self = this;
            var showFullscreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: '../dist/views/newUserDialog.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: 'addUserDialogController',
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                escapeToClose: true
            }).then(function (userItem) {
                var newUser = contactManager.user.fromCreate(userItem);
                self.users.push(newUser);
                self.selectUser(newUser);
                self.openToast('User Added');
            }, function () {
                console.log('You cancelled the Dialog');
            });
        };
        mainControllerClass.prototype.showContactOptions = function ($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: '../dist/views/bottom-sheet.html',
                controller: 'controlPanelController',
                controllerAs: 'cp',
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && console.log(clickedItem.name + ' clicked!');
            });
        };
        return mainControllerClass;
    }());
    mainControllerClass.$inject = ['userService', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', '$mdBottomSheet'];
    contactManager.mainControllerClass = mainControllerClass;
})(contactManager || (contactManager = {}));
//# sourceMappingURL=mainController.js.map