import SocialMediaIconContainer from './social-media-icon-container'

describe('social media icon container', () => {
  let subject

  beforeEach(() => {
    const socialMedia = [
      {site: 'GooglePlus', handle: 'googleHandle'},
      {site: 'Twitter', handle: 'twitterHandle'},
      {site: 'Facebook', handle: 'facebookHandle'},
      {site: 'YouTube', handle: 'youtubeHandle'}
    ]

    subject = shallow(<SocialMediaIconContainer socialMedia={socialMedia} />)
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