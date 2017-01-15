exports.config = {
    specs : [
        './e2e/**/*.spec.js'
    ],
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
};