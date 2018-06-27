# RnDAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.
This project covers below details:-
 - Creating customise errors in angular.
 - Using routing with `routerLink` property.
 - Used fake `jsonplaceholder` api to execute gernal tasks, Like delete, add and remove data.
 - Used bootstrap for refined UI.

## Live version
You can view the live app from below link. 
https://ganjuv.github.io/posts-app/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Using Fake API 
We are usign fake API call to learn HTTP client and do some researches.
https://jsonplaceholder.typicode.com 
Since it is a fake service there is not data insertions.

- Since we are using fake API there is no provision to save data, we are just saving data in array data structure. So when we delete the data inserted we get an alert "Already deleted".

- Once user enter a data in the text box and hit enter we are not saving data in DB so when we delete same date we get an error "Data is already deleted".

## Deployment 
Run below command to build and deploy production version on github pages.
`npm run deploy:gh` 
