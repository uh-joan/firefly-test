//
// Directive to handle click to edit character name
//
export default ngModule => {
    ngModule.directive('clicky', function(){
        return {
            template:`
                <div ng-click="edit();editingOn();">
                    <label ng-if="!isEditing" tooltip-popup-delay='1000' uib-tooltip='Click to edit'>{{character.name}}</label>
                    <form ng-submit="submit({name:character.name});editingOff();">
                        <input  class="clicky--input-name" ng-if="isEditing" ng-blur="escape();editingOff();" ng-model="character.name"
                                ng-change="print()" escapy="escape();editingOff();" focusy="focus()" >
                    </form>
                    <div ng-class="{\'clicky--move-down\':isEditing}" ng-transclude></div>
                </div>`,
            restrict: 'E',
            transclude: true,
            scope: {
                character: '=',
                edit: '&',
                submit: '&',
                escape: '&',
                focus: '&'
            },
            link: function postLink(scope, element, attrs) {
                scope.isEditing = false;

                scope.editingOn = function(){
                    scope.isEditing = true;
                };

                scope.editingOff = function(){
                    scope.isEditing = false;
                };

            }
        };
    });
}