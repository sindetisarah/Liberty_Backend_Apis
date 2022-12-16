var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
    const pin = sequelize.define('pin', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
        },
        pinId: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        phoneNumber: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        nationalID: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        code: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: false,
        },
        dv_count: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: false,
            defaultValue: "0"
        },
        expiry: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        status: {
            type: DataTypes.ENUM('0', '1', '2'),
            allowNull: false,
            unique: false,
            defaultValue: "0",
            comment: '0 - unverified, 1- verified, 2 - expired'
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
        tableName: 'pin',
        hooks: {
        }
    });

    return pin;
}