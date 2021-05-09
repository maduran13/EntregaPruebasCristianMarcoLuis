Feature: Eliminar Post 
@user1 @web
Scenario: Como usuario quiero eliminar un post para que deje de estar publicado
Given I navigate to page "http://localhost:2368/ghost/#/signin"
Then I enter "ghost-author@example.com" into input field having id "ember8"
Then I enter "Pruebas10automatizadas" into input field having id "ember10"
Then I click on element having id "ember12" 
Then I should see text "Post"
Given I navigate to page "http://localhost:2368/ghost/#/posts"
Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
Then I enter "Kraken Post for Delete" into input field having css selector "textarea"
Then I enter "Kraken Post for Delete Description" into input field having css selector ".koenig-editor__editor"
Then I click on element having css selector ".gh-publishmenu" 
Then I click on element having css selector ".gh-btn-black"
Then I click on element having css selector ".gh-notification-actions"
Given I navigate to page "http://localhost:2368/ghost/#/posts"
Then I click on element having css selector ".ember-power-select-selected-item"
Then I click on element having css selector "[data-option-index="2"]"
Then I click on element having css selector ".gh-posts-list-item" 
Then I should see text "Kraken Post for Delete"
Then I click on element having css selector ".gh-actions-cog"
Then I click on element having css selector ".settings-menu-delete-button"
Then I should see text "Are you sure you want to delete this post"
Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.ember-view"

Then I wait for 1 seconds