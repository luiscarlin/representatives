import Img from 'react-image'
import Card from './card'
import SocialMediaIconContainer from '../social-media-icon-container'
import capitolSvg from '../../../assets/capitol.svg'

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
      },
      socialMedia: ['facebook', 'youtube']
    }

    subject = shallow(<Card person={person} />)
  })

  it('has the photo of the person', () => {
    expect(subject.find(Img).props().src[0]).toEqual(person.photoUrl)
  })

  it('has the capitol as a backup if the image fails to load', () => {
    expect(subject.find(Img).props().src[1]).toEqual(capitolSvg)
  })

  it('displays the capitol while the person image is loading', () => {
    expect(subject.find(Img).props().loader).toEqual(<img alt="Pedro P. Pedrozo" src="capitol.svg" target="_blank"/>)
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


  it('renders social media links container', () => {
    expect(subject.find(SocialMediaIconContainer).props().socialMedia).toEqual(['facebook', 'youtube'])
  })
})
