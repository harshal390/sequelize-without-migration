const db = require("../models");
const User = db.users;

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ message: "Welcome to CRUD Operations..!", users });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const addUser = async (req, res) => {
    try {
        const user = await User.create({ ...req.body })
        console.log('user was saved to the database!');
        res.status(200).json({ message: `${req.body.firstName} added successfully..!`, user });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(+req.params.id);
        if (user === null) {
            res.status(200).json({ message: "User doesn't exists..!" })
        }
        else {
            user.set({ ...user, ...req.body });
            await user.save();
            res.status(200).json({ message: `${user.firstName} updated Successfully...!`, user });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(+req.params.id);
        if (user === null) {
            res.status(200).json({ message: "User doesn't exists..!" })
        }
        else {
            user.set({ ...user, isDeleted: 1 });
            await user.save();
            res.status(200).json({ message: `${user.firstName} deleted Successfully...!`, user });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const permanentDeleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(+req.params.id);
        if (user === null) {
            res.status(200).json({ message: "User doesn't exists..!" })
        } else {
            if (user.isDeleted === 1) {
                await user.destroy();
                res.status(200).json({ message: "permanent Delete successfully..!" })
            }
            res.status(200).json({ message: "User can't deleted ..!" })
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = { addUser, getUsers, updateUser, deleteUser, permanentDeleteUser };