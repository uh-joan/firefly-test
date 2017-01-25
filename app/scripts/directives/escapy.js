//
// Directive to handle escape key when editing character name
//
export default ngModule => {
    ngModule.directive('escapy', function(){
        'use strict';

        var ESCAPE_KEY = 27;

        return function(scope, elem, attrs){
            elem.bind('keydown', function(event){
                if (event.keyCode === ESCAPE_KEY) {
                    scope.$apply(attrs.escapy);
                }
            });

            scope.$on('$destroy', function(){
                elem.unbind('keydown');
            });
        };
    });
}