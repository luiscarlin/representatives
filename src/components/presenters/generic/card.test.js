import Img from 'react-image'
import Card from './card'
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
      }
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
    expect(subject.find(Img).props().loader).toEqual(<img alt="Pedro P. Pedrozo" src="capitol.svg" />)
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

  describe('soical media', () => {
    beforeEach(() => {
      person = {
        socialMedia: [
          {site: 'GooglePlus', handle: 'googleHandle'},
          {site: 'Twitter', handle: 'twitterHandle'},
          {site: 'Facebook', handle: 'facebookHandle'},
          {site: 'YouTube', handle: 'youtubeHandle'},
        ]
      }

      subject = shallow(<Card person={person} />)
    })

    it('opens GooglePlus links in new tab', () => {
        const googlePlusLink = subject.find({href: `https://plus.google.com/googleHandle`})

        expect(googlePlusLink.props().target).toEqual('_blank')
    })

    it('opens Twitter links in new tab', () => {
        const twitterLink = subject.find({href: `https://twitter.com/twitterHandle`})

        expect(twitterLink.props().target).toEqual('_blank')
    })

    it('opens Facebook links in new tab', () => {
        const facebookLink = subject.find({href: `https://facebook.com/facebookHandle`})

        expect(facebookLink.props().target).toEqual('_blank')
    })

    it('opens YouTube links in new tab', () => {
      const youtubeLink = subject.find({href: `https://youtube.com/youtubeHandle`})

        expect(youtubeLink.props().target).toEqual('_blank')
    })
  })
})
