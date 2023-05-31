/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";
import SearchPage from "../../pages/SearchPage";

describe("Search for product test suite", () => {
  it("Search for an existing product test", () => {
    SearchPage.getSearchBar().type("jacket{enter}")
    cy.contains("Search results for: 'jacket'")
      .should("be.visible");
  });

  it("Search for a non-existing product test",()=>{
    SearchPage.getSearchBar().type("salut{enter}")
    cy.contains("Your search returned no results.")
      .should("be.visible");
  });
});