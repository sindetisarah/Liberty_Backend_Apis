var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
    const sacco = sequelize.define('sacco', {
        Permissions: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
        },
        senderId: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        contactNumber: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        contactPerson: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        tagline: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
        },
        code: {
            type: DataTypes.TEXT,
            allowNull: true,
            unique: false,
        },
       
        region: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        primaryTerminus: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        secondaryTerminus: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        maximumFare: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        platformFare: {
            type: DataTypes.STRING(255),
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
        tableName: 'saccos',
        hooks: {
        }
    });

    return referrals;
}