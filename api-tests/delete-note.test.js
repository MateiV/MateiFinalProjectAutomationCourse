const { spec, request } = require("pactum");

const baseURL = "https://practice.expandtesting.com/notes/api";

const getNotesSchema = require("../data/response/get-notes-response-schema.json");

describe("Delete specific Notes test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
    console.log("Starting the execution of the DELETE NOTE test suite");
  });

  it("delete specific test", async () => {
    await spec()
      .delete(`${baseURL}/notes/6474df0f1a350902114327bf`)
      .withHeaders(
        "x-auth-token",
        "6a63b75236d844eba2d7644a44ce339b36fc3f68353a4a7ab72dfd5a3a9f103e",
        "Content-Type",
        "application/json"
      )
      .expectStatus(200)
      .expectResponseTime(3000)
      .expectBodyContains("Note successfully deleted");
  });
});
