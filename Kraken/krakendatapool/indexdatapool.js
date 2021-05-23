const fs = require("fs");

let rawdata = fs.readFileSync("MOCK_DATA.json");
let datapool = JSON.parse(rawdata);
console.log(`Se leyeron ${datapool.length} objetos`);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciarScript() {
    //crear Miembro
    let valuemember = getRandomInt(0, 999);
    let miembro = datapool[valuemember];
    let datapoolmember = `Feature: Crear Miembro
@user1 @web
Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
Given I navigate to page "http://localhost:2368/ghost/#/signin"
Then I enter "ghost-author@example.com" into input field having id "ember8"
Then I enter "Pruebas10automatizadas" into input field having id "ember10"
Then I click on element having id "ember12" 
Then I should see text "Members"
Given I navigate to page "http://localhost:2368/ghost/#/members"
Given I navigate to page "http://localhost:2368/ghost/#/members/new"
Then I enter "${miembro.member}" into input field having id "member-name"
Then I enter "${miembro.email}" into input field having id "member-email"
Then I click on element having css selector ".gh-btn"
Then I should see text "Delete member"
`;
    fs.writeFileSync("mockadatapoolv3-4crearmiembro.feature", datapoolmember);

    valuemember = getRandomInt(0, 999);
    let modmiembro = datapool[valuemember];
    let datapoolmodmember = `Feature: Modificar Miembro
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Members"
  Given I navigate to page "http://localhost:2368/ghost/#/members"
  Then I click on element having css selector ".gh-members-list-item"
  Then I enter "${modmiembro.member}" into input field having id "member-name"
  Then I click on element having css selector ".gh-btn-blue"
  Then I wait for 2 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/members"
  Then I wait for 4 seconds`;

    fs.writeFileSync(
        "mockadatapoolv3-4modificarmiembro.feature",
        datapoolmodmember
    );

    valuemember = getRandomInt(0, 999);
    let post = datapool[valuemember];
    let datapoolcreatepost = `Feature: Crear Post 
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Post"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
  Then I enter "${post.title}" into input field having css selector "textarea"
  Then I enter "${post.post}" into input field having css selector ".koenig-editor__editor"
  Then I click on element having css selector ".gh-publishmenu" 
  Then I click on element having css selector ".gh-btn-blue"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Then I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
  Then I wait for 4 seconds`;

    fs.writeFileSync("mockadatapoolv3-4crearpost.feature", datapoolcreatepost);
    valuemember = getRandomInt(0, 999);
    let modpost = datapool[valuemember];
    let datapoolmodpost = `Feature: Modificar Post
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Post"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Then I click on element having css selector ".gh-posts-list-item" 
  Then I enter "${modpost.title}" into input field having css selector "textarea"
  Then I enter "${modpost.post}" into input field having css selector ".koenig-editor__editor"
  Then I click on element having css selector ".gh-btn-blue"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Then I wait for 4 seconds`;

    fs.writeFileSync("mockadatapool3-4modificarpost.feature", datapoolmodpost);

    valuemember = getRandomInt(0, 999);
    let v2member = datapool[valuemember];
    let datapoolv2createmember = `Feature: Crear Miembro
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Members"
  Given I navigate to page "http://localhost:2368/ghost/#/members"
  Given I navigate to page "http://localhost:2368/ghost/#/members/new"
  Then I enter "${v2member.member}" into input field having id "member-name"
  Then I enter "${v2member.email}" into input field having id "member-email"
  Then I click on element having css selector ".gh-btn"
  Then I should see text "Delete member"
  
  
  
  `;

    fs.writeFileSync(
        "mockav2datapoolcreatemember.feature",
        datapoolv2createmember
    );

    valuemember = getRandomInt(0, 999);
    let v2modmember = datapool[valuemember];
    let datapoolv2modmember = `Feature: Modificar Miembro
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Members"
  Given I navigate to page "http://localhost:2368/ghost/#/members"
  Then I click on element having css selector ".gh-members-list-item"
  Then I enter "${v2modmember.title}" into input field having id "member-name"
  Then I click on element having css selector ".gh-btn-primary"
  Then I should see text "Delete member"
  Given I navigate to page "http://localhost:2368/ghost/#/members"
  Then I wait for 4 seconds
  
  
  
  `;

    fs.writeFileSync("mockav2datapoolmodmember.feature", datapoolv2modmember);

    valuemember = getRandomInt(0, 999);
    let v2createpost = datapool[valuemember];
    let datapoolv2createpost = `Feature: Crear Post 
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Post"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
  Then I enter "${v2createpost.title}" into input field having css selector "textarea"
  Then I enter "${v2createpost.post}" into input field having css selector ".koenig-editor__editor"
  Then I click on element having css selector ".gh-publishmenu" 
  Then I click on element having css selector ".gh-btn-black"
  Then I click on element having css selector ".gh-notification-actions"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Then I click on element having css selector ".ember-power-select-selected-item"
  Then I click on element having css selector "[data-option-index="2"]"
  Then I wait for 4 seconds`;

    fs.writeFileSync("mockav2datapoolcreatepost.feature", datapoolv2createpost);

    valuemember = getRandomInt(0, 999);
    let v2modpost = datapool[valuemember];
    let datapoolv2modpost = `Feature: Crear Post 
  @user1 @web
  Scenario: Como usuario quiero crear un miembro para permitirlo asociar personas a la plataforma
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  Then I enter "ghost-author@example.com" into input field having id "ember8"
  Then I enter "Pruebas10automatizadas" into input field having id "ember10"
  Then I click on element having id "ember12" 
  Then I should see text "Post"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
  Then I enter "${v2modpost.title}" into input field having css selector "textarea"
  Then I enter "${v2modpost.post}" into input field having css selector ".koenig-editor__editor"
  Then I click on element having css selector ".gh-publishmenu" 
  Then I click on element having css selector ".gh-btn-black"
  Then I click on element having css selector ".gh-notification-actions"
  Given I navigate to page "http://localhost:2368/ghost/#/posts"
  Then I click on element having css selector ".ember-power-select-selected-item"
  Then I click on element having css selector "[data-option-index="2"]"
  Then I wait for 4 seconds`;

    fs.writeFileSync("mockav2datapoolmodpost.feature", datapoolv2modpost);
}
iniciarScript();