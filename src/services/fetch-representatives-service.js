import { request } from './gapi-service'

const ENDPOINT = '/civicinfo/v2/representatives'

const requestRepresentatves = (address) => {
  return request({
    'path': ENDPOINT,
    'params': { 'address': address }
  }).then((result) => {
    return result
  }).catch(() => {
    return null
  })
}

const fetchRepresentatives = async (address) => {
  const response = await requestRepresentatves(address)
  
  if (response && response.status === 200) {
    return response.result
  }

  return []
}

export default fetchRepresentatives