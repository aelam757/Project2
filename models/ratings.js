module.exports = function(sequelize, DataTypes) {
    const Ratings = sequelize.define("Ratings", {
        userID: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [1,200]
            }
        },
        user_rating: {
            types: DataTypes.DECIMAL
        },
        salary_rating: {
            types: DataTypes.DECIMAL
        },
        benefits_rating: {
            types: DataTypes.DECIMAL
        }
    });

    return Ratings;
}