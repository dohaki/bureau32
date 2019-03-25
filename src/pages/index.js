import React from 'react'

import collage from '../img/collage_with_vitrine.jpg'

const IndexPage = () => (
  <div style={{
    height: '100%',
    display: 'flex',
  }}>
    <img
      src={collage}
      alt="collage-with-vitrine"
      style={{
        maxWidth: '40rem',
        height: 'auto',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '6.3rem',
        marginBottom: 'auto',
      }}
    />
  </div>
)

export default IndexPage
