const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const Admin = sequelize.define(
    "admin",
    {
        id_admin: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING(100)
        },
        password: {
            type: Sequelize.STRING(100)
        }
    },
    { timestamps: false, tableName: "admin" }
)
module.exports = Admin