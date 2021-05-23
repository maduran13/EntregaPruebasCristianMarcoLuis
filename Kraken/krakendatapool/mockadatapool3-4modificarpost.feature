Feature: Modificar Post
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Post"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Then I click on element having css selector ".gh-posts-list-item" 
  Then I enter "Wikido" into input field having css selector "textarea"
  Then I enter "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum." into input field having css selector ".koenig-editor__editor"
  Then I click on element having css selector ".gh-btn-blue"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Then I wait for 4 seconds