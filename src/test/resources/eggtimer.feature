Feature: Validate count down functionality from http://e.ggtimer.com/

  Scenario Outline: Count down functionality Test Scenario

    Given User navigates to eggtimer website
    When title of home page is "E.gg Timer - a simple countdown timer"
    Then User enters countdown time as "<Time_inSec>" in Start a time text section and click on Go Button
    Then Validate on clicking Go Button countdown is happening every second and remaining time decreases in one-second increments
    Then Close eggtimer Application


    Examples:
      | Time_inSec |
      | 25 Seconds |