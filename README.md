# Firefly Learning - Front End Coding Test

* Webpack configuration.
* ES6 support with babel.
* Source maps included.
* Production build.
* Testing environment using protractor to End to End tests.
* No gulp and no grunt, just npm scripts.

Live [demo](http://pure-lake-26673.herokuapp.com/)
### Installing

```bash
# clone the repo
$ git clone git@github.com:uh-joan/firefly-test.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Getting Started

## Dependencies

* `node` and `npm` (Use NVM)
* Built with Node (`v5.5.x`+) and NPM (`3.3.x`+)

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`

Then launch any http server and serve the `dist` folder:

* use http-server `http-server dist` or
* use httpster `httpster -p 8080 -d dist`

## Testing

#### 1. End to End Tests

In a new shell

* run `npm run webdriver-update` and then:
* run `npm run webdriver-start`

Open a new shell again and

* run: `npm run e2e`
