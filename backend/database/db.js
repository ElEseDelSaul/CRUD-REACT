import { Sequelize } from 'sequelize';

const db = new Sequelize('blogs', 'root','root258159',{
    host:'localhost',
    dialect:'mysql',
    define: {
        freezeTableName: true
    }
});

export default db;