Feature: Scheduled Post Ghost

  @user1 @web
  Scenario: As a user I want to create a scheduled post.
	Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "ghost-author@example.com" into input field having css selector "input[name='identification']"
	Then I enter "Pruebas10automatizadas" into input field having css selector "input[name='password']"
    Then I click on element having id "ember12"
    Then I should see text "Dashboard"
	Then I click on element having text Posts
	Then I click on element having text SCHEDULED
	Then I click on element having xpath /html/body/div[2]/div/main/section/header/section/div[1]/div/div[1]
	Then I click on element having xpath /html/body/div[1]/div/div/div/section/div[2]/div[2]/div[2]/div[1]/div/div[1]
	Then I click on element having xpath /html/body/div[1]/div/div/div/section/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/div/div[2]/div[6]/button[2]
	Then I click on element having xpath /html/body/div[1]/div/footer/button[2]
	Then I should see text "Will be"
