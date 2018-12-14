import RepresentativesSection from './representatives-section'
import ProfilePageContainer from "../containers/ProfilePageContainer";
import RepresentativeCardContainer from "../containers/RepresentativeCardContainer";

describe('Representatives Section', () => {
  it('has a card for each representative', () => {
    const subject = shallow(<RepresentativesSection representatives={[{}, {}]}/>)
    expect(subject.find(RepresentativeCardContainer)).toHaveLength(2)
  })

  it('renders profile page', () => {
    const subject = shallow(<RepresentativesSection representatives={[{}, {}]}/>)
    expect(subject.find(ProfilePageContainer)).toHaveLength(1)
  })
})