import React from 'react'
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'

enzyme.configure({ adapter: new Adapter() })

window.shallow = enzyme.shallow
window.React = React

window.mountComponentWithState = (Component, state) => {
  let dispatchMock = jest.fn()

  let fakeStore = {
    getState: () => {
      return state
    },
    dispatch: dispatchMock,
    subscribe: jest.fn()
  }

  let node = enzyme.mount(
    <Provider store={fakeStore}>
      {Component}
    </Provider>
  )

  return {
    dispatchMock,
    node
  }
}

