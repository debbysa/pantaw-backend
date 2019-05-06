const Sequelize = require('sequelize') //import sequelize
const sequelize = require('../config/db') //import config/db.js

const Status = sequelize.define(
    "status",
    {
        id_status: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: Sequelize.STRING(100)
        },
        keterangan: {
            type: Sequelize.STRING(100)
        },
        warna: {
            type: Sequelize.STRING(100)
        }
    },
    { timestamps: false }
);
module.exports = Pemateri