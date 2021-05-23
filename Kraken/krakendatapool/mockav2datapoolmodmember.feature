Feature: Modificar Miembro
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Members"
  Given I navigate to page "http://localhost:2368/ghost/#/members"
  Then I click on element having css selector ".gh-members-list-item"
  Then I enter "Avavee" into input field having id "member-name"
  Then I click on element having css selector ".gh-btn-primary"
  Then I should see text "Delete member"
  Given I navigate to page "http://localhost:2368/ghost/#/members"
  Then I wait for 4 seconds
  
  
  
  