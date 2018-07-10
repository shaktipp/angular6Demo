// https://github.com/mlev/protractor-cucumber-example/blob/master/features/steps/calculator_steps.js
// https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/


// For Protractor
import {browser, by, element} from 'protractor';

// For Cucumber
import {Given, setDefaultTimeout, Then, When } from 'cucumber';
const {AfterAll, BeforeAll, After, AfterScenario } = require('cucumber');
const defineSupportCode = require('cucumber').defineSupportCode;

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

// browser.ignoreSynchronization = true

setDefaultTimeout(60 * 1000);
// this timeout value is global setting impact all step definition function,
// thus it doesn't means the value is more large more better.


let firstNumber = element(by.id('num1'));
let secondNumber = element(by.id('num2'));
let operatorDropDown = element(by.id('operator')).all(by.tagName('option'));
let submitButton = element(by.id('submitButton'));
var result = element(by.id('result'));

Given('I am on the Home page', (callback) => {
  // homePage.get().then(() => callback());
  browser.get('http://localhost:4200/').then(() => callback());
  // browser.pause(5000);
});


When('I write {string} in the {string} first input field',(value, input, callback) => {
  firstNumber.sendKeys(value).then(() => callback());
});

When('write {string} in the {string} second input field', (value, input, callback) => {
  secondNumber.sendKeys(value).then(() => callback());
});


When('select the {string} as operator from drop down list', (value,  callback) => {
  let selectedIndex = 0;
  switch ( value ) {
    case 'add':
      selectedIndex = 0;
      break;
    case 'sub':
      selectedIndex = 1;
      break;
    case 'mul':
      selectedIndex = 2;
      break;
    default:
      selectedIndex = 3;
  }

  operatorDropDown.get(selectedIndex).click().then(() => callback());
});

When('I click {string} button',  (button, callback) => {
  // homePage.clickButton().then(() => callback());
  // browser.sleep(5000);
  submitButton.click().then(() => callback());
  // browser.sleep(5000);
  //browser.pause();

});




Then('the result should be {string} in the {string} on the screen', (mathResult, callback) => {
  mathResult = mathResult.replace(/['"]+/g, '');


  const myResult = firstNumber.getAttribute('value').then(function(theText){
    console.log('Result in Text Box=' + theText);
    return theText;
  });
  console.log("Actual Result=" + myResult +  ", expected result =" + mathResult);

  // browser.debugger();
  // browser.sleep(20000);

  expect(result.getText()).to.eventually.equals("23").notify(callback);
  // expect(result.getText()).to.be.a('string');
  // expect(result.getText()).to.equal(mathResult).and.notify(callback);
  //browser.sleep(20000);
  // for(;;);
});
