module.exports = function(sequelize, DataTypes) {
    const Reviews = sequelize.define("Reviews", {
        company_name: {
            type: DataTypes.STRING,  
        },
        title: {
            type: DataTypes.STRING,
        },
        user_rating: {
            type: DataTypes.DECIMAL
        },
        user_review: {
            type: DataTypes.TEXT
        }
    });

    return Reviews;
}