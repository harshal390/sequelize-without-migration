const db = require("../models");
const Contact = db.contact;

const getContacts = async (req, res) => {
    try {
        const contact = await Contact.findAll();
        res.status(200).json({ message: "Welcome to CRUD Operations..!", contact });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const addContact = async (req, res) => {
    try {
        const contact = await Contact.create({ ...req.body })
        console.log('Contact was saved to the database!');
        res.status(200).json({ message: `contact added successfully..!`, contact });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(+req.params.id);
        if (contact === null) {
            res.status(200).json({ message: "Contact doesn't exists..!" })
        }
        else {
            contact.set({ ...contact, ...req.body });
            await contact.save();
            res.status(200).json({ message: `contact updated Successfully...!`, contact });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(+req.params.id);
        if (contact === null) {
            res.status(200).json({ message: "Contact doesn't exists..!" })
        }
        else {
            contact.set({ ...Contact, isDeleted: 1 });
            await contact.save();
            res.status(200).json({ message: `contact deleted Successfully...!`, contact });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const permanentDeleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(+req.params.id);
        if (contact === null) {
            res.status(200).json({ message: "Contact doesn't exists..!" })
        } else {
            if (contact.isDeleted === 1) {
                await contact.destroy();
                res.status(200).json({ message: "permanent Delete successfully..!" })
            }
            res.status(200).json({ message: "contact can't deleted ..!" })
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = { addContact, getContacts, updateContact, deleteContact, permanentDeleteContact };