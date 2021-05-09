Feature: Integrations Ghost

  @user1 @web
  Scenario: As a user I want to edit a custom integration in ghost
	Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "ghost-author@example.com" into input field having css selector "input[name='identification']"
	Then I enter "Pruebas10automatizadas" into input field having css selector "input[name='password']"
    Then I click on element having id "ember12"
    Then I should see text "Dashboard"
	Then I click on element having text Integrations
	Then I click on element having xpath /html/body/div[2]/div/main/section/section[2]/div[1]/div/a/article
	Then I enter " Modified" into input field having id "integration_name"
	Then I click on element having xpath /html/body/div[2]/div/main/section/form/div[1]/header/section/button
	Then I should see text "Kraken Modified"