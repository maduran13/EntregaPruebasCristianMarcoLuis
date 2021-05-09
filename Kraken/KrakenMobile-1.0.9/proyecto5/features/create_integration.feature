Feature: Integrations Ghost

  @user1 @web
  Scenario: As a user I want to create a custom integration in ghost
    Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "ghost-author@example.com" into input field having css selector "input[name='identification']"
	Then I enter "Pruebas10automatizadas" into input field having css selector "input[name='password']"
    Then I click on element having id "ember12"
    Then I should see text "Dashboard"
	Then I click on element having text Integrations
	Then I click on element having text Add custom integration
	Then I enter "Kraken Integration" into input field having id "new-integration-name"
	Then I click on element having xpath /html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]
	Then I should see text "WEBHOOKS"
	Then I send a signal to user 2 containing "Edit"
	
	Then I wait for a signal containing "Add Webhook"
	Then I click on element having text Integrations
	Then I click on element having xpath /html/body/div[2]/div/main/section/section[2]/div[1]/div/a/article
	Then I click on element having text Add webhook
	Then I enter "Webhook Kraken" into input field having id "webhook-name"
	Then I click on element having id "webhook-event"
	Then I click on element having xpath /html/body/div[4]/div/div/div/div/div[2]/section/div[1]/fieldset[2]/div/span/select/optgroup[2]/option[3]
	Then I enter "http://unofficialkraken.com" into input field having id "webhook-targetUrl"
	Then I click on element having xpath /html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]
	Then I should see text "Not triggered"
	Then I send a signal to user 2 containing "Edit Webhook"
	
	Then I wait for a signal containing "Delete Integration"
	Then I click on element having text Integrations
	Then I click on element having xpath /html/body/div[2]/div/main/section/section[2]/div[1]/div/a/article
	Then I click on element having xpath /html/body/div[2]/div/main/section/section[2]/div/button
	Then I click on element having xpath /html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]
	Then I should see text "CUSTOM INTEGRATIONS"

  @user2 @web
  Scenario: As a user I want to edit a custom integration in ghost
	Given I wait for a signal containing "Edit"
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
	Then I send a signal to user 1 containing "Add Webhook"
	
	Then I wait for a signal containing "Edit Webhook"
	Then I click on element having text Integrations
	Then I click on element having xpath /html/body/div[2]/div/main/section/section[2]/div[1]/div/a/article
	Then I click on element having xpath /html/body/div[2]/div/main/section/section[1]/div/table/tbody/tr/td[5]/div/a
	Then I enter " Modified" into input field having id "webhook-name"
	Then I click on element having xpath /html/body/div[4]/div/div/div/div/div[2]/section/div[2]/button[2]
	Then I should see text "Webhook Kraken Modified"
	Then I send a signal to user 1 containing "Delete Integration"