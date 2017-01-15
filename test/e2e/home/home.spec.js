var HomePage = require('./homePage');

describe('Protractor Demo App', function() {

    describe('home', function(){

        var home = new HomePage();

        beforeEach(function(){
            home.get();
        });

        it('should have a title', function() {
            expect(home.getTitle()).toEqual('Front-end coding test');
        });

        it('should load 4 Star Wars characters', function(){
            var charactersCount = element.all(by.repeater('character in vm.characters')).count().then(function(count) { return count; });

            expect(charactersCount).toBe(4);
        });

        it('should click on first clicky element', function(){
            home.clickClicky('clicky-1').then(function(){
                expect(home.getInputClickyText()).toBe('C3P-0');
            });
        });

        it('should change the input value', function(){
            home.clickClicky('clicky-1').then(function(){
                expect(home.setClickyText()).toBe('C3P');
            });
        });

        it('should escape the input value', function(){
            home.clickClicky('clicky-1').then(function(){
                home.setClickyTextAndEscape();
                expect(home.getClickyText('clicky-1')).toBe('C3P-0');
            });
        });

    })

});