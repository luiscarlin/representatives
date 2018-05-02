const API_KEY = 'AIzaSyC63iYNVwNtcZ5e_6-fr2X5kjlSANRPXXc'

const request = ({ path, params}) => {
  return new Promise((resolve, request) => {
    getClient()
      .then(client => client.request({ path, params }))
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

const getClient = () => {
  if (window.gapi && window.gapi.client) {
    return Promise.resolve(window.gapi.client)
  }

  return initializeGapi()
}

const initializeGapi = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = "https://apis.google.com/js/client.js"

    script.onload = () => {
      window.gapi.load('client', {
        callback: () => {
          window.gapi.client.setApiKey(API_KEY)
          resolve(window.gapi.client)
        },
        onerror: () => {
          reject('gapi client failed to load')
        },
        timeout: 5000,
        timeout: () => {
          reject('gapi client failed to load in 5 seconds')
        }
      })
    }
    document.body.appendChild(script)
  })
}

export { initializeClient, request }