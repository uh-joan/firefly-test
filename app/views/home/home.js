//
// Controller for the Home View
//
export default ngModule => {
    ngModule.controller('HomeCtrl',
        function($scope, characters){
            const vm = this;

            vm.characters = characters;
            angular.forEach(vm.characters, function(character){
                character.icon_url = require("../../assets/"+character.icon+".svg");
            });

            vm.editedCharacter = null;

            vm.editCharacter = function(character){
                vm.editedCharacter = character;
                // Clone the original character to restore it on demand.
                vm.originalCharacter = angular.extend({}, character);
            };

            vm.revertEditing = function(character){
                vm.characters[vm.characters.indexOf(character)] = vm.originalCharacter;
            };

            vm.doneEditing = function(character, name){
                vm.editedPixel = null;
                character.name = name.trim();
                vm.characters[vm.characters.indexOf(character)].name = character.name;
            };
    });
}