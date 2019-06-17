let BeerController = {
    init (beers, temperatures) {
        if (!temperatures) {
            throw new Error("Temperatures not available")
        }
        return new BeerManager(beers, temperatures)
    }
}
  
class BeerManager {
    constructor (beers = [], temperatures) {
        this.beers = beers
        this.temperature = temperatures
    }
  
    run () {
        if (this.beers && this.beers.length > 0) {
            let beersLog = []
            for (let i = 0; i < this.beers.length; i++) {
                let beer = this.beers[i]
                let temperature = this.temperature.getTemperature()
                if (!beer.isHighOrLow(temperature)) {
                    beersLog.push(`#${beer.id} (${beer.type}) at ${temperature} degrees.`)
                } else {
                    if (beer.isHighOrLow(temperature) === 'high') {
                        beersLog.push(`#${beer.id} (${beer.type}) too high: ${temperature} [Maximum expected: ${beer.max}]`)
                    }
                    if (beer.isHighOrLow(temperature) === 'low') {
                        beersLog.push(`#${beer.id} (${beer.type}) too low: ${temperature} [Minimum expected: ${beer.min}]`)
                    }
                }
            }
            return beersLog
        } else {
            return 'Beer list is empty!'
        }
    }
}  
module.exports = BeerController