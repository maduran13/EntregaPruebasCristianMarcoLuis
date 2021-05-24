import DataPool from '../support/DataPool';
import SpecificData from '../support/SpecificData';

import Login from '../support/PageObjects/Login';
import Tag from '../support/PageObjects/Tag';
import Post from '../support/PageObjects/Post';
import Page from '../support/PageObjects/Page';


const login = new Login();
const tag = new Tag();
const post = new Post();
const page = new Page();

//faker usado en este archivo como generador de data-pool online
const faker = require("faker");
//dataPool usado en este archivo como generador de data-pool a-priori
const dataPool = new DataPool();
//specificData usado en este archivo como data especifica y necesaria para la prueba
const specificData = new SpecificData();

let ghostVersion = '_4.4.0';


describe('Create Tag', () => {
    it('Crea un tag ', () => {
		auth('create_tag');
		go_tags_view();
		cy.screenshot(`./screen_${ghostVersion}/create_tag_0`);
		create_tag(dataPool.getDataForCreateTag(), faker.lorem.sentence());
    })
});


describe('Update Tag', () => {
    it('Modifica un tag existente', () => {
		auth('update_tag');
		go_tags_view();
		cy.screenshot(`./screen_${ghostVersion}/update_tag_0`);
		create_tag(dataPool.getDataForUpdateTag(), faker.lorem.sentence());
		go_tags_view();
		update_tag(faker.lorem.sentence(), faker.lorem.sentence());
    })
});


describe('Delete  Tag', () => {
    it('Elimina un tag existente', () => {
		auth('delete_tag');
		go_tags_view();
		cy.screenshot(`./screen_${ghostVersion}/delete_tag_0`);
		create_tag(dataPool.getDataForDeleteTag(), faker.lorem.sentence());
		go_tags_view();
		delete_tag();
    })
});


describe('Create Internal Tag', () => {
    it('Crea un tag ', () => {
		auth('create_internal_tag');
		go_tags_view();
		cy.screenshot(`./screen_${ghostVersion}/crate_internal_tag_0`);
		tag.getInternalTagButton().click();
		create_tag(dataPool.getDataForCreateInternalTag(), faker.lorem.sentence());
    })
});


describe('Delete a Post', () => {
    it('Eliminar un post ', () => {
		auth('delete_post');
		go_posts_view();
		cy.screenshot(`./screen_${ghostVersion}/delete_post_0`);
		create_post();
		go_posts_view();
		delete_post();
		go_posts_view();
    })
});



describe('Create Page', () => {
    it('Crea una pagina ', () => {
		auth('create_page');
		go_pages_view();
		cy.screenshot(`./screen_${ghostVersion}/crate_page_0`);
		create_page(dataPool.getDataForCreatePage());
    })
});


describe('Update Page', () => {
    it('Crea una pagina ', () => {
		auth('update_page');
		go_pages_view();
		cy.screenshot(`./screen_${ghostVersion}/update_page_0`);
		update_page(faker.lorem.sentence());
    })
});

describe('Delete Page', () => {
    it('Elimina una pagina ', () => {
		auth('delete_page');
		go_pages_view();
		cy.screenshot(`./screen_${ghostVersion}/delete_page_0`);
		create_page(dataPool.getDataForDeletePage());
		go_pages_view();
		delete_page();
		go_pages_view();
    })
});


describe('Create a Schedule Post', () => {
    it('Crea un post programado', () => {
		auth('create_schedule_post');
		go_posts_view();
		cy.screenshot(`./screen_${ghostVersion}/create_schedule_post_0`);
		create_schedule_post();
		go_posts_view();
    })
});


describe('Update a Schedule Post', () => {
    it('Modifica un post programado', () => {
		auth('update_schedule_post');
		go_posts_view();
		cy.screenshot(`./screen_${ghostVersion}/update_schedule_post_0`);
		update_schedule_post();
		go_posts_view();
    })
});

function auth(test) {
	
	cy.visit(login.getLoginUrl());
	cy.wait(500);
    login.getInputUserName().type(specificData.getUserName());
    login.getInputPassword().type(specificData.getPassword());
	cy.screenshot(`./screen_${ghostVersion}/${test}_auth_login_1`);
    login.getLoginButton().click();
	cy.wait(2000);
	cy.screenshot(`./screen_${ghostVersion}/${test}_auth_login_2`);
    cy.wait(500);
}

function go_tags_view() {
   cy.visit(tag.getTagResource());
   cy.wait(1000);
}

function create_tag(tag_name, tag_description) {
  
   let _tag = 'create'
	if (tag_name == label_for_create_internal_tag) {
		_tag = 'create_internal';
	} else if (tag_name == label_for_update_tag) {
		_tag = 'update_create';
	} else if (tag_name == label_for_delete_tag) {
		_tag = 'delete_create';
	}		
		
	tag.getButtonNewTag().click();
	cy.screenshot(`./screen_${ghostVersion}/${_tag}_tag_1`);
	tag.getInputTagName().type(tag_name, {force: true});
	tag.getInputTagDescription().type(tag_description, {force: true});
	cy.screenshot(`./screen_${ghostVersion}/${_tag}_tag_2`);
	tag.getSaveTagButton().click({ force: true });
	go_tags_view();
	cy.screenshot(`./screen_${ghostVersion}/${_tag}_tag_3`);

}

