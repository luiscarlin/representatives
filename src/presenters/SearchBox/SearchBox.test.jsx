import SearchBox from './'

describe('Search Box', () => {
  let subject, onButtonClick

  beforeEach(() => {
    onButtonClick = jest.fn()
    subject = shallow(<SearchBox onButtonClick={onButtonClick} />)
  })

  it('has an input box of type text', () => {
    expect(subject.find('input').props().type).toBe('text')
  })

  it('has a button', () => {
    expect(subject.find('button')).toHaveLength(1)
  })

  it('calls click handler when button is clicked with search term', () => {
    const event = { target: { value: 'what is life?' }}

    subject.find('input').simulate('change', event)
    subject.find('button').simulate('click')
    expect(onButtonClick).toHaveBeenCalledWith('what is life?')
  })
})
