# MathCalculation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

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

## Step to configure the Project
* ng new math-operation
* Change "target": "es6" in tsconfig.json in root folder
* Go to folder C:\04_Dev_Workspace\Angular_Workspace\CalculatorE2E\Angular6WithCucumber\MathCalculation\math-calculation\src\app
* Create new component called math-operation by using following command
  ng g c math-operation
* Add the following on app.module.ts
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  Need to add the following
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule
    ]

* Add the code on math-operation.component.ts
* Then update math-operation.component.html
* Check the funcnality ng serve --open

## NEED TO END TO END TEST USING PROTRACTOR-AND-CUCUMBER FRAMEWORK
* Framework protractor is already included in Angular CLI framework
* Need to add the following framework
  a) cucumber
  b) protractor-cucumber-framework
  c) chai
  d) chai-as-promised
  e) @types/chai
  f) @types/cucumber
  g) @types/chai-as-promised
  
  npm install --save-dev cucumber protractor-cucumber-framework chai chai-as-promised @types/chai @types/cucumber @types/chai-as-promised
 
* Create a folder features on e2e folder
* Create mathOperation.feature
* Now step-definations needs to be created for the feature file
* Create folder step-definations under e2e folder
* Save protractor.conf.js as protractor.conf_old.js for comparision
* Need to change the following in protractor.conf.js
* Repace the following
  specs: [
      './src/**/*.e2e-spec.ts'
    ]
  With
  specs: [
      './features/**/*.feature'
    ]
* Replace framework: 'jasmine' with framework: 'custom' and add the following
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  
* Replace the following 
  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function() {}
    },
  with
  cucumberOpts: {
      require: ['./step-definations/**/*.ts'],
      tags: [],
      strict: true,
      format: ["progress"],
      dryRun: false,
      compiler: [ 'ts:ts-node']
    },
    
* Replace the following
  onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.e2e.json')
      });
      jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
  with
  onPrepare: function() {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    },
    beforeLaunch: () => {
      require('ts-node').register({
        project: 'e2e/tsconfig.e2e.json'
      });
    }

## CAPTURE JSON REPORT FOR CUCUMBER TEST
* Create a folder cucumber_reports under e2e folder
* This plugin will connect Protractor, CucumberJS and protractor-cucumber-framework to generate 
  unique JSON files per feature with only a few lines of code
  
  npm install protractor-multiple-cucumber-html-reporter-plugin --save-dev
* Replace the following code snippet on protractor.conf.js 
  format: ["progress"],
  
  with 
  format: ["json:../../e2e/cucumber_reports/mathOperation.e2e.json"],
* Run e2e test and you will find json file in the cucumber_reports folder
* Refer "https://www.npmjs.com/package/protractor-multiple-cucumber-html-reporter-plugin" for more details

## cucumber-html-report setup
* You can use cucumber-html-report to convert a json report to HTML. 
* Add cucumber-html-report to your project with following command
  npm install cucumber-html-report --save-dev
  
* Create hooks.js for protractor-with-cucumber hook
* Refer  "https://www.e-learn.cn/content/wangluowenzhang/154546" for more details

