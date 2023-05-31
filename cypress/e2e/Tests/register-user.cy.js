/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";
import RegisterPage from "../../pages/RegisterPage";

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe("Register user test suite", () => {
  it("Register with valid creds", () => {
    cy.get("a[href='https://magento.softwaretestingboard.com/customer/account/create/']").contains("Create an Account").click();
    RegisterPage.getFirstName().type(randomFirstName);
    RegisterPage.getLastName().type(randomLastName);
    RegisterPage.getEmail().type(randomEmail, { delay: 0 });
    RegisterPage.getPassword().type(randomPassword, { delay: 0 });
    RegisterPage.getPassConfirmation().type(randomPassword);
    RegisterPage.getCreateAccountBtn().contains("Create an Account").click();
    cy.get("div.message-success.success.message")
      .contains("Thank you for registering with Main Website Store.")
      .should("be.visible");
  });
});