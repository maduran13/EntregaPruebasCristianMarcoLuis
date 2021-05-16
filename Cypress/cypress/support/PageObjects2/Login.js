class Login {
	
	getLoginUrl() {
		return "http://localhost:2368/ghost/#/signin";
	}

	getUserName() {
		return "ghost-author@example.com";
	}
	
	getPassword() {
		return "Pruebas10automatizadas";
	}

	getInputUserName() {
		return cy.get("#ember8");
	}

	getInputPassword(){
		return cy.get("#ember10");
	}
	
	getLoginButton(){
		return cy.get("#ember12");
	}

}
export default Login