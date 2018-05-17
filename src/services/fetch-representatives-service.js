import { request } from './gapi-service'
import repDataTransformer from '../utils/representative-transformer'

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

  if (!response || response.status != 200) {
    return []
  }

  const formattedRepData = repDataTransformer(response.result)

  if (!formattedRepData) {
    return []
  }

  return formattedRepData
}

export default fetchRepresentatives