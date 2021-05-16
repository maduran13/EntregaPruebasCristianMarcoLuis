function auth(user, password) {
    cy.get("#ember8").type(user);
    cy.get("#ember10").type(password);
    cy.get("#ember12").click();
    cy.wait(500);
}

function clear_auth_form() {
    cy.get("#ember8").clear();
    cy.get("#ember10").clear();
}

function validate_path(path) {
    cy.url().should("include", path);
}

function go_members_view() {
    cy.contains("Members").click();
    cy.url().should("include", "/members");
}

function go_posts_view() {
    cy.contains("Posts").click();
    cy.url().should("include", "/posts");
}

function makeid(length) {
    var result = [];
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(
            characters.charAt(Math.floor(Math.random() * charactersLength))
        );
    }
    return result.join("");
}

function create_post() {
    cy.contains("New post").click();
    let body = cy.get("body");
    body.find("textarea").first().type("PostPrueba", { force: true });
    cy.get(".gh-btn").first().click();
}

function create_member() {
    cy.contains("New member").click();
    let body = cy.get("body");
    body.find("#member-name").type("Prueba", { force: true });

    cy.contains("Save").click();
    body = cy.get("body");
    body.find("#member-name").type("Prueba", { force: true });
    body = cy.get("body");
    let randomMail = makeid(7);
    body.find("#member-email").type(`GhostMiembro@prueba.com`, { force: true });
    cy.contains("Retry").click();

    //cy.contains("Members").click({ force: true });
}

function modify_member() {
    cy.contains("PruebaPrueba").click({ force: true });
    let body = cy.get("body");
    body.find("#member-name").type("PruebaMod", { force: true });

    cy.contains("Save").click();
}

function modify_post() {
    let body = cy.get("body");
    body.find("textarea").first().type("Post Modificado");
    cy.contains("Preview").click();
    cy.wait(500);
}

function select_member() {
    cy.contains("Prueba").click({ force: true });
}

function select_post() {
    cy.contains("Prueba").click({ force: true });
}

describe("Crear Miembro", () => {
    it("Crear Miembro", () => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        //bad password
        auth("author", "1234");
        //clear form
        clear_auth_form();
        //good password
        auth("ghost-author@example.com", "Pruebas10automatizadas");

        //validate redirect
        validate_path("/dashboard");

        //go view
        go_members_view();

        //create member
        create_member();
        cy.wait(500);
        //validate path
        //validate_path("/members");
    });
});

describe("Validar Creación Miembro", () => {
    it("Validar Creación Miembro", () => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        //bad password
        auth("author", "1234");
        //clear form
        clear_auth_form();
        //good password
        auth("ghost-author@example.com", "Pruebas10automatizadas");

        //validate redirect
        validate_path("/dashboard");

        //go view
        go_members_view();
        cy.contains("Prueba");
        cy.contains("GhostMiembro@prueba.com");
        cy.wait(500);

        //validate path
        //validate_path("/members");
    });
});

describe("Modificar Miembro", () => {
    it("Modificar Miembro", () => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        //bad password
        auth("author", "1234");
        //clear form
        clear_auth_form();
        //good password
        auth("ghost-author@example.com", "Pruebas10automatizadas");

        //validate redirect
        validate_path("/dashboard");

        //go view
        go_members_view();

        //select random member
        modify_member();
    });
});

describe("Validar Modificación Miembro", () => {
    it("Validar Modificación Miembro", () => {
        cy.visit("http://localhost:2368/ghost/#/members");

        //validate redirect
        validate_path("/members");

        //go view

        cy.contains("Prueba");
    });
});

describe("Eliminar Miembro", () => {
    it("Escenario completo", () => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        //bad password
        auth("author", "1234");
        //clear form
        clear_auth_form();
        //good password
        auth("ghost-author@example.com", "Pruebas10automatizadas");

        //validate redirect
        validate_path("/dashboard");

        //go view
        go_members_view();

        //Select member
        select_member();
        cy.contains("Delete").click({ force: true });
        cy.wait(500);
        let body = cy.get("body");
        body
            .find(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
            .click({ force: true });
        cy.contains("Members").click({ force: true });
        cy.wait(500);
    });
});

describe("Crear Post", () => {
    it("Crear Post", () => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        //bad password
        auth("author", "1234");
        //clear form
        clear_auth_form();
        //good password
        auth("ghost-author@example.com", "Pruebas10automatizadas");

        //validate redirect
        validate_path("/dashboard");

        //go view
        go_posts_view();

        //create post
        create_post();
    });
});

describe("Validar Post", () => {
    it("Validar Post", () => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        //bad password
        auth("author", "1234");
        //clear form
        clear_auth_form();
        //good password
        auth("ghost-author@example.com", "Pruebas10automatizadas");

        //validate redirect
        validate_path("/dashboard");

        //go view
        go_posts_view();
    });
});

describe("Modificar Post", () => {
    it("Escenario completo", () => {
        cy.visit("http://localhost:2368/ghost/#/signin");
        //bad password
        auth("author", "1234");
        //clear form
        clear_auth_form();
        //good password
        auth("ghost-author@example.com", "Pruebas10automatizadas");

        //validate redirect
        validate_path("/dashboard");

        //go view
        go_posts_view();

        // select post
        select_post();

        //modify post
        modify_post();
    });
});