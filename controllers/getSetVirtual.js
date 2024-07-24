const db = require("../models");
const User = db.users;

const getSetVirtual = async (req, res) => {
    try {
        const data = await User.findAll()
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = { getSetVirtual };