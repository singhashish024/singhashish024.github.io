/// <reference path="_all.ts" />
var contactManager;
(function (contactManager) {
    var user = (function () {
        function user(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        user.fromCreate = function (userItem) {
            return new user(userItem.firstName + ' ' + userItem.lastName, userItem.avatar, userItem.bio, []);
        };
        return user;
    }());
    contactManager.user = user;
    var note = (function () {
        function note(title, date) {
            this.title = title;
            this.date = date;
        }
        return note;
    }());
    contactManager.note = note;
    var createUser = (function () {
        function createUser(firstName, lastName, avatar, bio) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.avatar = avatar;
            this.bio = bio;
        }
        return createUser;
    }());
    contactManager.createUser = createUser;
})(contactManager || (contactManager = {}));
//# sourceMappingURL=modal.js.map