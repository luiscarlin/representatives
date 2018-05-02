const request = ({ path, params}) => {
  const client = getClient()

  return new Promise((resolve, request) => {
    client.request({ path, params })
    .then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

const getClient = () => {
  return window.gapi.client
}

export default request