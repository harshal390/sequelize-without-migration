const db = require("../models");
const User = db.users;
const { Op } = require('sequelize');

const queriesController = async (req, res) => {
    try {
        // const users = await User.findAll({
        //     attributes: ['id', 'firstName'],
        // });
        const users = await User.findAll({
            where: {
                [Op.or]: [{ id: 1 }, { id: 7 }],
            },
        });
        const { count, rows } = await User.findAndCountAll({
            where: {
              firstName: {
                [Op.like]: 'harsh%',
              },
            }
          });
         
        res.status(200).json({ users,count,rows });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = { queriesController };