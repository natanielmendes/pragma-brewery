let beerController = require('../api/src/controllers/beerController')

console.warn = jest.fn()

test('Empty beers array list warning', () => {
    expect(beerController.build([], {})).toBe('Empty beers list')
})

test('Empty beers string list warning', () => {
    expect(beerController.build('', {})).toBe('Empty beers list')
})

test('Null beers string list warning', () => {
    expect(beerController.build('', {})).toBe('Empty beers list')
})

test('Empty string as temperature generator', () => {
    expect(() => beerController.build([], '').statusStrings()).toThrow()
})

test('Null temperature generator warning', () => {
    expect(() => beerController.build([], null).statusStrings()).toThrow()
})