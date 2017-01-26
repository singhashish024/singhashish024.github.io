/// <reference path="../_all.ts" />
var Portfolio;
(function (Portfolio) {
    var Blog;
    (function (Blog) {
        var blogControllerClass = (function () {
            function blogControllerClass() {
            }
            return blogControllerClass;
        }());
        Blog.blogControllerClass = blogControllerClass;
        angular.module("PortfolioApp").controller("BlogController", blogControllerClass);
    })(Blog = Portfolio.Blog || (Portfolio.Blog = {}));
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=blogControllerClass.js.map