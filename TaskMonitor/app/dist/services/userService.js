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
                    avatar: 'svg-2',
                    bio: 'Hi! I am Ashish',
                    notes: [
                        { title: "Priority-1 Ticket PMXXXXXX", startDate: new Date("2017-02-19"), endDate: new Date("2017-02-21") },
                        { title: "VB20_HF04 feasibility DI XXXXXX", startDate: new Date("2017-02-20"), endDate: new Date("2017-02-24") }
                    ]
                },
                {
                    name: 'Pankaj Kansal',
                    avatar: 'svg-1',
                    bio: 'Hi! I am Pankaj',
                    notes: [
                        { title: "SWAT: Site XXXX upgrade", startDate: new Date("2017-02-20"), endDate: new Date("2017-02-20") }
                    ]
                },
                {
                    name: 'Inchara BN',
                    avatar: 'svg-3',
                    bio: 'Hi! I am Inchara',
                    notes: [
                        { title: "PM Ticket PMXXXXXX", startDate: new Date("2017-02-19"), endDate: new Date("2017-02-21") },
                        { title: "PM Ticket PMXXXXXX", startDate: new Date("2017-02-20"), endDate: new Date("2017-02-22") }
                    ]
                },
                {
                    name: 'Deepika Negi',
                    avatar: 'svg-3',
                    bio: 'Hi! I am Deepika',
                    notes: [
                        { title: "VB20A_HF90 Support", startDate: new Date("2017-02-20"), endDate: new Date("2017-02-21") }
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