const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const Pemateri = require("./Pemateri");
const Percakapan = require("./Percakapan");
const DetailWorkshop = require("./Detail_workshop");

const Workshop = sequelize.define(
  "workshop",
  {
    id_workshop: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    judul: {
      type: Sequelize.STRING(100)
    },
    deskripsi: {
      type: Sequelize.STRING(100)
    },
    id_pemateri: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false, tableName: "workshop" }
);

Workshop.belongsTo(Pemateri, { foreignKey: "id_pemateri" });
Workshop.hasMany(Percakapan, { foreignKey: "id_workshop" });
Workshop.hasMany(DetailWorkshop, { foreignKey: "id_workshop" });

module.exports = Workshop;
