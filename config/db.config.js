const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    },
    
});

const db = {};


db.category = require('../model/category.model')(sequelize,Sequelize);
db.city = require('../model/city.model')(sequelize,Sequelize);
db.post = require('../model/post.model')(sequelize,Sequelize);
db.user = require('../model/user.model')(sequelize,Sequelize);

db.category.belongsToMany(db.post, { through: 'post_category', foreignKey: 'category_id', otherKey: 'post_id'});
db.post.belongsToMany(db.category, { through: 'post_category', foreignKey: 'post_id', otherKey: 'category_id'});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;