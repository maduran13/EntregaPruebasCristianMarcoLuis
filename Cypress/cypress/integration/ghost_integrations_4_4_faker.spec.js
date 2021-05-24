let user = 'ghost-author@example.com';
let password = 'Pruebas10automatizadas';
let nameIntegration = 'Cypress Integration';
let modifiedIntegrationName = 'Cypress Integration Version2';
let nameWebhook = 'Cypress Webhook';
let targetUrlWebhook = 'http://unofficialcypress.com';
let newTargetUrlWebhook = 'http://randomwebbhook.com';
let ghostVersion = '4.4.0'
const faker = require('faker');

function auth(user, password) {
    cy.get("#ember8").type(user);
    cy.get("#ember10").type(password);
	cy.screenshot(`./screen_${ghostVersion}/auth_take_1`);
    cy.get("#ember12").click();
	cy.screenshot(`./screen_${ghostVersion}/auth_take_2`);
    cy.wait(500);
}
function clear_auth_form() {
    cy.get("#ember8").clear();
    cy.get("#ember10").clear();
}

function create_integration(nameIntegrationFaker) {
    cy.contains("Integrations").click();
	cy.screenshot(`./screen_${ghostVersion}/${nameIntegrationFaker}_create_int_take_1`);
	cy.contains("Add custom").click();
	cy.wait(100);
	cy.get("#new-integration-name").type(nameIntegrationFaker);
	cy.get('.gh-btn-black').click();
	cy.screenshot(`./screen_${ghostVersion}/${nameIntegrationFaker}_create_int_take_2`);
	cy.wait(500);
	expect(cy.contains("API URL")).to.exist;
	cy.screenshot(`./screen_${ghostVersion}/${nameIntegrationFaker}_create_int_take_3`);
}

function add_webhook(nameIntegrationFaker,nameWebhookFaker,fakeURLWebhook){
	cy.contains("Integrations").click();
	cy.contains(nameIntegrationFaker).click();
	cy.get('[class^="ml1 blue"]').click();
	cy.screenshot(`./screen_${ghostVersion}/${nameIntegrationFaker}_add_hook_take_1`);
	cy.wait(100);
	cy.get("#webhook-name").type(nameWebhookFaker);
	cy.get('#webhook-event').select('post.added');
	cy.screenshot(`./screen_${ghostVersion}/${nameIntegrationFaker}_add_hook_take_2`);
	cy.get("#webhook-targetUrl").type(fakeURLWebhook);
	cy.screenshot(`./screen_${ghostVersion}/${nameIntegrationFaker}_add_hook_take_3`);
	cy.get('[class^="gh-btn gh-btn-black"][class$=ember-view]').click();
	cy.screenshot(`./screen_${ghostVersion}/${nameIntegrationFaker}_add_hook_take_4`);
	expect(cy.contains(nameWebhookFaker)).to.exist;
}



function opened_edit_integration(modifiedNameIntegrationFaker){
	cy.get('#integration_name').clear({force: true});
	cy.get('#integration_name').type(modifiedNameIntegrationFaker);
	cy.screenshot(`./screen_${ghostVersion}/edit_int_take_1`);
	cy.get('[class^="gh-btn gh-btn-primary"][class$=ember-view]').click();
	cy.wait(100);
	cy.screenshot(`./screen_${ghostVersion}/edit_int_take_2`);
	expect(cy.contains(modifiedNameIntegrationFaker)).to.exist;
}

function edit_webhook(modifiedFakeURLWebhook){
	cy.get('[class^="w6 h6 fill-midgrey pa1"]').click();
	cy.screenshot(`./screen_${ghostVersion}/edit_hook_take_1`);
	cy.wait(100);
	cy.get("#webhook-targetUrl").clear();
	cy.screenshot(`./screen_${ghostVersion}/edit_hook_take_2`);
	cy.get("#webhook-targetUrl").type(modifiedFakeURLWebhook);
	cy.get('[class^="gh-btn gh-btn-black"][class$=ember-view]').click();
	cy.screenshot(`./screen_${ghostVersion}/edit_hook_take_3`);
	expect(cy.contains(modifiedFakeURLWebhook)).to.exist;
}

function delete_integration(nameIntegrationFaker) {
    cy.contains("Integrations").click();
	cy.contains(nameIntegrationFaker).click();
	cy.screenshot(`./screen_${ghostVersion}/del_int_take_1`);
	cy.wait(100);
	cy.contains("Delete integration").click();
	cy.wait(500);
	cy.screenshot(`./screen_${ghostVersion}/del_int_take_2`);
	cy.get('[class^="gh-btn gh-btn-red"][class$=ember-view]').click();
	cy.wait(500);
	expect(cy.contains("Slack")).to.exist;
	cy.screenshot(`./screen_${ghostVersion}/del_int_take_3`);
}

describe('Testing Ghost', () => {
    it('Test links between registration and login page', () => {
		cy.visit("http://localhost:2368/ghost/#/signin");
        cy.wait(1000);
		let nameIntegrationFaker = faker.name.lastName();
		let nameWebhookFaker = faker.company.companyName();
		let fakeURLWebhook = faker.internet.domainName();
		let modifiedNameIntegrationFaker = faker.name.jobTitle();
		let modifiedFakeURLWebhook = faker.internet.domainName();
        cy.get('form').within(() => {
			clear_auth_form();
			auth(user,password);
		});
		create_integration(nameIntegrationFaker);
		add_webhook(nameIntegrationFaker,nameWebhookFaker,fakeURLWebhook);
		opened_edit_integration(modifiedNameIntegrationFaker);
		edit_webhook(modifiedFakeURLWebhook);
		delete_integration(modifiedNameIntegrationFaker);
    })
})