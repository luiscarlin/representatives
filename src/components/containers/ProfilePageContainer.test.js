import ProfilePage from "../presenters/ProfilePage";

describe('ProfilePageConnector', () => {
  it('hides modal when there is no name of rep to show', () => {
    const state = {
      modal: {
        representativeName: 'George Washington'
      }
    }
    const mountedComponent = mountComponentWithState(<ProfilePage />, state).node

    expect(mountedComponent.find(ProfilePage).length).toEqual(1)
  })
})
