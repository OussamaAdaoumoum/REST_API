const router = require("express").Router();

const { getUsers, createUser } = require("./controllers/user");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/users", getUsers);

router.post("/users", createUser);

module.exports = router;
