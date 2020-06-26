const express = require('express');

const router = express.Router();

router.get('/check', (req, res) => {
    res.send({ message: 'Hola Mundo, en que puedo ayudarte??' })
});


//MAIL 
router.enviar = function (req, res) {
    var nodemailer = require('nodemailer');
    // email sender function
    exports.enviar = function (req, res) {
        // Definimos el transporter
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'jormanuel202@gmail.com',
                pass: '9942566jorge'
            }
        });
        // Definimos el email
        var mailOptions = {
            from: 'jormanuel202 <jormanuel202@gmail.com>',
            to: req.body.email,
            subject: req.body.asunto,
            text: req.body.mensaje
        };
        // Enviamos el email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("Correo no enviado");
                // res.render('error',{titulo: "Error al enviar el Correo"});
                res.send(500, err.message);
            } else {
                console.log("Correo enviado");
                // res.render('enviado',{titulo: "Correo Enviado"});
                res.status(200).jsonp(req.body);
            }
        });
    };
}

module.exports = router;

