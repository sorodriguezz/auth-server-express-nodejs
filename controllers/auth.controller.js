
const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario =  (req, res = response) => {

    const { correo, nombre, password } = req.body; // recibimos datos por body de la peticion
    console.log(correo, nombre, password);

    return res.json({
        ok: true,
        msg: 'Crear usuario'
    });
};

const loginUsuario = (req, res) => {

    const errors = validationResult(req); //comprobar errores del check
    
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { correo, password } = req.body;
    console.log(correo, password);

    return res.json({
        ok: true,
        msg: 'Login de usuario'
    });
};

const renovarToken =  (req, res) => {
    return res.json({
        ok: true,
        msg: 'Renew'
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken
};