const request = require("supertest");
const expect = require("chai").expect;
const app = require("../server/app");

describe("Integration test", function () {
  it("should return ok", async function () {
    const response = await request(app).get("/healthcheck");
    expect(response.text).equal("ok");
  });
});
