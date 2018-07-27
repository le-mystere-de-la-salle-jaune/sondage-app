# SondageApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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


[![Build Status](https://travis-ci.org/le-mystere-de-la-salle-jaune/sondage-app.svg?branch=master)](https://travis-ci.org/le-mystere-de-la-salle-jaune/sondage-app)

lien du site : <a href="https://le-mystere-de-la-salle-jaune.github.io/sondage-app/">https://le-mystere-de-la-salle-jaune.github.io/sondage-app/</a>

<p>Impossible de faire tourner sur heroku. Pour le lien ici, la page se lance, on a bien le bandeau, mais ne charge pas les stagiaires :<br/> 
  Failed to load resource: the server responded with a status of 503 (Service Unavailable)<br/> 
choix-stagiaire:1 Failed to load https://evalme-app.herokuapp.com/api/stagiaires: No 'Access-Control-Allow-Origin' header is present on<br/>  the requested resource. Origin 'https://le-mystere-de-la-salle-jaune.github.io' is therefore not allowed access. The response<br/>  had HTTP status code 503.<br/> 
main.35e75b5….js:1 ERROR Error: Uncaught (in promise): t: {"headers":{"normalizedNames":{},"lazyUpdate":null,"headers":<br/> {}},"status":0,"statusText":"Unknown Error","url":null,"ok":false,"name":"HttpErrorResponse","message":"Http failure response for <br/> (unknown url): 0 Unknown Error","error":{"isTrusted":true}}<br/> 
    at j (polyfills.9f773b7….js:1)<br/> 
    at j (polyfills.9f773b7….js:1)<br/> 
    at polyfills.9f773b7….js:1<br/> 
    at e.invokeTask (polyfills.9f773b7….js:1)<br/> 
    at Object.onInvokeTask (main.35e75b5….js:1)<br/> 
    at e.invokeTask (polyfills.9f773b7….js:1)<br/> 
    at t.runTask (polyfills.9f773b7….js:1)<br/> 
    at d (polyfills.9f773b7….js:1)<br/> 
    at t.invokeTask [as invoke] (polyfills.9f773b7….js:1)<br/> 
    at _ (polyfills.9f773b7….js:1)<br/> 
_t	@	main.35e75b5….js:1<br/> 
choix-stagiaire:1 Failed to load resource: the server responded with a status of 404 ()</p>
