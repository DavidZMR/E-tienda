const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const misRouters = require('./rutas/ruta');
const mail = require('./rutas/sendmail');
const app = express();


  

app.use(cors());


const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use('/', misRouters);
app.get('/', function (req, res) {
    res.send('Hello World');
});


//ENVIO DE CORREOS  //
app.post('/enviar',mail.enviar);

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    users.push(user);
    res.json("user addedd");
});



app.listen(port, () => {
    console.log(`El Servidor esta en: http://localhost:${port}`);
});
