'use strict';
import angular from 'angular';
import mocks from 'angular-mocks';

let context = require.context('./app', true, /\.spec\.js/);

context.keys().forEach(context);