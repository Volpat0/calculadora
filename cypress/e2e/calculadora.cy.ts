/// <reference types="cypress" />

describe('template spec', () => {
  it('somar 1+1', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("=").click();
    cy.get(".display-container").should("have.text","2");
  })
  it('subtrair 2-1', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get("button").contains("2").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("=").click();
    cy.get(".display-container").should("have.text","1");
  })
  it('multiplicar 3x3', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get("button").contains("3").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("=").click();
    cy.get(".display-container").should("have.text","9");
  })
  it('dividir 10/2', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get(".display-container").should("have.text","5");
  })
  it('somar 3+3 e subtrair 2', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get("button").contains("3").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get(".display-container").should("have.text","4");
  })
})