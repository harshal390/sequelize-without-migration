const db = require("../models");
const User = db.users;

const addUser = async (req, res) => {
    try {
        // const user = User.build({ firstName: "Harshal", lastName: "Kahar" });
        // console.log(user instanceof User); // true
        // console.log(user.firstName); // "user"
        // await user.save();
        const user = await User.create({ firstName: "Harshal", lastName: "Kahar" })
        console.log('user was saved to the database!');
        // You can update several fields at once with the set method:
        user.set({
            ...user, firstName: 'updated Harshal without lastname'
        });
        await user.save();
        console.log('user was updated to the database!');
        await user.destroy();
        console.log("user deleted successfully");
        res.status(200).json(user.toJSON());
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

module.exports = { addUser };