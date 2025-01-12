# My RESTful API

## About Project

This project is a simple RESTful API built with Node.js, Express.js, and MongoDB.
It includes basic CRUD operations and is equipped with automated tests using Jest and Supertest.

### Features available in this project:

| Feature        | Method | Users |
| -------------- | ------ | ----- |
| Get All Users  | GET    | Yes   |
| Get User By Id | GET    | Yes   |
| Create User    | POST   | Yes   |
| Update User    | PUT    | Yes   |
| Delete User    | DELETE | Yes   |

## Tech Stack

The following are some of the packages used in this project:

| Feature/Functionality | Package                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| Server-Side Framework | [Express](https://expressjscom/)                                                                     |
| JavaScript Runtime    | [Node.js](https://nodejs.org/)                                                                       |
| Package Management    | [npm](https://www.npmjs.com/)                                                                        |
| Environment Variables | [dotenv](https://www.npmjs.com/package/dotenv)                                                       |
| Data Validation       | [Joi](https://www.npmjs.com/package/joi), [joi-objectid](https://www.npmjs.com/package/joi-objectid) |
| Database ODM          | [Mongoose](https://mongoosejs.com/)                                                                  |
| Cross-Origin Resource | [CORS](https://www.npmjs.com/package/cors)                                                           |
| Unique ID Generator   | [uuid](https://www.npmjs.com/package/uuid)                                                           |
| Development Tool      | [Nodemon](https://www.npmjs.com/package/nodemon)                                                     |
| Request Parsing       | [Body-Parser](https://www.npmjs.com/package/body-parser)                                             |

# Getting Started

## How to Use

Clone the project

```bash
  git clone https://github.com/Maniexie/api-rimba-men-stack.git
```

Install required dependencies

```bash
  npm i
```

Copy `.env.example` file to `.env` file

```bash
  cp .env.example .env
```

Setting Environmental Variable on `.env` file

```bash
PORT=
MONGO_URI=
```

Run development server

```bash
npm run dev
```

Run Unit Test

```bash
npm run unit:test
```

Run the endpoints as in the postman documentation

```bash
https://documenter.getpostman.com/view/31838268/2sAYQWKYxf
```
