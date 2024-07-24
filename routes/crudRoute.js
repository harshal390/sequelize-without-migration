const express = require("express");
const route = express.Router();
const { addUser, getUsers, updateUser, deleteUser,permanentDeleteUser } = require("../controllers/crudController");

route.get("/", getUsers);
route.post("/adduser", addUser);
route.put("/updateuser/:id", updateUser);
route.delete("/deleteuser/:id", deleteUser);
route.delete("/permanentdeleteuser/:id", permanentDeleteUser)

module.exports = route;