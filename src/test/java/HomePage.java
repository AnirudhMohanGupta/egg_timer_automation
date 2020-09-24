import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.ObjectRepository;

public class HomePage {




    @Then("^User enters countdown time as \"([^\"]*)\" in Start a time text section and click on Go Button$")
    public void user_enters_countdown_time_as_in_Start_a_time_text_section_and_click_on_Go_Button(String time) throws Throwable {
        BaseDriver.waitTillVisible(ObjectRepository.Home_page_StartTimerTextBox_Xpath);
        BaseDriver.send_Keys(time, ObjectRepository.Home_page_StartTimerTextBox_Xpath);
        BaseDriver.waitTillVisible(ObjectRepository.Home_page_Go_Button_Xpath);
        BaseDriver.button_xpath(ObjectRepository.Home_page_Go_Button_Xpath);
    }







}
