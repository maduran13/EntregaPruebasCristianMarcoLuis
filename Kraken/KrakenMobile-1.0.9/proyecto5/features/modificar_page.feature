Feature: Modificar Page
@user1 @web
Scenario: Como usuario quiero modificar una página para actualizar su información
Given I navigate to page "http://localhost:2368/ghost/#/signin"
Then I enter "ghost-author@example.com" into input field having id "ember8"
Then I enter "Pruebas10automatizadas" into input field having id "ember10"
Then I click on element having id "ember12" 
Then I should see text "Pages"
Given I navigate to page "http://localhost:2368/ghost/#/pages"
Then I click on element having css selector ".gh-posts-list-item" 
Then I enter "KrakenModifiedPageTest" into input field having css selector "textarea"
Then I enter "KrakenModifedPageDescription" into input field having css selector ".koenig-editor__editor"
Then I click on element having css selector ".gh-publishmenu-trigger"
Then I click on element having css selector ".gh-btn-blue"
Then I wait for 4 seconds
Given I navigate to page "http://localhost:2368/ghost/#/pages"
Then I wait for 4 seconds