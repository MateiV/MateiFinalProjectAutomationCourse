const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseURL = "https://practice.expandtesting.com/notes/api";

describe("Create new notes test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the CREATE NEW NOTE test suite");
  });

  it("create a new work note test", async () => {
    const requestBody = {
      title: faker.animal.bear(),
      description: faker.animal.bird(),
      category: "Work",
    };
    await spec()
      .post(`${baseURL}/notes`)
      .withHeaders(
        "x-auth-token",
        "6a63b75236d844eba2d7644a44ce339b36fc3f68353a4a7ab72dfd5a3a9f103e",
        "Content-Type",
        "application/json"
      )
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Note successfully created");
  });
});
