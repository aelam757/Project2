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
            type: DataTypes.VARCHAR 
        },
        leave: {
            type: DataTypes.VARCHAR
        },
        health_well: {
            type: DataTypes.VARCHAR
        },
        retirement: {
            type: DataTypes.VARCHAR
        }
    });

    return Benefits;
}