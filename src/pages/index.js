import React from 'react'
import collage from '../img/collage_with_vitrine.jpg'

const IndexPage = () => (
  <div>
    <img
      src={collage}
      alt="collage-with-vitrine"
      style={{
        width: '41%',
        height: 'auto',
        zIndex: '-100',
        position: 'fixed',
        bottom: '0',
        left: '0'
      }}
    />
  </div>
)

export default IndexPage
