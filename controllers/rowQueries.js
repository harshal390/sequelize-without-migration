const db = require("../models");
const sequelize = db.sequelize;

const rowQueries = async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query('select * from users');
        res.status(200).json({ results });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = { rowQueries };