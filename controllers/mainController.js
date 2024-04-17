const controller = {}
const prueba = require('../models/prueba')

controller.main = (req,res) => {
  prueba.find({})
    .then(datos => {
      res.render('main', {
        data: datos
      })
    })
}

module.exports = controller