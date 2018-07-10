Feature: MathOperation
  This Feature file demo addition, subtraction, multiplication and division operation
  It also show the result

  @AddScenario
  Scenario: Add two numbers
    Given I am on the Home page
    When I write "20" in the "num1" first input field
    And  write "5" in the "num2" second input field
    And select the "sub" as operator from drop down list
    When I click "submitButton" button
    Then the result should be "15" in the "result" on the screen

