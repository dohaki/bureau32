import React from 'react'

import titleImg from '../img/inst.png'

const IndexPage = () => (
  <div style={{ display: 'flex' }}>
    <img
      src={titleImg}
      alt="collage-with-vitrine"
      style={{
        maxWidth: '40rem',
        height: 'auto',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '3.3rem',
        marginBottom: 'auto',
      }}
    />
  </div>
)

export default IndexPage
