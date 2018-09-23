# VideoGames (MEANStack)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

# Initialization before running

MongoDB with Data: mongod --dbpath  ../data -> Can watch the database through terminal or Mongodb 3T
npm install -> install the module
npm install -g nodemon OR npm install --save-dev nodemon -> install nodemon
npm install ng2-pagination --save
npm install jquery --save

ng build -w -> create dist folder
nodemon server.js -> running in specific port

## Development server => nodemon server.js

Run `nodemon server.js` for a dev server. Navigate to `http://localhost:4200/` (Set its port in server.js). Refresh the page and you will see the changes. You need to refresh serveral times if it doesn't work at frist time because it contans some jquery functions that are hard to run.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. Run `ng g service service-name` to generate a new service. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. Run `ng build -w` to let it build automatically while any changes of code occur.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
