module.exports = function(sequelize, DataTypes) {
    const Benefits = sequelize.define("Benefits", {
        company_name:{
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [1,200]
            }
        },
        insurance: {
            type: DataTypes.TEXT 
        },
        leave: {
            type: DataTypes.TEXT
        },
        health_well: {
            type: DataTypes.TEXT
        },
        retirement: {
            type: DataTypes.TEXT
        }
    });

    return Benefits;
}