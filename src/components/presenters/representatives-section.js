import React from 'react'
import Card from './generic/card'
import './representatives-section.scss'

const representativeCards = (representatives) => (
  representatives.map((rep, index) => <Card person={rep} key={index} />)
)

export default ({ representatives, isFetching }) => (
  <div className='representatives-section'>
     { !isFetching && representativeCards(representatives) }
     { isFetching && <div className="loader">Loading...</div> }
  </div>
)