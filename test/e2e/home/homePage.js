function HomePage(){
    this.clickyInput = element(by.className('clicky--input-name'));

    this.get = function(){
        browser.get('http://localhost:8080/');
    };

    this.getTitle = function(){
        return browser.getTitle();
    };

    this.clickClicky = function(elementId){
        this.clicky = element(by.id(elementId));
        return this.clicky.click();
    };

    this.getInputClickyText = function(){
        return this.clickyInput.getAttribute('value').then(function(value){
            return value;
        });
    };

    this.setClickyText = function(){
        this.clickyInput.sendKeys(protractor.Key.BACK_SPACE);
        this.clickyInput.sendKeys(protractor.Key.BACK_SPACE);

        return this.clickyInput.getAttribute('value').then(function(value){
            return value;
        });
    };

    this.setClickyTextAndEscape = function(){
        this.clickyInput.sendKeys(protractor.Key.BACK_SPACE);
        this.clickyInput.sendKeys(protractor.Key.BACK_SPACE);
        this.clickyInput.sendKeys(protractor.Key.ESCAPE);

        //return this.clickyInput.getAttribute('value').then(function(value){
        //    return value;
        //});
    };

    this.getClickyText = function(elementId){
        this.clicky = element(by.id(elementId));
        return this.clicky.getText();
    }
}

module.exports = HomePage;