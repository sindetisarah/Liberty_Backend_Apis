var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
    const fleet = sequelize.define('fleet', {
              
        name: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        routeNumber: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        region: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        primaryTerminus: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        secondaryTerminus: {
            type: DataTypes.TEXT,
            allowNull: true,
            unique: false,
        },
        maximumFare: {
            type: DataTypes.autoIncrement(0),
            allowNull: false,
            unique: false,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
        underscored: false,
        freezeTableName: true,
        underscoredAll: false,
        tableName: 'fleet',
        hooks: {
        }
    });

    return referrals;
}