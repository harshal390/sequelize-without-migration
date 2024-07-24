module.exports = (sequelize, Sequelize, Users, Contacts) => {
    const userContacts = sequelize.define('userContacts', {
        UserId: {
            type: Sequelize.INTEGER,
            references: {
                model: Users,
                key: 'id',
            },
        },
        ContactId: {
            type: Sequelize.INTEGER,
            references: {
                model: Contacts,
                key: 'id',
            },
        }
    }, { timestamps: false })
    return userContacts;
};