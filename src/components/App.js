import React from 'react'
import AddressSearchSection from './containers/address-search-section-container'
import RepresentativesSection from './containers/representatives-section-container'
import styled from 'styled-components'

const App = styled.div`
  background-color: #2e323a;
  height: 100vh;
  width: 100vw;
`

const Body = styled.div`
  max-width: 1370px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 30px;
`

const AddressSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

`

export default () => (
  <App>
    <Body>
      <AddressSearchWrapper>
        <AddressSearchSection/>
      </AddressSearchWrapper>
      <RepresentativesSection/>
    </Body>
  </App>
)
