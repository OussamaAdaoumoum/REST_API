const router = require("express").Router();

const { createUser, getUsers, getUser, updateUser, deleteUser } = require("./controllers/user");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});



router.post("/users", createUser);

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
