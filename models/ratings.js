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
            type: DataTypes.DECIMAL
        },
        salary_rating: {
            type: DataTypes.DECIMAL
        },
        benefits_rating: {
            type: DataTypes.DECIMAL
        }
    });

    return Ratings;
}