const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const path = require('path');


const app = express();

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