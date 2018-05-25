import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  height: 30rem;
  border: solid grey 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img `
  height: 70%;
  width: auto;
`

const InfoSection = styled.div`
`

export default ({ person }) => (
  <CardContainer>
    <Image src={person.photoUrl} alt={person.name}/>
    <InfoSection>
      <div className='name'>{person.name}</div>
      <div className='email'>{person.email}</div>
      <div className='phone'>{person.phone}</div>
      <div className='address'>{person.address}</div>
    </InfoSection>
  </CardContainer>
)
