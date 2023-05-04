Content
https://angular.io
Node.js	Angular requires an active LTS or maintenance LTS version of Node.js.
For information see the version compatibility guide.
For more information on installing Node.js, see nodejs.org. If you are unsure what version of Node.js runs on your system, run node -v in a terminal window.

npm install -g @angular/cli

cd getfood
npm i
npm run start


Basics
Project structure
Components(HTML/CSS/Javascript)
ng g c components/details
ng g s services/details
Bindings & Pipes
Template Conditionals / Interpolation
Input & Output
Service/InjectionTokens/RxJS
https://rxjs.dev/guide/observable
Router
Modules and lazy loading of modules
Directives
ngContent

Angular Material
https://material.angular.io
ng-semantic
ng add @angular/material
ng generate @angular/material:navigation nav
ng generate @angular/material:dashboard dash
ng generate @angular/cdk:drag-drop dragNdrop
Testing
Http-service
angular-basic\getfood\src\app\services\http-service.service.ts


Advanced
APP_INITIALIZE
RouteGuards
Resolvers
Named Routes
Named ngContent
Image Loading
Angular.json