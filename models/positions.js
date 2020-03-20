module.exports = function(sequelize, DataTypes){
    const Position = sequelize.define("Company", {
        company_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,200]
            }
        },
        position_title : {
            types: DataTypes.VARCHAR
        },
        salary: {
            types: DataTypes.INTEGER
        }
    });

    return Position;
}