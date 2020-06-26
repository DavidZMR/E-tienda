const express = require('express');
const router = express.Router();

router.get('/check', (req,res) =>{
    res.send({ message: 'Hola Mundo, en que puedo ayudarte??' })
});

module.exports = router; 