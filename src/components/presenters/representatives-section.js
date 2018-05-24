import React from 'react'
import Card from './generic/card'

const representativeCards = (representatives) => (
  representatives.map((rep, index) => <Card person={rep} key={index} />)
)

export default ({ representatives }) => (
  <div>
    { representativeCards(representatives) }
  </div>
)