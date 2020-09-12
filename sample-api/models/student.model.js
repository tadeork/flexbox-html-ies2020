
module.exports = (sequelize, Sequelize) => {
  const Subject = sequelize.define('studen', {
    name: {
      type: Sequelize.STRING
    },
    surename: {
      type: Sequelize.STRING
    },
    birthdate: {
      type: Sequelize.DATE
    }
  })

  return Subject;
}
