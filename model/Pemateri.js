const Sequelize = require('sequelize') //import sequelize
const sequelize = require('../config/db') //import config/db.js

const Pemateri = sequelize.define(
    "pemateri",
    {
        id_pemateri: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: Sequelize.STRING(100)
        },
        username: {
            type: Sequelize.STRING(100)
        },
        password: {
            type: Sequelize.STRING(50)
        }
    },
    { timestamps: false }
);
module.exports = Pemateri