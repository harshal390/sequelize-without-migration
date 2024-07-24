module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define('profile',
        {
            name: Sequelize.STRING,
        },
        { timestamps: false },
    );
    return Profile;
}