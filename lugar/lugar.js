const axios = require('axios');



let getLatitudLongitud = async(ciudad) => {
    const encodeURL = encodeURI(ciudad);
    let config = {
        method: 'get',
        url: `https://rapidapi.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            'x-rapidapi-key': 'c9c36e33a0msh2860df89b6c73ccp1d1df0jsnfb7d2956720f',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'useQueryString': 'true'
        }
    };
    const response = await axios(config);
    const data = response.data;
    if (data.Results === null) {
        throw new Error(`No hay resultados ${ciudad}`)
    }

    const result = data.Results[0];
    const direccion = result.name;
    const lat = result.lat;
    const lng = result.len;

    return {
        direccion,
        lat,
        lng
    }



}

module.exports = {
    getLatitudLongitud
}