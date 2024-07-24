module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            get() {
                const rawValue = this.getDataValue('firstName');
                return rawValue ? rawValue.toUpperCase() : null;
            },
        },
        lastName: {
            type: Sequelize.STRING,
            set(value) {
                this.setDataValue('lastName', value + ' Indian');
            },
        },
        fullName: {
            type: Sequelize.VIRTUAL,
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(value) {
                throw new Error('Do not try to set the `fullName` value!');
            },
        },
        mobileNo: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        about: {
            type: Sequelize.STRING,
        },
        isDeleted: {
            type: Sequelize.TINYINT,
            defaultValue: 0,
            allowNull: false
        }
    });
    return User;
};