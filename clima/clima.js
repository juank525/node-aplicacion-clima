const axios = require('axios');
const apiKey = '182ba07bfa6d7f572fcaaccd5ae56331';

const getClima = async(ciudad) => {
    let config = {
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`,
        headers: {}
    };

    let response = await axios(config);

    return response.data.main;
}

module.exports = {
    getClima
}