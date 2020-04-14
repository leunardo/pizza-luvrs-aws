const Sequelize = require('sequelize').Sequelize

const database = 'pizza_luvrs'
const host = ''
const username = 'postgres'
const password = ''
const localUri = `postgres://${username}:${password}@${host}:5432/${database}`

console.log('Booting up postgres using: ', process.env.RDS_CONNECTION_URL)
const pgClient = new Sequelize(process.env.RDS_CONNECTION_URL || localUri)

const Pizza = pgClient.define('pizza', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    toppings: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    created: {
        type: Sequelize.BIGINT
    },
})

Pizza.sync().then(() => console.log('Postgres connection ready'))

module.exports = Pizza