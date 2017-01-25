import 'jquery';
import 'bootstrap/dist/js/bootstrap';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import tabs from 'angular-ui-bootstrap/src/tabs/index';
import tooltip from 'angular-ui-bootstrap/src/tooltip/index';
import routing from './app.config';

import RegisterHome from './views/home';
import RegisterServices from './services';
import RegisterDirectives from './directives';

const ngModule = angular.module('app', [uirouter, tabs, tooltip])
    .value('charactersUrl', 'https://www.mocky.io/v2/587b91f811000043068ba9c6')
    .config(routing);

RegisterHome(ngModule);
RegisterServices(ngModule);
RegisterDirectives(ngModule);