const { spec, request } = require("pactum");

const baseURL = "https://practice.expandtesting.com/notes/api";

const getNotesSchema = require("../data/response/get-notes-response-schema.json");

describe("Get Notes test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the GET ALL NOTE test suite");
  });

  it("Get all notes test", async () => {
    await spec()
      .get(`${baseURL}/notes`)
      .withHeaders(
        "x-auth-token",
        "6a63b75236d844eba2d7644a44ce339b36fc3f68353a4a7ab72dfd5a3a9f103e",
        "Content-Type",
        "application/json"
      )
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Notes successfully retrieved")
      .expectJsonSchema(getNotesSchema);
  });
});
