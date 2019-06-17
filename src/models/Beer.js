class Beer {
    constructor (data) {
        this.id = data.id
        this.type = data.type
        this.min = data.min
        this.max = data.max
    }
    isHighOrLow (temperature) {
        if (temperature > this.max) {
            return 'high'
        }
        if (temperature < this.min) {
            return 'low'
        }
        return false
    }
}

module.exports = Beer
