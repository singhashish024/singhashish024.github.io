/// <reference path="../_all.ts" />
var Portfolio;
(function (Portfolio) {
    var About;
    (function (About) {
        var aboutControllerClass = (function () {
            function aboutControllerClass() {
            }
            return aboutControllerClass;
        }());
        About.aboutControllerClass = aboutControllerClass;
        angular.module("PortfolioApp").controller("AboutController", aboutControllerClass);
    })(About = Portfolio.About || (Portfolio.About = {}));
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=aboutControllerClass.js.map