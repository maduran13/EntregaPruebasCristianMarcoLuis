import Login from '../support/PageObjects/Login';
import Tag from '../support/PageObjects/Tag';
import Post from '../support/PageObjects/Post';
import Page from '../support/PageObjects/Page';

const login = new Login();
const tag = new Tag();
const post = new Post();
const page = new Page();

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


describe('Create Page', () => {
    it('Crea una pagina ', () => {
		auth();
		go_pages_view();
		create_page('Cypress Page Name');
    })
});


describe('Update Page', () => {
    it('Crea una pagina ', () => {
		auth();
		go_pages_view();
		update_page('Cypress Page Name Updated');
    })
});

describe('Delete Page', () => {
    it('Elimina una pagina ', () => {
		auth();
		go_pages_view();
		create_page("Cypress Page Name to Delete");
		go_pages_view();
		delete_page();
		go_pages_view();
    })
});


describe('Create a Schedule Post', () => {
    it('Crea un post programado', () => {
		auth();
		go_posts_view();
		create_schedule_post();
		go_posts_view();
    })
});


describe('Update a Schedule Post', () => {
    it('Modifica un post programado', () => {
		auth();
		go_posts_view();
		update_schedule_post();
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

function go_pages_view() {
   cy.visit(page.getPageResource());
   cy.wait(1000);
}

function create_page(page_name) {
  
	page.getButtonNewPage().click({ force: true });
	page.getInputPageName().type(page_name, {force: true});
	cy.wait(1000);
	page.getSavePageButton().click({ force: true });
}

function update_page(page_name) {
	
	page.getUpdatePageKey().click({force: true});
	cy.wait(500);
	page.getInputPageName().clear({force: true});
	
	page.getInputPageName().type(page_name, {force: true});
	page.getSavePageButton().click({ force: true });
	cy.wait(500);
}

function delete_page() {
	page.getDeletePageKey().click({ force: true });
	page.getSetupPageButton().click({ force: true });
	page.getDeletePageButton().click({ force: true });
	page.getConfirmationDeletePageButton().click({ force: true });
}

function create_schedule_post() {
    post.getButtonNewPost().click();
	post.getInputPostName().type("Cypress Post to Schedule", { force: true });
	cy.wait(1000);
	post.getSavePostButton().click({force: true});
	cy.wait(500);
	go_posts_view();
	post.getUpdateSchedulePostKey().click({force: true});
	cy.wait(500);
	post.getPublishButton().click({ force: true }); 
	cy.wait(500);
	post.getScheduleCheck().click({ force: true });
	cy.wait(500);
	post.getScheduleButton().click({ force: true });
	cy.wait(500);
	go_posts_view();
}


function update_schedule_post() {
	post.getUpdateSchedulePostKey().click({force: true});
	post.getScheduledButton().click({force:true});
	cy.wait(500);
	post.getInputDateSchedule().clear();
	cy.wait(500);
	post.getInputDateSchedule().type("2022-09-10", {force: true});
	cy.wait(500);
	post.getRescheduleButton().click({force: true});
	cy.wait(500);
	go_posts_view();
	cy.wait(1000);
	post.getUpdateSchedulePostKey().click({ force: true });
	post.getSetupPostButton().click({ force: true });
	post.getDeletePostButton().click({ force: true });
	post.getConfirmationDeletePostButton().click({ force: true });
}