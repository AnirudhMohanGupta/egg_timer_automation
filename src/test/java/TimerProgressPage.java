import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static util.ObjectRepository.Timer_page_CountDownProgress_Xpath;

public class TimerProgressPage {

    @Then("^Validate on clicking Go Button countdown is happening every second and remaining time decreases in one-second increments$")
    public void validate_on_clicking_Go_Button_countdown_is_happening_every_second_and_remaining_time_decreases_in_one_second_increments() throws Throwable {
        BaseDriver.driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        int countdown = 25;
        String actualTimerText = BaseDriver.driver.findElement(By.xpath(Timer_page_CountDownProgress_Xpath)).getText().trim();

        //BaseDriver.isAlertPresent();
        //System.out.println(actualTimerText);
//        SimpleDateFormat fromat = new SimpleDateFormat("ss");
//        Date expectedFirstTime = fromat.parse("25 Seconds");
        List<String> element_text = new ArrayList<>();



        while (!actualTimerText.equals("Time Expired!")) {


            // Waiting for one second before finding the element and checking the condition
            Thread.sleep(1000);
//            try {
//                Alert alert = BaseDriver.driver.switchTo().alert();
//                String alertText = alert.getText();
//                System.out.println("Alert data: " + alertText);
//                if (alertText.equals("Time Expired!")){
//                    alert.accept();
//                    break;
//                }
//            } catch (NoAlertPresentException e) {
//                e.printStackTrace();
//            }
                element_text.add(BaseDriver.driver.findElement(By.xpath(Timer_page_CountDownProgress_Xpath)).getText().trim());

                List<String> list = element_text.stream()
                    .distinct()
                    .collect(Collectors.toList());
            System.out.println(list);
            //BaseDriver.isAlertPresent();


            if (list.size() > 1 && list.get(list.size() -1).endsWith("seconds")) {
                int counterA = Integer.parseInt((list.get(list.size() - 1)).replaceAll("[\\D]", ""));
                int counterB = Integer.parseInt((list.get(list.size() - 2)).replaceAll("[\\D]", ""));

                System.out.println("Second last Element of the Timer List is " + counterA);
                System.out.println("Last Element of the Timer List is " + counterB);

                Assert.assertTrue("Validate countdown is happening every second", (counterB - counterA >= 1));
            }
            //System.out.println(BaseDriver.driver.findElement(By.xpath(Timer_page_CountDownProgress_Xpath)).getText());
            BaseDriver.isAlertPresent();



        }


    }


    @Then("^Close eggtimer Application$")
    public void close_eggtimer_Application() throws Throwable {
        BaseDriver.appLogout();
    }
}
