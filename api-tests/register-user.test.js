const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseURL = "https://practice.expandtesting.com/notes/api";

describe("Register a new user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the REGISTER test suite");
  });

  it("create new user test", async () => {
    const requestBody = {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    await spec()
      .post(`${baseURL}/users/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(201)
      .expectResponseTime(3000)
      .expectBodyContains("User account created");
  });

  it("user registration error test", async () => {
    const requestBody = {
      email: "tester.test22@test.com",
      password: "testing123451!",
    };
    await spec()
      .post(`${baseURL}/users/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(400)
      .expectResponseTime(3000)
      .expectBodyContains("User name must be between 4 and 30 characters");
  });
});
