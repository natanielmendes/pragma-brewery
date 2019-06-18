class Beer {
    constructor (data) {
        this.id = data.id
        this.type = data.type
        this.minTemp = data.minTemp
        this.maxTemp = data.maxTemp
    }
    isHighOrLow (temperature) {
        if (temperature > this.maxTemp) {
            return 'high'
        }
        if (temperature < this.minTemp) {
            return 'low'
        }
        return false
    }
}
module.exports = Beer