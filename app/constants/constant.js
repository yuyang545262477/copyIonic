(function () {
    "use strict";

    var constant = {
        extend: angular.extend,
        forEach: angular.forEach,
        isDefined: angular.isDefined,
        isNumber: angular.isNumber,
        isString: angular.isString,
        jqLite: angular.element,
        noop: angular.noop
    };

    angular.module('ionic')
        .constant('constant', constant);

})();