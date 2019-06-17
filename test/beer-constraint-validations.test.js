let beerController = require('./../src/controllers/BeerController')

console.warn = jest.fn()

test('Empty beers list warning', () => {
    expect(beerController.init([], {}).run()).toBe('Beer list is empty!')
})

test('Temperatures not sent', () => {
    expect(() => beerController.init([], null).run()).toThrow()
})