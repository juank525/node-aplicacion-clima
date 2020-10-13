const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let direccion = argv.direccion;

/*lugar.getLatitudLongitud(argv.direccion)
    .then((resp) => {
        console.log(resp);
    }).catch((err) => {
        console.log(err);
    });

clima.getClima(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    });*/


let getInfo = async(direccion) => {
    try {
        let datos = await lugar.getLatitudLongitud(argv.direccion);
        let climaResponse = await clima.getClima(argv.direccion);
        return `El clima de ${direccion} es de ${climaResponse}`;
    } catch (err) {
        throw new `No se puede determinar el clima`;
    }
};


getInfo(direccion)
    .then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });