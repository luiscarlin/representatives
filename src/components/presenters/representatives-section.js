import React from 'react'
import './representatives-section.scss'
import ProfilePageContainer from "../containers/ProfilePageContainer";
import RepresentativeCardContainer from '../containers/RepresentativeCardContainer'

const representativeCards = (representatives) => (
  representatives.map((rep, index) => <RepresentativeCardContainer person={rep} key={index} />)
)

export default ({ representatives, isFetching }) => (
  <div className='representatives-section'>
    <ProfilePageContainer />
    { isFetching && <div className="loader">Loading...</div> }
    { !isFetching && representativeCards(representatives) }
  </div>
)