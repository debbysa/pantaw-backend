const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Pemateri = require('./Pemateri')

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
    { timestamps: false }
);

Workshop.belongsTo(Pemateri, { foreignKey: 'id_pemateri' })

module.exports = Workshop