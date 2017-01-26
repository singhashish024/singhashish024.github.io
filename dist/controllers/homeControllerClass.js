/// <reference path="../_all.ts" />
var Portfolio;
(function (Portfolio) {
    var Home;
    (function (Home) {
        var homeControllerClass = (function () {
            function homeControllerClass() {
            }
            return homeControllerClass;
        }());
        Home.homeControllerClass = homeControllerClass;
        angular.module("PortfolioApp").controller("HomeController", homeControllerClass);
    })(Home = Portfolio.Home || (Portfolio.Home = {}));
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=homeControllerClass.js.map