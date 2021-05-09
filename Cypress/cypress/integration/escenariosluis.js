import Login from '../support/PageObjects/Login';
import Tag from '../support/PageObjects/Tag';
import Post from '../support/PageObjects/Post';

const login = new Login();
const tag = new Tag();
const post = new Post();

describe('Create Tag', () => {
    it('Crea un tag ', () => {
		auth();
		go_tags_view();
		create_tag('Cypress Tag Name', 'Cypress Tag Description');
    })
});

describe('Update Tag', () => {
    it('Modifica un tag existente', () => {
		auth();
		go_tags_view();
		create_tag('Cypress Tag Name for Update', 'Cypress Tag Description for Update');
		go_tags_view();
		update_tag('Updated Cypress Tag Name', 'Updated Cypress Tag Description');
    })
});

describe('Delete  Tag', () => {
    it('Elimina un tag existente', () => {
		auth();
		go_tags_view();
		create_tag('Cypress Tag Name for Delete', 'Cypress Tag Description for Delete');
		go_tags_view();
		delete_tag();
    })
});

describe('Create Internal Tag', () => {
    it('Crea un tag ', () => {
		auth();
		go_tags_view();
		tag.getInternalTagButton().click();
		create_tag('Cypress Internal Tag Name', 'Cypress Internal Tag Description');
    })
});


describe('Delete a Post', () => {
    it('Eliminar un post ', () => {
		auth();
		go_posts_view();
		create_post();
		go_posts_view();
		delete_post();
		go_posts_view();
    })
});


function auth() {
	
	cy.visit(login.getLoginUrl());
    login.getInputUserName().type(login.getUserName());
    login.getInputPassword().type(login.getPassword());
    login.getLoginButton().click();
    cy.wait(500);
}

function go_tags_view() {
   cy.visit(tag.getTagResource());
   cy.wait(1000);
}

function create_tag(tag_name, tag_description) {
  
	tag.getButtonNewTag().click();
	tag.getInputTagName().type(tag_name, {force: true});
	tag.getInputTagDescription().type(tag_description, {force: true});
	tag.getSaveTagButton().click({ force: true });
}

function update_tag(tag_name, tag_description) {
	
	tag.getUpdateTagKey().click({force: true});
	cy.wait(500);
	tag.getInputTagName().clear({force: true});
	tag.getInputTagDescription().clear({force: true});
	
	tag.getInputTagName().type(tag_name, {force: true});
	tag.getInputTagDescription().type(tag_description, {force: true});
	tag.getSaveTagButton().click({ force: true });
	cy.wait(500);
}

function delete_tag() {
	tag.getDeleteTagKey().click({force: true});
	cy.wait(1000);
	tag.getDeleteTagButton().click({ force: true });
	cy.wait(1000);
	tag.getConfirmationDeleteTagButton().click({ force: true }); 
}

function go_posts_view() {
   cy.visit(post.getPostResource());
   cy.wait(1000);
}

function create_post() {
    post.getButtonNewPost().click();
    let body = cy.get("body");
    body.find("textarea").first().type("Cypress Post to Delete", { force: true });
    post.getSavePostButton().click({force: true});
}

function delete_post() {
    post.getDeletePostKey().click({ force: true });
	post.getSetupPostButton().click({ force: true });
	post.getDeletePostButton().click({ force: true });
	post.getConfirmationDeletePostButton().click({ force: true });
}

