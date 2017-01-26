/// <reference path="../_all.ts" />
var Portfolio;
(function (Portfolio) {
    var Projects;
    (function (Projects) {
        var projectsControllerClass = (function () {
            function projectsControllerClass() {
            }
            return projectsControllerClass;
        }());
        Projects.projectsControllerClass = projectsControllerClass;
        angular.module("PortfolioApp").controller("ProjectsController", projectsControllerClass);
    })(Projects = Portfolio.Projects || (Portfolio.Projects = {}));
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=projectsControllerClass.js.map