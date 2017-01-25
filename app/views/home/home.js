//
// Controller for the Home View
//
export default ngModule => {
    ngModule.controller('HomeCtrl',
        function($scope, characters){
            const vm = this;

            vm.characters = characters;
            angular.forEach(vm.characters, (character) => {
                character.icon_url = require("../../assets/"+character.icon+".svg");
            });

            vm.editedCharacter = null;

            vm.editCharacter = (character) => {
                vm.editedCharacter = character;
                // Clone the original character to restore it on demand.
                vm.originalCharacter = angular.extend({}, character);
            };

            vm.revertEditing = (character) => {
                vm.characters[vm.characters.indexOf(character)] = vm.originalCharacter;
            };

            vm.doneEditing = (character, name) => {
                vm.editedPixel = null;
                character.name = name.trim();
                vm.characters[vm.characters.indexOf(character)].name = character.name;
            };
    });
}