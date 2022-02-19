//Importar DB
import db from '../database/db.js';
import { DataTypes, Sequelize } from 'sequelize';

const BlogModel = db.define('blog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: DataTypes.TEXT
    },
    content: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'blog'
}
)

export default BlogModel;