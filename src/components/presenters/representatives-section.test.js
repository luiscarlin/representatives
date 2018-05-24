import RepresentativesSection from './representatives-section'
import Card from './generic/card'

describe('Representatives Section', () => {
  it('has a card for each representative', () => {
    const subject = shallow(<RepresentativesSection representatives={[{}, {}]}/>)
    expect(subject.find(Card)).toHaveLength(2)
  })
})