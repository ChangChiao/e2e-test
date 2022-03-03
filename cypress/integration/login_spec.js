describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8090/");
    cy.get("#account").type("lucky5566");
    cy.get("input[name='password']").type("123456");
  
    cy.get("button[type='submit']").click();
  });

  it("input test", () => {
    cy.get("#password").should('have.value', "123456");
    cy.get(".title").contains('lucky5566')
  });
});
