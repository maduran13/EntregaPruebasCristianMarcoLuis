Feature: Integrations Ghost

  @user1 @web
  Scenario: As a user I want to create a webhook in custom integration in ghost	
	Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "ghost-author@example.com" into input field having css selector "input[name='identification']"
	Then I enter "Pruebas10automatizadas" into input field having css selector "input[name='password']"
    Then I click on element having id "ember12"
    Then I should see text "Dashboard"
	Then I click on element having text Integrations
	Then I click on element having xpath /html/body/div[2]/div/main/section/section[2]/div[1]/div/a/article
	Then I click on element having text Add webhook
	Then I enter "Webhook Kraken" into input field having id "webhook-name"
	Then I click on element having id "webhook-event"
	Then I click on element having xpath /html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset[2]/div/span/select/optgroup[2]/option[3]
	Then I enter "http://unofficialkraken.com" into input field having id "webhook-targetUrl"
	Then I click on element having xpath /html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]
	Then I should see text "Not triggered"