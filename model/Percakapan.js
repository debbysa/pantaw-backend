const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const Pemateri = require("./Pemateri");

const Percakapan = sequelize.define(
  "percakapan",
  {
    id_percakapan: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_workshop: {
      type: Sequelize.INTEGER
    },
    id_pengirim: {
      type: Sequelize.INTEGER
    },
    peserta: {
      type: Sequelize.VIRTUAL
    },
    pesan: {
      type: Sequelize.TEXT
    },
    tanggal_waktu: {
      type: Sequelize.DATE
    }
  },
  { timestamps: false, tableName: "percakapan" }
);

// Percakapan.belongsTo(Workshop, { foreignKey: 'id_workshop' })
// Detail_workshop.belongsTo(Peserta, { foreignKey: 'id_peserta' })

Percakapan.belongsTo(Pemateri, { foreignKey: "id_pengirim" });

module.exports = Percakapan;
