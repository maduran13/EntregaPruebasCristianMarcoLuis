class Tag {
	
	getCreateTagKey () {
		return cy.contains('Cypress Tag Name').first();
	}
	
	getUpdateTagKey () {
		return cy.contains('Cypress Tag Name for Update').first();
	}
	
	getDeleteTagKey() {
		return cy.contains('Cypress Tag Name for Delete').first();
	}

	getTagResource() {
		return "http://localhost:2368/ghost/#/tags";
	}
	
	getButtonNewTag() {
		return cy.get('[class^="ember-view gh-btn gh-btn-primary"]').first();
	}

	getInputTagName() {
		return cy.get("#tag-name");
	}

	getInputTagDescription(){
		return cy.get("#tag-description");
	}
	
	getSaveTagButton(){
		return cy.get('[class^="gh-btn gh-btn-primary"]');
	}
	
	getDeleteTagButton() {
		return cy.get('[class^="gh-btn gh-btn-red gh-btn-icon"]');
	}
	
	getConfirmationDeleteTagButton() {
		return cy.get('[class^="gh-btn gh-btn-red gh-btn-icon ember-view"]');
	}
	
	getInternalTagButton() {
		return cy.contains("Internal tags");
	}

}
export default Tag