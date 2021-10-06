
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,   
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Limite de numeros a presentar en la consola'
                })
                .check( (argv,options) => {
                    if( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un numero!!!'
                    }
                    if( isNaN(argv.h) || argv.h < 1 ) {
                        throw 'El limite debe ser un numero mayor a 0'
                    }
                    return true;
                } )
                .argv;

module.exports = argv;