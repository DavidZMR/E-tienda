const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const misRouters = require('./rutas/ruta');
// const nodemail= require('nodemailer');
const app = express();
app.use(cors());


const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use('/', misRouters);

//MAIL
app.post('/enviar', function(req, res){
    misRouters.enviar
  });

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`El Servidor esta en: http://localhost:${port}`);
});
