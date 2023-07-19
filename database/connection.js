const { Sequelize } = require('sequelize');

const db = new Sequelize('tst', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
});

db.authenticate()
.then(()=> {
    console.log('Connection has been established successfully.');
})
.catch(()=> {
    console.error('Unable to connect to the database:', error);
})

db.sync({ force: false, logging: false, alter: true})
.then(()=> {
    console.log('Database has been syncronized successfully.');
})
.catch(()=> {
    console.error('Unable to syncronized the database:', error);
})


module.exports = {db};