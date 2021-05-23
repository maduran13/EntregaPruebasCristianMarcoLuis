class Page {
	
	getUpdatePageKey() {
		return cy.contains("Cypress Page Name").first();
	}
	
	getDeletePageKey() {
		return cy.contains("Cypress Page Name to Delete").first();
	}

	getPageResource() {
		return "http://localhost:2368/ghost/#/pages";
	}
	
	getInputPageName() {
		return cy.get('[class^="gh-editor-title ember-text-area gh-input ember-view"]').first();
	}
	
	getContentPage() {
		return cy.get('body').first();
	}
	
	getButtonNewPage() {
		return cy.contains("New page").first();
	}
	
	getSavePageButton(){
		return cy.get(".gh-btn").first();
	}
	
	
	getSetupPageButton() {
		return cy.get('[class^="post-settings"]').first();
	}
	
	getDeletePageButton() {
		return cy.get('[class^="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').first();
	}
	
	getConfirmationDeletePageButton() {
		return cy.get('[class^="gh-btn gh-btn-red gh-btn-icon ember-view"]').first();
	}

	

}
export default Page