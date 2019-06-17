const RandomTemperature = {
    getTemperature () {
        return Math.floor( Math.random() * ( 1 + 10 - 0 ) ) + 0;
    }
}  
module.exports = RandomTemperature