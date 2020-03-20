module.exports = function(sequalize,DataTypes){
    const Benefits = sequelize.define("Company", {
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