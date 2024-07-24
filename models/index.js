const { Sequelize } = require('sequelize');
const configuration = {
    database: "sequelize",
    username: "root",
    password: "root"
}
const sequelize = new Sequelize(configuration.database, configuration.username, configuration.password, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./users")(sequelize, Sequelize);
db.contact = require("./contact")(sequelize, Sequelize);
db.customers = require("./customers")(sequelize, Sequelize);
db.profile = require("./profiles")(sequelize, Sequelize);


//relationship between two tables
//1.) one to one if there is relationship one to many then we have to use hasMany instead of hasOne..
db.users.hasOne(db.contact);
db.contact.belongsTo(db.users);
//2.) many to many relationship

db.userContacts = require("./userContact")(sequelize, Sequelize, db.users, db.contact);
//if we want to make direct table without using custom schema
// db.users.belongsToMany(db.contact, { through: db.userContacts });
// db.contact.belongsToMany(db.users, { through: db.userContacts });

db.customers.belongsToMany(db.profile, { through: 'User_Profiles' });
db.profile.belongsToMany(db.customers, { through: 'User_Profiles' });
module.exports = db;
