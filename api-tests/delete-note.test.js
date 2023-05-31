const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseURL = "https://practice.expandtesting.com/notes/api";

const newPassword = faker.internet.password();

const newUsername = faker.internet.userName();

const noteTitle = faker.animal.bear();
const noteDescription = faker.animal.bird();

let authToken = " ";

let createdNote = " ";

const newEmail = faker.internet.email();

describe("Delete Note Endpoint Scenarios", () => {
  before(async () => {
    request.setDefaultTimeout(5000);
    console.log(
      "Starting the execution of the DELETE Notes endpoint test suite"
    );

    console.log("Registering a new user");
    const requestBody = {
      name: newUsername,
      email: newEmail,
      password: newPassword,
    };

    await spec()
      .post(`${baseURL}/users/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(201)
      .expectResponseTime(3000)
      .expectBodyContains("User account created");

    console.log("Logging in with the new user");

    loginRequestBody = {
      email: `${newEmail}`,
      password: `${newPassword}`,
    };

    let login = await spec()
      .post(`${baseURL}/users/login`)
      .withHeaders("Content-Type", "application/json")
      .withBody(loginRequestBody)
      .expectStatus(200)
      .expectBodyContains("Login successful");

    authToken = login.body.data.token;

    console.log("Create a new work note");

    newNoteRequestBody = {
      title: noteTitle,
      description: noteDescription,
      category: "Work",
    };

    let newNote = await spec()
      .post(`${baseURL}/notes`)
      .withHeaders({
        "x-auth-token": `${authToken}`,
        "Content-Type": "application/json",
      })
      .withBody(newNoteRequestBody)
      .expectStatus(200)
      .expectBodyContains("Note successfully created");

    createdNote = newNote.body.data.id;
  });

  it("Delete the previosuly created note test case", async () => {
    requestBody = {
      title: noteTitle,
      description: noteDescription,
      category: "Work",
    };

    await spec()
      .delete(`${baseURL}/notes/${createdNote}`)
      .withHeaders({
        "x-auth-token": `${authToken}`,
        "Content-Type": "application/json",
      })
      .expectBodyContains("Note successfully deleted")
      .expectStatus(200);
  });
});
