import React from 'react'
import Card from './generic/card'
import styled from 'styled-components'

const CardsSection = styled.div`
  display: flex;
  flex-flow: wrap;
`

const representativeCards = (representatives) => (
  representatives.map((rep, index) => <Card person={rep} key={index} />)
)

export default ({ representatives }) => (
  <CardsSection>
    { representativeCards(representatives) }
  </CardsSection>
)