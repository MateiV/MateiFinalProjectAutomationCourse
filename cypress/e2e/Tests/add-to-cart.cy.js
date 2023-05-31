/// <reference types = "cypress" />
import BrasAndTanksPage from "../../pages/BrasAndTanksPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";
import SalePage from "../../pages/SalePage";

describe("Add to cart a specific product test suite", () => {
  it("Add to cart a specfici product test", () => {
    SalePage.getSalesLink().click();
    SalePage.getBrasAndTanksLink().click({force: true});

    BrasAndTanksPage.getFirstProduct().click();
    cy.contains("The Breathe Easy Tank is so soft").should('be.visible');
    ProductDetailsPage.getProductSize().click();
    ProductDetailsPage.getProductColor().click();
    ProductDetailsPage.getProductQuantity().clear().type("5");
    ProductDetailsPage.getAddToCartBtn().click();
    cy.contains("You added Breathe-Easy Tank to your").should('be.visible');
  });
});