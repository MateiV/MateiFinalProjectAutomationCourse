const { spec, request } = require("pactum");

const baseURL = "https://practice.expandtesting.com/notes/api";

describe("Login an existing user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the LOGIN test suite");
  });

  it("login an existing user test", async () => {
    const requestBody = {
      name: "JohnTest",
      email: "teste1r.test22@test.com",
      password: "testing123451!",
    };
    await spec()
      .post(`${baseURL}/users/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Login successful");
  });
});
