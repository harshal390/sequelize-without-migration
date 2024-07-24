module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        permanentAddress: {
            type: Sequelize.STRING,
            allowNull: false
        },
        currentAddress: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER
        }
    });
    return Contact;
};