var nodemailer = require('nodemailer');

//MAIL 
exports.enviar = function(req,res){
    console.log("mail");

    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jorgetortuganinja@gmail.com',
            pass: 'mayela123'
        }
    });

    // Definimos el email
    var mailOptions = {
        from: 'jorgetortuganinja@gmail.com',
        to: 'jor_manuel186@hotmail.com', // 
        subject: req.body.asunto, //
        text: req.body.mensaje //
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Correo no enviado");

        } else {
            console.log("Correo enviado");
        }
    });
}