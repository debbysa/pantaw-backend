const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const Workshop = require("./Workshop");
const Status = require("./Status");

const Detail_workshop = sequelize.define(
  "detail_workshop",
  {
    id_detail_workshop: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_peserta: {
      type: Sequelize.STRING
    },
    peserta: {
      type: Sequelize.VIRTUAL
    },
    id_workshop: {
      type: Sequelize.INTEGER
    },
    id_status: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false, tableName: "detail_workshop" }
);

// Detail_workshop.belongsTo(Workshop, { foreignKey: 'id_workshop' })
Detail_workshop.belongsTo(Status, { foreignKey: "id_status" });

module.exports = Detail_workshop;
