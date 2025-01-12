const User = require("../models/User");

getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success | OK",
      message: "List Of Users",
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
      success: false,
      data: null,
    });
  }
};

const getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findById(id);
    if (!users) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    res.status(200).json({
      status: "success | OK",
      message: "List Of User By Id",
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      params: id,
    });
  }
};

const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      age,
    });
    res.status(201).json({
      status: "success | OK",
      message: "User Created",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success | OK",
      message: "User Updated",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found for Delete",
      });
    }
    res.status(200).json({
      status: "success | OK",
      message: "User Deleted",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getUsers, getUsersById, createUser, updateUser, deleteUser };
