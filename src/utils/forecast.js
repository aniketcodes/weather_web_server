const request = require('request')
//cf6f0afa95be9160b8a7bf556be4a9ac
const forecast = (cityName, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=cf6f0afa95be9160b8a7bf556be4a9ac`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(body)
        }
    })
}

module.exports = forecast