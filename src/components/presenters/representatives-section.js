import React from 'react'
import Card from './generic/card'
import './representatives-section.scss'
import { Loader } from 'semantic-ui-react'

const representativeCards = (representatives) => (
  representatives.map((rep, index) => <Card person={rep} key={index} />)
)

export default ({ representatives, isFetching }) => (
  <div className='representatives-section'>
     { !isFetching && representativeCards(representatives) }
     { isFetching && <Loader className='loader' size='massive'>Loading</Loader> }
  </div>
)