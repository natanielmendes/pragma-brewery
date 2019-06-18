let BeerController = {
    build (beersList, temperatureGenerator) {
        if (!beersList || beersList.length === 0) {
            return "Empty beers list"
        }
        if (!temperatureGenerator || temperatureGenerator == '') {
            throw new Error("Temperature generator is required")
        }
        return new BeerManager(beersList, temperatureGenerator)
    }
}
  
class BeerManager {
    constructor (beers = [], temperatures) {
        this.beers = beers
        this.temperature = temperatures
    }

    statusJson() {
        if (this.beers && this.beers.length > 0) {
            let json = []
            for (let i = 0; i < this.beers.length; i++) {
                let beer = this.beers[i]
                beer.temperature = this.temperature.getTemperature()
                json.push(beer)
            }
            return json
        } else {
            return 'Beers list is empty!'
        }
    }

    statusStrings() {
        if (this.beers && this.beers.length > 0) {
            let notification = []
            for (let i = 0; i < this.beers.length; i++) {
                let beer = this.beers[i]
                let temperature = this.temperature.getTemperature()
                if (!beer.isHighOrLow(temperature)) {
                    notification.push(`#${beer.id} (${beer.type}) at ${temperature} degrees.`)
                } else {
                    if (beer.isHighOrLow(temperature) === 'high') {
                        notification.push(`#${beer.id} (${beer.type}) too high: ${temperature} [Maximum expected: ${beer.maxTemp}]`)
                    }
                    if (beer.isHighOrLow(temperature) === 'low') {
                        notification.push(`#${beer.id} (${beer.type}) too low: ${temperature} [Minimum expected: ${beer.minTemp}]`)
                    }
                }
            }
            return notification
        } else {
            return 'Beers list is empty!'
        }
    }
}  
module.exports = BeerController