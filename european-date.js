angular.module('EuropeanDate', [])
	.directive('europeanDate', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                function parseUsingMomentJs(viewValue) {
                    var parsedMoment = window.moment(viewValue, ["D.M.YYYY", "DD.MM.YYYY", "DDMMYYYY"]);
                    var msie = parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1]);
                    var msie11 = parseFloat((/rv (\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1]);

                    if (parsedMoment.isValid()) {
                        var parsedDate = parsedMoment.toDate();

                        // Dirty hack to parse date correctly in IE
                        if (msie > 8 || msie11 >= 11 ) {
                            if (viewValue.length <= 10) {
                                return parsedDate;
                            } else {
                                return viewValue;
                            }
                        }
                        return parsedDate;
                    } else {
                        return viewValue;
                    }
                }

                function installParser() {
                    ngModelCtrl.$parsers.unshift(parseUsingMomentJs);
                }

                // Customer parser must be the first one applied. There seems to be no other way to enforce ordering
                // before datePicker components built-in parser.
                window.setTimeout(installParser, 0);
            }
        };
    });