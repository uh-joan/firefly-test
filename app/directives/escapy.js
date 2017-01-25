//
// Directive to handle escape key when editing character name
//
export default ngModule => {
    ngModule.directive('escapy', () => {
        'use strict';

        var ESCAPE_KEY = 27;

        return (scope, elem, attrs) => {
            elem.bind('keydown', (event) => {
                if (event.keyCode === ESCAPE_KEY) {
                    scope.$apply(attrs.escapy);
                }
            });

            scope.$on('$destroy', () => {
                elem.unbind('keydown');
            });
        };
    });
}