$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/eggtimer.feature");
formatter.feature({
  "line": 1,
  "name": "Validate count down functionality from http://e.ggtimer.com/",
  "description": "",
  "id": "validate-count-down-functionality-from-http://e.ggtimer.com/",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Count down functionality Test Scenario",
  "description": "",
  "id": "validate-count-down-functionality-from-http://e.ggtimer.com/;count-down-functionality-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to eggtimer website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of home page is \"E.gg Timer - a simple countdown timer\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters countdown time as \"\u003cTime_inSec\u003e\" in Start a time text section and click on Go Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Validate on clicking Go Button countdown is happening every second and remaining time decreases in one-second increments",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close eggtimer Application",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validate-count-down-functionality-from-http://e.ggtimer.com/;count-down-functionality-test-scenario;",
  "rows": [
    {
      "cells": [
        "Time_inSec"
      ],
      "line": 13,
      "id": "validate-count-down-functionality-from-http://e.ggtimer.com/;count-down-functionality-test-scenario;;1"
    },
    {
      "cells": [
        "25 Seconds"
      ],
      "line": 14,
      "id": "validate-count-down-functionality-from-http://e.ggtimer.com/;count-down-functionality-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Count down functionality Test Scenario",
  "description": "",
  "id": "validate-count-down-functionality-from-http://e.ggtimer.com/;count-down-functionality-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to eggtimer website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of home page is \"E.gg Timer - a simple countdown timer\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters countdown time as \"25 Seconds\" in Start a time text section and click on Go Button",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Validate on clicking Go Button countdown is happening every second and remaining time decreases in one-second increments",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close eggtimer Application",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseDriver.user_navigates_to_eggtimer_website()"
});
formatter.result({
  "duration": 9242006248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E.gg Timer - a simple countdown timer",
      "offset": 23
    }
  ],
  "location": "BaseDriver.title_of_home_page_is(String)"
});
formatter.result({
  "duration": 10022011015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25 Seconds",
      "offset": 31
    }
  ],
  "location": "HomePage.user_enters_countdown_time_as_in_Start_a_time_text_section_and_click_on_Go_Button(String)"
});
formatter.result({
  "duration": 6112031667,
  "status": "passed"
});
formatter.match({
  "location": "TimerProgressPage.validate_on_clicking_Go_Button_countdown_is_happening_every_second_and_remaining_time_decreases_in_one_second_increments()"
});
formatter.result({
  "duration": 22782239183,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Time Expired!}\n  (Session info: chrome\u003d85.0.4183.121): Time Expired!\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anirudhs-MacBook-Air.local\u0027, ip: \u00272409:4043:2c83:6774:b472:3646:a22f:6353%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/9t/f5v0yk0x1pq...}, goog:chromeOptions: {debuggerAddress: localhost:52356}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: ignore, webauthn:virtualAuthenticators: true}\nSession ID: d4e31f9fbe6d324881aed1050865e574\n*** Element info: {Using\u003dxpath, value\u003d//h2[@id\u003d\u0027progressText\u0027]}\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat TimerProgressPage.validate_on_clicking_Go_Button_countdown_is_happening_every_second_and_remaining_time_decreases_in_one_second_increments(TimerProgressPage.java:49)\n\tat ✽.Then Validate on clicking Go Button countdown is happening every second and remaining time decreases in one-second increments(src/test/resources/eggtimer.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "TimerProgressPage.close_eggtimer_Application()"
});
formatter.result({
  "status": "skipped"
});
});