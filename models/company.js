// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Company = sequelize.define("Company", {
    company_name: {
      type: DataTypes.STRING,
    },
    Irating: {
      type: DataTypes.DECIMAL
    },
    Grating: {
      type: DataTypes.DECIMAL
    },
    Drating: {
      type: DataTypes.DECIMAL
    },
    position : {
      type: DataTypes.TEXT
    },
    salary: {
      type: DataTypes.TEXT
    },
  });

  return Company;

};
