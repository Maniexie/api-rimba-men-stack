const express = require("express");

const user_controller = require("../controllers/user_controller");
const validateUser = require("../middleware/validateUser");
const { route } = require(".");

const router = express.Router();

router.get("/users", user_controller.getUsers);
router.get("/users/:id", user_controller.getUsersById);
router.post("/users", validateUser, user_controller.createUser);
router.put("/users/:id", user_controller.updateUser);
router.delete("/users/:id", user_controller.deleteUser);
module.exports = router;
