const gapiRequestSpy = jest.fn(() => Promise.resolve('you representatives'))
jest.setMock('../gapi', { request: gapiRequestSpy})

const fetchRepresentatives = require('./').default

describe('Fetch Representatives', () => {
  const fakeAddress = 'my house'

  test('makes a "representatives" request to google services with the address', () => {
    fetchRepresentatives(fakeAddress)
    expect(gapiRequestSpy).toHaveBeenCalledWith({
      'path': '/civicinfo/v2/representatives',
      'params': { 'address': fakeAddress}
    })
  })
})