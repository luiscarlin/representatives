let gapiRequestMock = jest.fn()
jest.setMock('./gapi-service', { request: gapiRequestMock})

let repDataTransformerMock = jest.fn()
jest.setMock('../utils/representative-transformer', repDataTransformerMock)

const fetchRepresentatives = require('./fetch-representatives-service').default

describe('Fetch Representatives', () => {
  const fakeAddress = 'my house'

  it('makes a "representatives" request to gapi service with the address', () => {
    gapiRequestMock.mockReturnValue(Promise.resolve())

    fetchRepresentatives(fakeAddress)
    expect(gapiRequestMock).toHaveBeenCalledWith({
      'path': '/civicinfo/v2/representatives',
      'params': { 'address': fakeAddress}
    })
  })

  it('transforms the rep data when gapi call is successful', async () => {
    gapiRequestMock.mockReturnValue(Promise.resolve({ status: 200, result: 'your representatives'}))
    const result = await fetchRepresentatives(fakeAddress)
    expect(repDataTransformerMock).toHaveBeenCalledWith('your representatives')
  })

  it('returns the formatted list of representatiives', async () => {
    repDataTransformerMock.mockReturnValue(['person1', 'person2'])
    gapiRequestMock.mockReturnValue(Promise.resolve({ status: 200, result: 'your representatives'}))
    const result = await fetchRepresentatives(fakeAddress)
    expect(result).toEqual([ 'person1', 'person2' ])
  })

  it('returns an empty list when gapi call fails', async () => {
    gapiRequestMock.mockReturnValue(Promise.reject('something horrible happened'))
    const result = await fetchRepresentatives(fakeAddress)
    expect(result).toEqual([])
  })

  it('returns an empty list when gapi response is not 200', async () => {
    gapiRequestMock.mockReturnValue(Promise.resolve({ status: 400, result: 'something went bad'}))
    const result = await fetchRepresentatives(fakeAddress)
    expect(result).toEqual([])
  })

  it('returns an empty list when transformer returns null', async () => {
    repDataTransformerMock.mockReturnValue(null)
    gapiRequestMock.mockReturnValue(Promise.resolve({ status: 200, result: 'your representatives'}))
    const result = await fetchRepresentatives(fakeAddress)
    expect(result).toEqual([])
  })
})