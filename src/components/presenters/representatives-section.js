import React from 'react'
import Card from './generic/card'
import './representatives-section.scss'
import { Loader } from 'semantic-ui-react'

const representativeCards = (representatives) => (
  representatives.map((rep, index) => <Card person={rep} key={index} />)
)

export default ({ representatives }) => (
  <div className='representatives-section'>
    {/*{ representativeCards(representatives) }*/}
     <Loader classname='loader' size='massive'>Loading</Loader>
  </div>
)