import SearchBox from './'

describe('Search Box', () => {
  it('has an input box', () => {
    let subject = shallow(<SearchBox/>)
    expect(subject.find('input')).toHaveLength(1)
  })
  
  it('has a button')
})