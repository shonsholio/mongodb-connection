const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

dotenv.config({ path: './config.env' })
mongoose.connect(process.env.MONGODB_CONNECT)
  .then(connection => {
    console.log('ENCHUFADOS A MONGO_DB')
  })
  .catch('ERROR CONECTANDO EN MONGO')


//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

//IMPORTING ROUTES
const mainRoutes = require ('./routes/main')

//MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());

app.use('/', mainRoutes)

app.listen(app.get('port'), () => {
  console.log('CONECTADOS Y TRABJANDO')
})