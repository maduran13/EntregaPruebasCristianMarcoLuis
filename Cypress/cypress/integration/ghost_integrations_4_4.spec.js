let user = 'ghost-author@example.com';
let password = 'Pruebas10automatizadas';
let nameIntegration = 'Cypress Integration';
let modifiedIntegrationName = 'Cypress Integration Version2';
let nameWebhook = 'Cypress Webhook';
let targetUrlWebhook = 'http://unofficialcypress.com';
let newTargetUrlWebhook = 'http://randomwebbhook.com';
let ghostVersion = '4.4.0'

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

function create_integration() {
    cy.contains("Integrations").click();
	cy.screenshot(`./screen_${ghostVersion}/create_int_take_1`);
	cy.contains("Add custom").click();
	cy.wait(100);
	cy.get("#new-integration-name").type(nameIntegration);
	cy.get('.gh-btn-black').click();
	cy.screenshot(`./screen_${ghostVersion}/create_int_take_2`);
	cy.wait(500);
	expect(cy.contains("API URL")).to.exist;
	cy.screenshot(`./screen_${ghostVersion}/create_int_take_3`);
}

function opened_edit_integration(){
	cy.get('#integration_name').clear({force: true});
	cy.get('#integration_name').type(modifiedIntegrationName);
	cy.screenshot(`./screen_${ghostVersion}/edit_int_take_1`);
	cy.get('[class^="gh-btn gh-btn-primary"][class$=ember-view]').click();
	cy.wait(100);
	cy.screenshot(`./screen_${ghostVersion}/edit_int_take_2`);
	expect(cy.contains(modifiedIntegrationName)).to.exist;
}

function add_webhook(){
	cy.contains("Integrations").click();
	cy.contains(nameIntegration).click();
	cy.get('[class^="ml1 blue"]').click();
	cy.screenshot(`./screen_${ghostVersion}/add_hook_take_1`);
	cy.wait(100);
	cy.get("#webhook-name").type(nameWebhook);
	cy.get('#webhook-event').select('post.added');
	cy.screenshot(`./screen_${ghostVersion}/add_hook_take_2`);
	cy.get("#webhook-targetUrl").type(targetUrlWebhook);
	cy.screenshot(`./screen_${ghostVersion}/add_hook_take_3`);
	cy.get('[class^="gh-btn gh-btn-black"][class$=ember-view]').click();
	cy.screenshot(`./screen_${ghostVersion}/add_hook_take_4`);
	expect(cy.contains(nameWebhook)).to.exist;
}

function edit_webhook(){
	cy.get('[class^="w6 h6 fill-midgrey pa1"]').click();
	cy.screenshot(`./screen_${ghostVersion}/edit_hook_take_1`);
	cy.wait(100);
	cy.get("#webhook-targetUrl").clear();
	cy.screenshot(`./screen_${ghostVersion}/edit_hook_take_2`);
	cy.get("#webhook-targetUrl").type(newTargetUrlWebhook);
	cy.get('[class^="gh-btn gh-btn-black"][class$=ember-view]').click();
	cy.screenshot(`./screen_${ghostVersion}/edit_hook_take_3`);
	expect(cy.contains(newTargetUrlWebhook)).to.exist;
}

function delete_integration() {
    cy.contains("Integrations").click();
	cy.contains(nameIntegration).click();
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
        cy.get('form').within(() => {
			clear_auth_form();
			auth(user,password);
		});
		create_integration();
		add_webhook();
		opened_edit_integration();
		edit_webhook();
		delete_integration();
    })
})