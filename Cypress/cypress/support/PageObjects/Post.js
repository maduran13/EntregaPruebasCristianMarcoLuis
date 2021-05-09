class Post {
	
	getDeletePostKey() {
		return cy.contains("Cypress Post to Delete").first();
	}

	getPostResource() {
		return "http://localhost:2368/ghost/#/posts";
	}
	
	getButtonNewPost() {
		return cy.contains("New post").first();
	}

	getSavePostButton(){
		return cy.get(".gh-btn").first();
	}
	
	getSetupPostButton() {
		return cy.get('[class^="gh-btn gh-btn-editor gh-btn-icon only-has-icon gh-actions-cog ml3"]').first();
	}
	
	getDeletePostButton() {
		return cy.get('[class^="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').first();
	}
	
	getConfirmationDeletePostButton() {
		return cy.get('[class^="gh-btn gh-btn-red gh-btn-icon ember-view"]').first();
	}
	
	

}
export default Post