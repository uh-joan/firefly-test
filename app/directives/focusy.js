//
// Directive to handle focus when character name is clicked
//
export default ngModule => {
    ngModule.directive('focusy', function($timeout){
        'use strict';

        return function (scope, elem, attrs) {
            scope.$watch(attrs.focusy, function(newVal){
                if (newVal) {
                    $timeout( function(){
                        elem[0].focus();
                    }, 0, false);
                } else {
                    $timeout( function(){
                        elem[0].blur();
                    }, 0, false);
                }
            });
        }
    });
}