//
// Directive to handle focus when character name is clicked
//
export default ngModule => {
    ngModule.directive('focusy', ($timeout) => {
        'use strict';

        return function (scope, elem, attrs) {
            scope.$watch(attrs.focusy, (newVal) => {
                if (newVal) {
                    $timeout( () => {
                        elem[0].focus();
                    }, 0, false);
                } else {
                    $timeout( () => {
                        elem[0].blur();
                    }, 0, false);
                }
            });
        }
    });
}