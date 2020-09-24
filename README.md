
**Application Under Test:**

As per assignment i have used  egg timer website ( http://e.ggtimer.com/ )for automation.
The Scenario considered is to verify that the countdown actually happens and that the remaining time decreases in one-second increments.

You need to have one of the IDE either Eclipse or IntelliJ. Once you are done with cloning the project , you need to import the project.
Your preferred IDE might throw some error if path to JDK is not set properly.   

**What you will find under this repo:**

I have use Cucumber BDD Framework with, Page Object Model Framework which is also known as Page Object Design Pattern or Page Objects.

Scenario Context
Cucumber Report Plugins
Cucumber Options to generate simple reports provided by Cucumber itself.
Maven integration
Run Test from Command Line

**How to Start:**
 In the src folder of the project we have a README package which houses the read me.
 

 **Instructions to build and run code**
 
 You can run this project by two ways:
  
 through IDE Maven Tool Window LifeCycle section by Clicking lean and install directly from IDE
 through command line by following below commands
 "mvn -version"
 
 Running a command line build
  
 "mvn clean install" command triggers the jar packaging
 

 **dependencies**
 
 Inside the dependencies tag in pom.xml i have added following dependency
 1.selenium-java
 2.Cucumber-Java (This will indicate Maven, which Cucumber files are to be downloaded from the central repository to the local repository.).
 3.Cucumber-JUnit (This will indicate Maven, which Cucumber JUnit files are to be downloaded from the central repository to the local repository.).
 **Highlights**
 1.Used Java Collections and Stream API for storing and managing timer information retrieved during test execution.
 2.Cucumber reads the code written in plain English text (Language Gherkin) in the egg timer feature file .
 3.cucumber-reporting for preparing html reports.
 4.Due to simple test script architecture of this cucumber framework, It provides code reusability.
 
**Improvements**
Due to Time Constraint have not Implemented Browser Alert accept/dismiss logic when timer finishes after executing all assert statement in a while loop.
 
**Any bugs? **

During Running for test execution found that timer actually skipped a value of second in div text of DOM.
This is intermittent Behavoiur. 
