Feature: Eliminar Page
@user1 @web
Scenario: Como usuario quiero eliminar una página para evitar tener información innecesaria
Given I navigate to page "http://localhost:2368/ghost/#/signin"
Then I enter "ghost-author@example.com" into input field having id "ember8"
Then I enter "Pruebas10automatizadas" into input field having id "ember10"
Then I click on element having id "ember12" 
Then I should see text "Pages"
Given I navigate to page "http://localhost:2368/ghost/#/pages"
Then I click on element having css selector ".gh-posts-list-item" 
Then I click on element having css selector ".gh-btn-icon"
Then I click on element having css selector ".gh-btn-hover-red"
Then I click on element having css selector ".gh-btn-red"
Then I wait for 2 seconds