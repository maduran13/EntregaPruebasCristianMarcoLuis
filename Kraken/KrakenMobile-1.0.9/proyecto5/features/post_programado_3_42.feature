Feature: Scheduled Post Ghost

  @user1 @web
  Scenario: As a user I want to create a scheduled post.
	Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "ghost-author@example.com" into input field having css selector "input[name='identification']"
	Then I enter "Pruebas10automatizadas" into input field having css selector "input[name='password']"
    Then I click on element having id "ember12"
    Then I should see text "Dashboard"
	Then I click on element having text Posts
	Then I click on element having xpath /html/body/div[2]/div/main/section/header/section/a
	Then I enter "Scheduled Post" into input field having css selector "textarea[placeHolder='Post Title']"
	Then I enter "This test consist to write something about Cypress or Kraken." into input field having css selector "p[data-koenig-dnd-droppable='true']"
	Then I click on element having xpath /html/body/div[2]/div/main/section/header/section/div/div[1]/span
	Then I click on element having xpath /html/body/div[1]/div/div/section/div/div[2]/div[2]/div[1]
	Then I click on element having xpath /html/body/div[1]/div/footer/button[2]
	Then I should see text "Will be"