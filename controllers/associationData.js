const db = require('../models');
const User = db.users;
const Contact = db.contact;

const associationData = async (req, res) => {
    try {
        const data = await User.findAll({
            include: {
                model: Contact
            }
        })
        res.status(200).json({data});
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}
module.exports = { associationData };