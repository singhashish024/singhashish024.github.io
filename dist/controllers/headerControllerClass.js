/// <reference path="../_all.ts" />
var Portfolio;
(function (Portfolio) {
    var Header;
    (function (Header) {
        var headerControllerClass = (function () {
            function headerControllerClass() {
                // Toggle between showing and hiding the sidenav when clicking the menu icon
                this.mySidenav = document.getElementById("mySidenav");
            }
            headerControllerClass.prototype.w3_open = function () {
                if (this.mySidenav.style.display === 'block') {
                    this.mySidenav.style.display = 'none';
                }
                else {
                    this.mySidenav.style.display = 'block';
                }
            };
            // Close the sidenav with the close button
            headerControllerClass.prototype.w3_close = function () {
                this.mySidenav.style.display = "none";
            };
            return headerControllerClass;
        }());
        Header.headerControllerClass = headerControllerClass;
        angular.module("PortfolioApp").controller("HeaderController", headerControllerClass);
    })(Header = Portfolio.Header || (Portfolio.Header = {}));
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=headerControllerClass.js.map