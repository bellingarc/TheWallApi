const request = require("supertest")
const { app } = require("./index")
const { getMessage } = require("./messages/messages")
const newMessage = {
    message: "abc123",
    userId: "abc456",
  }

const mockRequestTwo = {
  body: {
    message: "abc123",
  },
}
const mockResponse = {
  messages: [{ message: "aa", userId: "wfwf" }],
}

const mockdb = 
  {
    createdOn: "2021-4-28 10:19:41",
    createdBy: "X3cekHFKkcOZnXeJhz3wN5qAqVC2",
    message: "ebBB",
    id: "39USaZL5puyTVCKiOWrl",
 }
describe("GET / ", () => {
  test("It should respond with an array of messages", async () => {
    const response = await request(app).get("/messages/")
    expect(response.body).toContainEqual(mockdb)
    expect(response.statusCode).toBe(200)
  })
})
describe("Post / ", () => {
  test("It should respond status 200 if req has userId property", async () => {
    const response =  await request(app).post("/messages").send({
      message: "abc123",
      userId: "abc456"
    });
    expect(response.statusCode).toBe(200)
  })
  test("It should respond status 400 if req does not have userId property", async () => {
    const response =  await request(app).post("/messages").send({
      message: "abc123",
    });
    expect(response.statusCode).toBe(400)
  })
})
