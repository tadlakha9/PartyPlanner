// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
import "zone.js/dist/zone-testing";
import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";
=======
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
>>>>>>> a16622d9c8d8b5f287c15342ebd86dd37c454371

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
<<<<<<< HEAD
const context = require.context("./", true, /\.spec\.ts$/);
=======
const context = require.context('./', true, /\.spec\.ts$/);
>>>>>>> a16622d9c8d8b5f287c15342ebd86dd37c454371
// And load the modules.
context.keys().map(context);
