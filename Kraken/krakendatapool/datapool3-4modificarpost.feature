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
    Then I enter "Sunt occaecati aut quia illo quae quos sed." into input field having css selector "textarea"
    Then I enter "Reprehenderit dolorum quo consequatur et autem laborum. Consectetur aut maiores est et eum quis. Distinctio et neque nihil id. Praesentium veritatis qui ratione voluptatem molestias necessitatibus laboriosam beatae consectetur. Dolor nobis sunt fuga blanditiis voluptas eos. Tempore molestiae aut voluptatum." into input field having css selector ".koenig-editor__editor"
    Then I click on element having css selector ".gh-btn-blue"
    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I wait for 4 seconds