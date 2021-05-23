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
    Then I enter "Ut sit qui autem iste ut deleniti ut sed ea." into input field having css selector "textarea"
    Then I enter "Facilis aut expedita modi nihil ipsa. Nisi voluptatibus necessitatibus placeat libero vitae unde assumenda. Aliquam voluptatem voluptas iure nulla magnam harum. Sunt commodi itaque ut commodi itaque aut. Ipsa sunt maiores autem." into input field having css selector ".koenig-editor__editor"
    Then I click on element having css selector ".gh-publishmenu" 
    Then I click on element having css selector ".gh-btn-blue"
    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
    Then I wait for 4 seconds