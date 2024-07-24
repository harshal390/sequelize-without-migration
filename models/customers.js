module.exports = (sequelize, Sequelize) => {
  const Customers = sequelize.define(
    "customers",
    {
      username: Sequelize.STRING,
      points: Sequelize.INTEGER,
    },
    { timestamps: false }
  );
  return Customers;
};
