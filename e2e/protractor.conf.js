// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');



exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./step-definations/**/*.ts', './hooks/**/*.ts', 'supports/timeout.js'],
    tags: [],
    strict: true,
    format: ["json:./e2e/cucumber_reports/mathOperation.e2e.json"],
    dryRun: false,
    compiler: [ 'ts:ts-node']
  },
  onCleanUp: function () {
    var CucumberHtmlReport = require('cucumber-html-report');

    return CucumberHtmlReport.create({
      source: 'e2e/cucumber_reports/mathOperation.e2e.json',
      dest: 'e2e/cucumber_reports',
      title: 'MathOperation - Protractor Test Run',
      component: new Date().toString()
    }).then(console.log).catch(console.log);
  },
  onPrepare: function() {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: './e2e/tsconfig.e2e.json'
    });
  },
  ignoreUncaughtExceptions: true,
  untrackOutstandingTimeouts: true
};
