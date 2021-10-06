const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

 crearArchivo( argv.base, argv.listar, argv.hasta )
     .then( nombreArchivo => console.log(nombreArchivo.yellow,'creado!!!'.green) )
     .catch(err => console.log(err));

 