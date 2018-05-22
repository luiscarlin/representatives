import Card from './card'

describe('Card', () => {
  it('has the photo of the person', () => {
    const subject = shallow(<Card photoUrl='http://some/image'/>)
    expect(subject.find('img').props().src).toEqual('http://some/image')
  })

  it('has the name of the person')
})