function update_tag(tag_name, tag_description) {
	
	cy.screenshot(`./screen_${ghostVersion}/update_tag_1`);
	cy.contains(dataPool.getDataForUpdateTag()).first().click({force: true});
	cy.screenshot(`./screen_${ghostVersion}/update_tag_2`);
	cy.wait(500);
	tag.getInputTagName().clear({force: true});
	tag.getInputTagDescription().clear({force: true});
	cy.screenshot(`./screen_${ghostVersion}/update_tag_3`);
	tag.getInputTagName().type(tag_name, {force: true});
	tag.getInputTagDescription().type(tag_description, {force: true});
	cy.screenshot(`./screen_${ghostVersion}/update_tag_4`);
	tag.getSaveTagButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/update_tag_5`);
	cy.wait(500);
}

function delete_tag() {
	cy.screenshot(`./screen_${ghostVersion}/delete_tag_1`);
	cy.contains(dataPool.getDataForDeleteTag()).first().click({force: true});
	cy.wait(1000);
	cy.screenshot(`./screen_${ghostVersion}/delete_tag_2`);
	tag.getDeleteTagButton().click({ force: true });
	cy.wait(1000);
	cy.screenshot(`./screen_${ghostVersion}/delete_tag_3`);
	tag.getConfirmationDeleteTagButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_tag_4`);	
}

function go_posts_view() {
   cy.visit(post.getPostResource());
   cy.wait(1000);
}

function create_post() {
	
	let _post = "create_delete";
	
	cy.screenshot(`./screen_${ghostVersion}/${_post}_post_1`);
    post.getButtonNewPost().click();
	cy.screenshot(`./screen_${ghostVersion}/${_post}_post_2`);
    let body = cy.get("body");
    body.find("textarea").first().type(dataPool.getDataForCreateDeletePost(), { force: true });
	cy.screenshot(`./screen_${ghostVersion}/${_post}_post_3`);
    post.getSavePostButton().click({force: true});
	cy.screenshot(`./screen_${ghostVersion}/${_post}_post_4`);
}

function delete_post() {
	cy.screenshot(`./screen_${ghostVersion}/delete_post_1`);
    cy.contains(dataPool.getDataForCreateDeletePost()).first().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_post_2`);
	post.getSetupPostButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_post_3`);
	post.getDeletePostButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_post_4`);
	post.getConfirmationDeletePostButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_post_5`);
}

function go_pages_view() {
   cy.visit(page.getPageResource());
   cy.wait(1000);
}

function create_page(page_name) {
	

	let _page = "crate_delete"

	
	cy.screenshot(`./screen_${ghostVersion}/${_page}_page_1`);
	page.getButtonNewPage().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/${_page}_page_2`);
	page.getInputPageName().type(page_name, {force: true});
	cy.wait(1000);
	cy.screenshot(`./screen_${ghostVersion}/${_page}_page_3`);
	page.getSavePageButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/${_page}_page_4`);
}

function update_page(page_name) {
	
	cy.screenshot(`./screen_${ghostVersion}/update_page_1`);
	cy.contains(dataPool.getDataForCreatePage()).first().click({force: true});
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/update_page_2`);
	page.getInputPageName().clear({force: true});
	cy.screenshot(`./screen_${ghostVersion}/update_page_3`);
	page.getInputPageName().type(page_name, {force: true});
	cy.screenshot(`./screen_${ghostVersion}/update_page_4`);
	page.getSavePageButton().click({ force: true });
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/update_page_5`);
}

function delete_page() {
	cy.screenshot(`./screen_${ghostVersion}/delete_page_1`);
	cy.contains(dataPool.getDataForDeletePage()).first().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_page_2`);
	page.getSetupPageButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_page_3`);
	page.getDeletePageButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_page_4`);
	page.getConfirmationDeletePageButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/delete_page_5`);
}

function create_schedule_post() {
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_1`);
    post.getButtonNewPost().click();
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_2`);
	post.getInputPostName().type(dataPool.getDataForCreateSchedulePost(), { force: true });
	cy.wait(1000);
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_3`);
	post.getSavePostButton().click({force: true});
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_4`);
	go_posts_view();
	cy.contains(dataPool.getDataForCreateSchedulePost()).click({force: true});
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_5`);
	post.getPublishButton().click({ force: true }); 
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_6`);
	post.getScheduleCheck().click({ force: true });
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_7`);
	post.getScheduleButton().click({ force: true });
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_8`);
	go_posts_view();
	cy.screenshot(`./screen_${ghostVersion}/create_shcedule_post_9`);
}


function update_schedule_post() {
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_1`);
	cy.contains(dataPool.getDataForCreateSchedulePost()).first().click({force: true});
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_2`);
	post.getScheduledButton().click({force:true});
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_3`);
	post.getInputDateSchedule().clear();
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_4`);
	post.getInputDateSchedule().type(faker.date.future, {force: true});
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_5`);
	post.getRescheduleButton().click({force: true});
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_6`);
	go_posts_view();
	cy.wait(1000);
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_7`);
	cy.contains(dataPool.getDataForCreateSchedulePost()).first().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_8`);
	post.getSetupPostButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_9`);
	post.getDeletePostButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_10`);
	post.getConfirmationDeletePostButton().click({ force: true });
	cy.screenshot(`./screen_${ghostVersion}/update_shcedule_post_11`);
}