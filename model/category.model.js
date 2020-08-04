module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define('category', {
        name: {
            type: Sequelize.STRING
        },
    });

    return category;
}