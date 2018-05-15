import React from 'react'

export default ({ representatives }) => (
  <div>
    { representatives.length > 0 ? <div>{ representatives.length } representatives found </div>  : '' }
    { representatives.map((rep, index) => (<div key={index}>{rep.name}, {rep.party}, {rep.email}</div>)) }
  </div>
)