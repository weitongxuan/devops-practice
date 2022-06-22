const axios = require("axios");

describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await axios.get("http://localhost:8000/simon");
    expect(res.data).toEqual("hello simon");
  });
});

describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    const res = await axios.get("http://localhost:8000/john");
    expect(res.data).toEqual("hello john");
  });
});

describe("Post Endpoints", () => {
  it("should create a new post", async () => {
    try {
      await axios.get("http://localhost:8000/");
    } catch (error) {
      expect(error.response.status).toEqual(404);
    }
  });
});
