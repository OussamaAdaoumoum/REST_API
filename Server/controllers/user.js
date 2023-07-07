const User = require("../models/user");

const createUser = async (req, res) => {
  console.log("hahia request", req.body);
  res.send(req.body);

  const user = new User({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    age: req.body.age,
  });

  user.save();
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the request parameters
    const user = await User.findById(userId); // Find the user by ID

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the request parameters
    const updates = req.body; // Get the updates from the request body

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the request parameters

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
