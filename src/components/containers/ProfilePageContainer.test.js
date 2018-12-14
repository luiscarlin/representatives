import ProfilePageContainer from './ProfilePageContainer'

describe('ProfilePageConnector', () => {
  it('renders information of representative', () => {
    const state = {
      modal: {
        representativeName: 'George Washington'
      },
      representatives: {
        data: [
          {
            name: 'George Washington',
            office: 'President'
          },
          {
            name: 'Abraham Lincoln'
          }
        ]
      }
    }
    const mountedComponent = mountComponentWithState(<ProfilePageContainer />, state).node

    expect(mountedComponent.find('.name').text()).toEqual('George Washington')
  })
})
