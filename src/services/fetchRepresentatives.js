const fetchRepresentatives = () => {
  return window.gapi.client.request({
    'path': '/civicinfo/v2/representatives',
    'params': { 'address': '1762 Clifton Rd, Upper Arlington, OH 43221' }
  }).then((response) => {
    return response.result
  }).catch(() => {
    return []
  })
}

export { fetchRepresentatives }