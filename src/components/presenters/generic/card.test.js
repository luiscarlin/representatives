import Card from './card'

describe('Card', () => {
  let person, subject

  beforeEach(() => {
    person = {
      photoUrl: 'http://some/image',
      name: 'Pedro P. Pedrozo',
      email: 'pedro@pedro.com',
      phone: '(777) 777-1111',
      address: {
        lines: [ 'The WhiteHouse'],
        city: 'Lima',
        state: 'some state',
        zip: '22222'
      }
    }

    subject = shallow(<Card person={person} />)
  })

  it('has the photo of the person', () => {
    expect(subject.find('img').props().src).toEqual(person.photoUrl)
  })

  it('should show person name when image fails to load', () => {
    expect(subject.find('img').props().alt).toEqual(person.name)
  })

  it('has the name of the person', () => {
    expect(subject.find('.name').text()).toEqual(person.name)
  })

  it('has the email of the person', () => {
    expect(subject.find('.email').text()).toEqual(person.email)
  })

  it('has the phone number of the person', () => {
    expect(subject.find('.phone').text()).toEqual(person.phone)
  })

  it('has the address of the person', () => {
    expect(subject.find('.address-lines').text()).toEqual('The WhiteHouse')
  })
})
