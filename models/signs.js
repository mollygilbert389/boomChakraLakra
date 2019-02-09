module.exports = function (sequelize, DataTypes) {
    var Signs = sequelize.define("Signs", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        dayOfBirth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
        },
        monthOfBirth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
        },
        yearOfBirth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
                    }
        }
    }
}        
});

    return Signs;
};
