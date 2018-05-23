import Card from './card'

describe('Card', () => {
  it('has the photo of the person', () => {
    const subject = shallow(<Card photoUrl='http://some/image' />)
    expect(subject.find('img').props().src).toEqual('http://some/image')
  })

  it('has the name of the person', () => {
    const subject = shallow(<Card name='Pedro P. Pedrozo' />)
    expect(subject.find('.name').text()).toEqual('Pedro P. Pedrozo')
  })

  it('has the email of the person', () => {
    const subject = shallow(<Card email='pedro@pedro.com' />)
    expect(subject.find('.email').text()).toEqual('pedro@pedro.com')
  })

  it('has the phone number of the person', () => {
    const subject = shallow(<Card phone='(777) 777-1111' />)
    expect(subject.find('.phone').text()).toEqual('(777) 777-1111')
  })

  it('has the address of the person', () => {
    const subject = shallow(<Card address='123 Main St. Columbus, OH 43535' />)
    expect(subject.find('.address').text()).toEqual('123 Main St. Columbus, OH 43535')
  })
})
