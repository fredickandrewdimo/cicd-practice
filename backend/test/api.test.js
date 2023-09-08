const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const server = require("../server"); // Import the server instance

chai.use(chaiHttp);

describe("API Tests", () => {
  it('should return "Hello, MERN stack!" when GET /', (done) => {
    chai
      .request(server) // Use the server instance for testing
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.equal("Hello, MERN stack!");
        done();
      });
  });
});
