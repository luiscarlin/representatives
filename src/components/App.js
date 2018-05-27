import React from 'react'
import AddressSearchSection from './containers/address-search-section-container'
import RepresentativesSection from './containers/representatives-section-container'
import styled from 'styled-components'

const App = styled.div`
  background-color: #f3f2ee;
  height: 100vh;
  width: 100vw;
`

const Body = styled.div`
  max-width: 1370px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 30px;
`

export default () => (
  <App>
    <Body>
      <AddressSearchSection/>
      <RepresentativesSection/>
    </Body>
  </App>
)
