import RepresentativesSectionContainer from './representatives-section-container'
import RepresentativesSection from '../presenters/representatives-section'

describe('Representatives Section Container', () => {
  const state = {
    representatives: {
      data: [
        {
          name: 'Dr Who',
          phone: '893'
        }
      ]
    }
  }

  it('renders Representative Section Presenter', () => {
    const mountedComponent = mountComponentWithState(<RepresentativesSectionContainer />, state)
    expect(mountedComponent.node.find(RepresentativesSection).length).toEqual(1)
  })
})
