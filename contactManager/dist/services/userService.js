/// <reference path="../_all.ts" />
var contactManager;
(function (contactManager) {
    var userService = (function () {
        function userService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Ashish Singh',
                    avatar: 'svg-1',
                    bio: 'I am Ashish and I am from Hisar',
                    notes: [
                        { title: "Pay Back dinner", date: new Date("2016-12-12") },
                        { title: "Buy flowers for Birthday", date: new Date("2016-12-19") }
                    ]
                },
                {
                    name: 'Mukesh Mali',
                    avatar: 'svg-2',
                    bio: 'I am Mukesh and I am from Bhopal',
                    notes: [
                        { title: "Find love", date: new Date("2016-12-01") }
                    ]
                },
                {
                    name: 'Gaurav Mehta',
                    avatar: 'svg-3',
                    bio: 'I am Gaurav and I am from Indore',
                    notes: [
                        { title: "Complete R language", date: new Date("2016-12-15") }
                    ]
                },
                {
                    name: 'Rohit Singh',
                    avatar: 'svg-2',
                    bio: 'I am Rohit and I love tinder',
                    notes: [
                        { title: "Find a girlfriend", date: new Date("2016-12-20") }
                    ]
                },
                {
                    name: 'Ashish Singh',
                    avatar: 'svg-1',
                    bio: 'I am Ashish and I am from Hisar',
                    notes: [
                        { title: "Pay Back dinner", date: new Date("2016-12-12") },
                        { title: "Buy flowers for Birthday", date: new Date("2016-12-19") }
                    ]
                },
                {
                    name: 'Mukesh Mali',
                    avatar: 'svg-2',
                    bio: 'I am Mukesh and I am from Bhopal',
                    notes: [
                        { title: "Find love", date: new Date("2016-12-01") }
                    ]
                },
                {
                    name: 'Gaurav Mehta',
                    avatar: 'svg-3',
                    bio: 'I am Gaurav and I am from Indore',
                    notes: [
                        { title: "Complete R language", date: new Date("2016-12-15") }
                    ]
                },
                {
                    name: 'Rohit Singh',
                    avatar: 'svg-2',
                    bio: 'I am Rohit and I love tinder',
                    notes: [
                        { title: "Find a girlfriend", date: new Date("2016-12-20") }
                    ]
                },
                {
                    name: 'Ashish Singh',
                    avatar: 'svg-1',
                    bio: 'I am Ashish and I am from Hisar',
                    notes: [
                        { title: "Pay Back dinner", date: new Date("2016-12-12") },
                        { title: "Buy flowers for Birthday", date: new Date("2016-12-19") }
                    ]
                },
                {
                    name: 'Mukesh Mali',
                    avatar: 'svg-2',
                    bio: 'I am Mukesh and I am from Bhopal',
                    notes: [
                        { title: "Find love", date: new Date("2016-12-01") }
                    ]
                },
                {
                    name: 'Gaurav Mehta',
                    avatar: 'svg-3',
                    bio: 'I am Gaurav and I am from Indore',
                    notes: [
                        { title: "Complete R language", date: new Date("2016-12-15") }
                    ]
                },
                {
                    name: 'Rohit Singh',
                    avatar: 'svg-2',
                    bio: 'I am Rohit and I love tinder',
                    notes: [
                        { title: "Find a girlfriend", date: new Date("2016-12-20") }
                    ]
                }
            ];
        }
        userService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        return userService;
    }());
    userService.$inject = ['$q'];
    contactManager.userService = userService;
})(contactManager || (contactManager = {}));
//# sourceMappingURL=userService.js.map