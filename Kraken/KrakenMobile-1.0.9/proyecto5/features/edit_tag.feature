Feature: Modificar un Tag
@user1 @web
Scenario: Como usuario quiero modificar un tag para poder utilizarlo
Given I navigate to page "http://localhost:2368/ghost/#/signin"
Then I enter "ghost-author@example.com" into input field having id "ember8"
Then I enter "Pruebas10automatizadas" into input field having id "ember10"
Then I click on element having id "ember12" 

Then I should see text "Tags"
Given I navigate to page "http://localhost:2368/ghost/#/tags"
Then I click on element having css selector ".gh-btn-primary"
Then I enter "Kraken Tag For Update" into input field having id "tag-name"
Then I enter "Kraken Tag for Update Description" into input field having id "tag-description"
Then I click on element having css selector ".gh-btn-primary"
Then I should see text "Delete Tag"

Given I navigate to page "http://localhost:2368/ghost/#/tags"
Then I should see text "Kraken Tag For Update"
Given I navigate to page "http://localhost:2368/ghost/#/tags/kraken-tag-for-update"
Then I enter " is Updated" into input field having id "tag-name"
Then I enter " is Updated" into input field having id "tag-description"
Then I click on element having css selector ".gh-btn-primary"
Then I should see text "Delete Tag"

Given I navigate to page "http://localhost:2368/ghost/#/tags"
Then I wait for 1 seconds

