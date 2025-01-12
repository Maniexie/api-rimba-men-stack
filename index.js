const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const logRequest = require("./middleware/logRequest");
dotenv.config();

// connect Database
connectDB();

// middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(logRequest);

// Routes setup
routes.use(cors());
app.use("/api/v1/", routes);

// export `app` without calling `listen`
module.exports = app;

// run server only if not in test environment
if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
