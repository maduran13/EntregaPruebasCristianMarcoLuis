Feature: Crear Page 
@user1 @web
Scenario: Como usuario quiero crear una página para compartir la información que quiero que vea la comunidad
Given I navigate to page "http://localhost:2368/ghost/#/signin"
Then I enter "ghost-author@example.com" into input field having id "ember8"
Then I enter "Pruebas10automatizadas" into input field having id "ember10"
Then I click on element having id "ember12" 
Then I should see text "Pages"
Given I navigate to page "http://localhost:2368/ghost/#/pages"
Given I navigate to page "http://localhost:2368/ghost/#/editor/page"
Then I enter "KrakenPageTest" into input field having css selector "textarea"
Then I enter "KrakenPageDescription" into input field having css selector ".koenig-editor__editor"
Then I click on element having css selector ".gh-publishmenu" 
Then I click on element having css selector ".gh-btn-blue"
Then I click on element having css selector ".gh-notification-actions"
Given I navigate to page "http://localhost:2368/ghost/#/pages"
Then I click on element having css selector ".ember-power-select-selected-item"
Then I click on element having css selector "[data-option-index="2"]"
Then I wait for 4 seconds