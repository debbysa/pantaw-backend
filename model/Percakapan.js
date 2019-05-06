const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Workshop = require('./Workshop')

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
        pesan: {
            type: Sequelize.TEXT
        },
        tanggal_waktu: {
            type: Sequelize.DATE
        }
    },
    { timestamps: false }
);

Percakapan.belongsTo(Workshop, { foreignKey: 'id_workshop' })
// Detail_workshop.belongsTo(Peserta, { foreignKey: 'id_peserta' })

module.exports = Percakapan