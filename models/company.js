// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Company = sequelize.define("Company", {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200]
      }
    },
    indeed_rating: {
      type: DataTypes.DECIMAL
    },
    glassdoor_rating: {
      type: DataTypes.DECIMAL
    },
    diversity_rating: {
      type: DataTypes.DECIMAL
    },
    salary: {
        type: DataTypes.INTEGER
      }
  });

  return Company;

};
>>>>>>> 59b54b865233c824ff485ae91a896d0387389812
