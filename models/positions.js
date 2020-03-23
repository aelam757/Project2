module.exports = function(sequelize, DataTypes){
    const Position = sequelize.define("Position", {
        company_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,200]
            }
        },
        position_title : {
            type: DataTypes.TEXT
        },
        salary: {
            type: DataTypes.INTEGER
        }
    });

    return Position;
}