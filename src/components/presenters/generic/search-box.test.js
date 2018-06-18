import SearchBox from './search-box'

describe('Search Box', () => {
  let subject, onButtonClick

  beforeEach(() => {
    onButtonClick = jest.fn()
    subject = shallow(<SearchBox placeholder='holding the place' onButtonClick={onButtonClick} />)
  })

  it('has an input box of type text', () => {
    expect(subject.find('input').props().type).toBe('text')
  })

  it('has an input box with a placeholder', () => {
    expect(subject.find('input').props().placeholder).toBe('holding the place')
  })

  it('has a button', () => {
    expect(subject.find('button').length).toEqual(1)
  })

  it('calls click handler when button is clicked with search term', () => {
    const event = { target: { value: 'what is life?' }}

    subject.find('input').simulate('keyUp', event)
    subject.find('button').simulate('click')
    expect(onButtonClick).toHaveBeenCalledWith('what is life?')
  })
})
