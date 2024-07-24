
const express = require("express");
const route = express.Router();
const { addContact, getContacts, updateContact, deleteContact, permanentDeleteContact } = require("../controllers/crudContactsController");

route.get("/", getContacts);
route.post("/addcontact", addContact);
route.put("/updatecontact/:id", updateContact);
route.delete("/deletecontact/:id", deleteContact);
route.delete("/permanentdeletecontact/:id", permanentDeleteContact)

module.exports = route;