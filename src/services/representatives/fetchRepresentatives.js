import gapi from '../gapi'

const ENDPOINT = '/civicinfo/v2/representatives'

const fetchRepresentatives = (address) => {
  return gapi.request({
    'path': ENDPOINT,
    'params': { 'address': address }
  }).then((result) => {
    return result
  }).catch(() => {
    return []
  })
}

export default fetchRepresentatives