const request = require("supertest");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("../index");
const User = require("../models/User");
const { faker } = require("@faker-js/faker");

dotenv.config();

beforeAll(async () => {
  // connect to the test database
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // clean up the database and close the connection
  // await User.deleteMany(); // clean all data test
  await mongoose.connection.close();
});

describe("GET /users", () => {
  // seed database with mock data before running tests
  beforeEach(async () => {
    await User.create([
      {
        name: faker.internet.username(),
        email: faker.internet.email(),
        age: 25,
      },
    ]);
  });

  // clean up database after each test
  afterEach(async () => {
    await User.deleteMany();
  });

  it("should return a list of users", async () => {
    const response = await request(app).get("/api/v1/users");
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeInstanceOf(Array);
    expect(response.body.data.length).toBe(response.body.data.length);
    expect(response.body.data[0]).toHaveProperty("name", "John Doe", 20);
  });

  it("should return an empty array if no users exist", async () => {
    await User.deleteMany(); // Ensure database is empty
    const response = await request(app).get("/api/v1/users");
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual([]);
  });
});

describe("GET /users/:id", () => {
  it("should return a user by ID", async () => {
    const user = await User.create({
      name: "John Lenon",
      email: "jhonBengkels@gmail.com",
      age: 25,
    });
    console.log("GET /users/:id" + user);
    const response = await request(app).get(`/api/v1/users/${user._id}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty("name", "John Doe", 20);
  });
});

describe("POST /users/:id", () => {
  it("should return a user Create", async () => {
    const user = await User.create({
      name: faker.internet.username(),
      email: faker.internet.email(),
      age: 25,
    });
    console.log("POST /users/:id" + user);
    const response = await request(app).get(`/api/v1/users/${user._id}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty("name", "John Doe", 20);
  });
});

describe("PUT /users/:id", () => {
  it("Should update a user by ID", async () => {
    const user = await User.create({
      name: faker.internet.username(),
      email: faker.internet.email(),
      age: 25,
    });
    console.log("user put", user);
    const response = await request(app).put(`/api/v1/users/${user._id}`).send({
      name: user.name,
      email: "K9i6o@example.com",
      age: 90,
    });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty("name", "John Doe", 20);
  });
});

describe("DELETE /users/:id", () => {
  it("Should delete a user by ID", async () => {
    const user = await User.create({
      name: "dinda",
      email: "dindasayangdia@gmail.com",
      age: 25,
    });
    console.log("user delete", user);
    const response = await request(app).delete(`/api/v1/users/${user._id}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveProperty("name", "John Doe", 20);
  });
});
