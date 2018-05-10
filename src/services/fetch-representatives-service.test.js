let gapiRequestSpy = jest.fn()
jest.setMock('../gapi', { request: gapiRequestSpy})

const fetchRepresentatives = require('./fetchRepresentatives').default

describe('Fetch Representatives', () => {
  const fakeAddress = 'my house'

  test('makes a "representatives" request to gapi service with the address', () => {
    gapiRequestSpy.mockReturnValue(Promise.resolve())

    fetchRepresentatives(fakeAddress)
    expect(gapiRequestSpy).toHaveBeenCalledWith({
      'path': '/civicinfo/v2/representatives',
      'params': { 'address': fakeAddress}
    })
  })

  test('returns list of representatives when gapi call is successful', async () => {
    gapiRequestSpy.mockReturnValue(Promise.resolve('your representatives'))
    const result = await fetchRepresentatives(fakeAddress)
    expect(result).toBe('your representatives')
  })

  test('returns an emfpty list when gapi call fails', async () => {
    gapiRequestSpy.mockReturnValue(Promise.reject('something horrible happened'))
    const result = await fetchRepresentatives(fakeAddress)
    expect(result).toEqual([])
  })
})