class Post {
	
	getDeletePostKey() {
		return cy.contains("Cypress Post to Delete").first();
	}
	
	getUpdateSchedulePostKey() {
		return cy.contains("Cypress Post to Schedule").first();
	}

	getPostResource() {
		return "http://localhost:2368/ghost/#/posts";
	}
	
	getButtonNewPost() {
		return cy.contains("New post").first();
	}
	
	getInputPostName() {
		return cy.get('[class^="gh-editor-title ember-text-area gh-input ember-view"]').first();
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
	
		
	getPublishButton() {
		return cy.contains('Publish').first();
	}
	
	getScheduleCheck() {
		return cy.contains('Schedule it for later').first();
	}
	
	getScheduleButton() {
		return cy.get('[class^="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').first();
	}
	
	getScheduledButton() {
		return cy.contains("Scheduled").first();
	}
	
	getInputDateSchedule(){
		return cy.get("input").first();
	}
	
	getRescheduleButton() {
		return cy.contains("Reschedule").first();
	}

}
export default Post