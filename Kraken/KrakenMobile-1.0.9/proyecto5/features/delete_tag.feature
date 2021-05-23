Feature: Eliminar un Tag
@user1 @web
Scenario: Como usuario quiero eliminar un tag para gestionar mis tags
Given I navigate to page "http://localhost:2368/ghost/#/signin"
Then I enter "ghost-author@example.com" into input field having id "ember8"
Then I enter "Pruebas10automatizadas" into input field having id "ember10"
Then I click on element having id "ember12" 

Then I should see text "Tags"
Given I navigate to page "http://localhost:2368/ghost/#/tags"
Then I click on element having css selector ".gh-btn-green"
Then I enter "Kraken Tag For Delete" into input field having id "tag-name"
Then I enter "Kraken Tag for Delete Description" into input field having id "tag-description"
Then I click on element having css selector ".gh-btn-blue"
Then I should see text "Delete Tag"

Given I navigate to page "http://localhost:2368/ghost/#/tags"
Then I should see text "Kraken Tag For Delete"
Given I navigate to page "http://localhost:2368/ghost/#/tags/kraken-tag-for-delete"
Then I click on element having css selector ".gh-btn-red"
Then I should see text "Are you sure you want to delete this tag"
Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.ember-view"
Given I navigate to page "http://localhost:2368/ghost/#/tags"
Then I wait for 1 seconds

