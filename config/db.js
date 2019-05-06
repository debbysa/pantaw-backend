const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "pantaw",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
)
module.exports = sequelize;