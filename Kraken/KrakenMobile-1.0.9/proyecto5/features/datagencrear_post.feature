Feature: Crear Post 
@user1 @web
Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
Given I navigate to page "http://localhost:2368/ghost/#/signin"
Then I enter "ghost-author@example.com" into input field having id "ember8"
Then I enter "Pruebas10automatizadas" into input field having id "ember10"
Then I click on element having id "ember12" 
Then I should see text "Post"
Given I navigate to page "http://localhost:2368/ghost/#/posts"
Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
Then I enter "$name" into input field having css selector "textarea"
Then I enter "$name" into input field having css selector ".koenig-editor__editor"
Then I click on element having css selector ".gh-publishmenu" 
Then I click on element having css selector ".gh-btn-black"
Then I click on element having css selector ".gh-notification-actions"
Given I navigate to page "http://localhost:2368/ghost/#/posts"
Then I click on element having css selector ".ember-power-select-selected-item"
Then I click on element having css selector "[data-option-index="2"]"
Then I wait for 4 seconds