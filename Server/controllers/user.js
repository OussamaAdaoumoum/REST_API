const User = require("../models/user");

const getUsers = (req, res) => {
  res.send("I am the get user route");
};

const createUser = (req, res) => {
  console.log("hahia request", req.body);
  res.send(req.body);

  const user = new User({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    age: req.body.age,
  });

  user.save();
};

module.exports = {
  getUsers,
  createUser,
};
